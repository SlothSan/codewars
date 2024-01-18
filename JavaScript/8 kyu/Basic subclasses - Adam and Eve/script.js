class Human {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }

  speak() {
    console.log(`Hello, I am ${this.name}.`);
  }
}

class Man extends Human {
  constructor(name) {
    super(name, "Male");
  }
}

class Woman extends Human {
  constructor(name) {
    super(name, "Female");
  }
}

class God {
  static create() {
    const adam = new Man("Adam");
    const eve = new Woman("Eve");
    return [adam, eve];
  }
}

const humans = God.create();
