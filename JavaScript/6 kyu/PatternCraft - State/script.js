/*
The State Design Pattern can be used, for example, to manage the state of a tank in the StarCraft game.

The pattern consists in isolating the state logic in different classes rather than having multiple ifs to determine what should happen.

Your Task
Complete the code so that when a Tank goes into SiegeMode it cannot move and its damage goes to 20. When it goes to TankMode it should be able to move and the damage should be set to 5.

You have 3 classes:

Tank: has a state, canMove and damage properties
SiegeState and TankState: has canMove and damage properties
Note: The tank initial state should be TankState.

Resources
PatternCraft > State
SourceMaking > State
Wikipedia > State
PatternCraft series
State Pattern
Strategy Pattern
Visitor Pattern
Decorator Pattern
Adapter Pattern
Command Pattern
The original PatternCraft series (by John Lindquist) is a collection of Youtube videos that explains some of the design patterns and how they are used (or could be) on StarCraft.


*/

class TankState {
  constructor() {
    this.canMove = true;
    this.damage = 5;
  }

  enterSiegeMode() {
    return new SiegeState();
  }
}

class SiegeState {
  constructor() {
    this.canMove = false;
    this.damage = 20;
  }

  enterTankMode() {
    return new TankState();
  }
}

// Tank class using state pattern
class Tank {
  constructor() {
    this.state = new TankState();
  }

  enterSiegeMode() {
    this.state = this.state.enterSiegeMode();
  }

  enterTankMode() {
    this.state = this.state.enterTankMode();
  }

  get canMove() {
    return this.state.canMove;
  }

  get damage() {
    return this.state.damage;
  }
}

let tank = new Tank();
console.log(tank.canMove, tank.damage); // true 5
tank.state = new SiegeState();
console.log(tank.canMove, tank.damage); // false 20 
