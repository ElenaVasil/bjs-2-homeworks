class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.timerId = null;
	}
	addClock(time, func, id) {
		if (id === undefined) {
			throw new Error('error text');
		};
		if (this.alarmCollection.find(item => item.id === id)) {
			console.error('Звонок с таким id уже существует');
			return;
		} else {
			this.alarmCollection.push({time, func, id});
		}
	}
	removeClock(id) {
		let searchItem = this.alarmCollection.findIndex(item => item.id === id)
		if (searchItem>=0) {
			this.alarmCollection.splice(searchItem,1);
			return true;
		} else {
			return false;
		}
	}
	getCurrentFormattedTime() {
		const currentDate = new Date();
    	const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
    	const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;
    	return (`${hours}:${minutes}`);
	}
	start() {
		const checkClock = (bell) => {
			if (this.getCurrentFormattedTime() === bell.time) {
				bell.func();
			}
		}
		if (this.timerId === null) {
			this.timerId = setInterval(() => {
        		this.alarmCollection.forEach(alarm => checkClock(alarm))
      		}, 1000);
		}
	}
	stop() {
		if (this.timerId !== null) {
			clearInterval(this.timerId);
			this.timerId = null;
		}
	}
	printAlarms() {
		this.alarmCollection.forEach((i) => console.log(`${i.id} ${i.time}`));
	}
	clearAlarms() {
		stop();
		this.alarmCollection.forEach((i) => this.alarmCollection.splice(i));	
	}
}
function testCase() {
	let alarm = new AlarmClock;
	console.log(alarm.getCurrentFormattedTime());
	alarm.addClock('16:00', () => console.log("пора вставать1"), 1);
	alarm.addClock('15:09', () => {console.log("пора вставать2"); alarm.removeClock(2)}, 2);
	alarm.addClock('15:38', () => {console.log("пора вставать3"); alarm.clearAlarms()}, 3);
	console.log(alarm);
	console.log(alarm.removeClock(2));
	console.log(alarm);
	alarm.start();
	alarm.printAlarms();
	
}
testCase();