//Task1
class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}
	fix() {
		this.state = this.state*1.5;
	}
	set state(value) {
		if (value<0) {
			this._state = 0;
		} else if (value>100) {
			this._state = 100;
		} else this._state = value;
	}
	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type ="magazine";
	}
}
class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type ="book";
		this.author = author;
	}
}
class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type ="novel";
	}
}
class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type ="fantastic";
	}
}
class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type ="detective";
	}
}
//Task2
class Library extends Book {
	constructor(name) {
		super();
		this.name = name;
		this.books =[];
	}
	addBook(book) {
		if (this.state>30) {
			this.books.push(book);
		} else return;
	}
	findBookBy(type, value) {
		let NeedBook = this.books.find(i => i[type] === value);
		if (NeedBook === undefined) {
			return null;
		} else return NeedBook;
	}
	giveBookByName(bookName) {
		let iBook = this.books.findIndex(i => i.name === bookName);
		if (iBook === -1) {
			return null;
		} else {
			let NeedBookName = this.books[iBook];
			this.books.splice(iBook, 1);
			return NeedBookName;
		}
	}
}
//Task3
class Student {
  constructor(name) {
    this.name = name;
    this.marks = [];
  }
  addMark(mark,subject) {
    if (mark>0 && mark <6) {
      this.marks.push([mark, subject]);
    } else {
      console.log(`Ошибка ввода ${mark}, оценка должна быть в пределах 1 - 5!`);
    }
  } 
  getAverage() {
    let sum = 0;
    for (let i=0; i<this.marks.length; i++) {
      sum += this.marks[i][0];
    }
    return (sum/this.marks.length);
  }
  getAverageBySubject(subjectName) {
    let arr = [];    
    let sum = 0;
    for (let i=0; i<this.marks.length; i++) {
      if (this.marks[i][1] === subjectName) {
        sum += this.marks[i][0];
        arr.push(this.marks[i][0]);
      }  
    }
    return (sum/arr.length);
  }
}