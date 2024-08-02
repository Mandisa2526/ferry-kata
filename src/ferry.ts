import { Car } from "./car";

export class Ferry {
   // Private properties to keep track of the allowed numbers
   private maxCars: number;
   private maxPeople: number;

   // Properties to keep track of the current number of cars and people
   private currentCars: number = 0;
   private currentPeople: number = 0;
   private cars: Car[] = [];

   constructor(maxCars:number, maxPeople:number){
    this.maxCars = maxCars;
    this.maxPeople = maxPeople;
   }
     // Method to board a car onto the ferry
    public board(car: Car): string {
        if (this.currentCars < this.maxCars && (this.currentPeople + car.passengerCount) <= this.maxPeople) {
            this.currentCars++;
            this.currentPeople += car.passengerCount;
            this.cars.push(car);

            car.incrementTripCount();

            if(car.getTripCount() == 4){
                return 'half price!'
            }else if(car.getTripCount() % 7 == 0){
                return 'you go free!'
            }else{
                return 'accepted';
            }
            
        } else {
            return 'rejected';
        }
    }
    public leave(car: Car): boolean {
        const index = this.cars.indexOf(car);
        if (index !== -1) {
            this.currentCars--;
            this.currentPeople -= car.passengerCount;
            this.cars.splice(index, 1);
            return true;
        }
        return false;
    }

    // Getters for the current count of cars and people
    public get carCount(): number {
        return this.currentCars;
    }

    public get peopleCount(): number {
        return this.currentPeople;
    }
    public getCarCountByColor(color: string): number {
        return this.cars.filter(car => car.colour === color).length;
    }
}