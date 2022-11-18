# ES6 Classes
- Classes replace constructor functions.
- `class SubClass extends Class {}`.
- `super` is used to call the class that’s extended.

```
class Rectangle extends Shape {
	constructor(sideA, sideB) {
		const area = sideA * sideB
		const perimeter = 2 * (sideA + sideB)
		
		super(area, perimeter)
		this.sideA = sideA
		this.sideB = sideB
	}
	printInfo() {
		console.log(`Sides are ${this.sideA}, ${this.sideB}`)
		super.printInfo()
	}
}

const rectangle = new Rectangle(12, 9)

console.log(rectangle)
rectangle.printInfo()
```

- 