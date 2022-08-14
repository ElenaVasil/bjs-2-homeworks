//Task1
function parseCount(count) {
  const countParse = Number.parseInt(count);
    if (Number.isNaN(countParse)) {
      throw new Error("Невалидное значение");
  	};
  return countParse;
}
function validateCount(numb) {
  try {
    const numbParse = parseCount(numb);
    return numbParse;
  } catch(Error) {
   return Error;
  }
}
//Task2
class Triangle {
  	constructor(a, b, c) {
    	this.a = a;
    	this.b = b;
    	this.c = c;	
    	if ((this.a+this.b < this.c) || (this.a+this.c < this.b) || (this.c+this.b < this.a)) {
			throw new Error('Треугольник с такими сторонами не существует');	 
  		}
  	}
	getPerimeter() {
	  	return (this.a + this.b + this.c);
	}
	getArea() {
		let p = (this.a + this.b + this.c)/2;
		let s = (Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c))).toFixed(3);
  		return Number(s);
	}  
}
function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch {
		return {
			getPerimeter() {
				return 'Ошибка! Треугольник не существует';
			},
			getArea() {
				return 'Ошибка! Треугольник не существует';
			}
		}
	}
}
