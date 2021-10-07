// Your code here

class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce((prev, current) => prev + current);
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides !== 3) return false;
        const sidesSorted = [...this.sides].sort((first, second) => {
            if (first < second) return -1;
            if (first > second) return 1;
            return 0;
        });
        if (sidesSorted[0] + sidesSorted[1] > sidesSorted[2]) return true;
        return false;
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides !== 4) return false;
        if (this.sides.every(side => side === this.sides[0])) {
            return true;
        } else {
            return false;
        }
    }

    get area() {
        return this.sides[0] ** 2;
    }
}