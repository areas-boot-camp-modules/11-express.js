function Developer(name, technology) {
  this.name = name
  this.tech = technology
  this.introduction = () => {
    console.log(`Hello, my name is ${this.name} and I love ${this.technology}.`)
  }
}

const brendaDeveloper = new Developer("Brenda", "HTML")
const christianDeveloper = new Developer("Christian", "JavaScript")

brendaDeveloper.introduction()
christianDeveloper.introduction()
