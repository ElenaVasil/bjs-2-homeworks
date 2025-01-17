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
    return parseCount(numb);
  } catch(error) {
   return error;
  }
}
//Task2
class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;	
    if ((a+b < c) || (a+c < b) || (c+b < a)) {
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
