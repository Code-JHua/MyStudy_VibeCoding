function classDecorator<T extends {new(...args: any[]): {}}>(constructor: T){
  return class extends constructor{
    newProperty = 'hello world'
    hello: string = 'Tom'
  }
}

@classDecorator
class Greeter{  // Greeter = Greeter || classDecorator(Greeter)
  property: string = 'property'
  hello: string
  constructor(message: string){
    this.hello = message
  }
}

console.log(new Greeter('world'));
// Greeter { property: 'property', hello: 'world', newProperty: 'hello world' }
