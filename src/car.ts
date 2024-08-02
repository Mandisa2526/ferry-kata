export class Car {
 //instance
 public readonly colour: string;
 public readonly passengerCount: number;
 private tripCount: number = 0;
 //constructor colour and the number of passengers
 constructor(colour: string,passengerCount: number){
     this.colour = colour;
     this.passengerCount = passengerCount;
 }
 public incrementTripCount(): void {
    this.tripCount++;
}

public getTripCount(): number {
    return this.tripCount;
}
}