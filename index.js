class Polygon {
  constructor(sides) {
    this.sides = sides
  }

  get countSides() {
    return this.sides.reduce((sum, side) => side ? sum += 1 : 0, 0)
  }

  get perimeter() {
    return this.sides.reduce((sum, side) => sum += side, 0)
  }
}

class Triangle extends Polygon {
  get isValid() {
    const [a, b, c] = [...this.sides]
    return (a + b > c) && (b + c > a) && (c + a > b)
  }
}

class Square extends Polygon {
  
  get isValid() {
    const [a, b, c, d] = [...this.sides]
    return a === b && b === c && c === d && d === a
  }

  get area() {
    return this.sides[0] ** 2
  }
}