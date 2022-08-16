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
			if (getCurrentFormattedTime() === bell.time) {
				bell.func();
			}
		}
		if (this.timerId === null) {
			this.timerId = setInterval(this.alarmCollection.forEach(i => i) => {
				checkClock(i);
			}, 1000);
		}
	}
	stop() {
		if (!this.timerId === null) {
			clearInterval(this.timerId);
			this.timerId === null;
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