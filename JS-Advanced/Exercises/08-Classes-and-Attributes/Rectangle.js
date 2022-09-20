class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  calcArea() {
    return this.width * this.height;
  }
}

let rect = new Rectangle(4, 5, 'Red');
console.log(rect.width);      // 4
console.log(rect.height);     // 5
console.log(rect.color);      // Red
console.log(rect.calcArea()); // 20