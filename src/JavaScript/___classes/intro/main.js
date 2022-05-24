class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color
    }
    get Area() {
        return this.calcArea
    }
    set Width(width){
        this.width = width
    }
    set Height(height){
        this.height = height
    }
    static calcArea() {
        return this.width * this.height
    }
}
const cube = new Rectangle(20, 4, 'blue')
// console.log(cube.Area)
cube.Width = 50
cube.Height = 50
// console.log(cube.Area)
console.log(Rectangle.calcArea())




// class Person {
//     constructor() {
//         this.name = 'John';
//         this.lastName = 'Doe';
//     }
//     location(){
//         console.log(`${super.name} is at ${location}`)
//     }
// }
// class Located extends Person {
//     constructor(location) {
//         super.location = location
//     }
//     location(location) {
//         console.log(`${super.name} is at ${location}`)
//     }
// }
// const person = new Person();
// const Per = new Located('Utena')
