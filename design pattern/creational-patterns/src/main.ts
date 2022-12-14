enum VehicleType{
    Bus,
    Taxi,
    Boat
}

class Passenger{
    private _name: string;
    private _favoriteVehicle: VehicleType

    constructor(name:string, favoriteVehicle:VehicleType){
        this._name = name
        this._favoriteVehicle = favoriteVehicle;
    }

    get favoriteVehicle(): VehicleType {
        return this._favoriteVehicle
    }

    get name(): string {
        return this._name;
    }
}

interface Vehicle{
    trasport(passenger: Passenger): void
}

class Bus implements Vehicle{
    constructor(){

    }
    trasport(passenger: Passenger): void {
        console.log(`${passenger.name} transport successfuly with ${this.constructor.name}`)
    } 
}

class Taxi implements Vehicle{
    constructor(){

    }
    trasport(passenger: Passenger): void {
        console.log(`${passenger.name} transport successfuly with ${this.constructor.name}`)
    } 
}

class Boat implements Vehicle{
    constructor(){

    }
    trasport(passenger: Passenger): void {
        console.log(`${passenger.name} transport successfuly with ${this.constructor.name}`)
    } 
}

class VehicleFactory{
    private static _vehicleFactory: VehicleFactory;
    private constructor() {}

    public static getInstance(){
        if(!VehicleFactory._vehicleFactory){
            VehicleFactory._vehicleFactory = new VehicleFactory()
        }
        return VehicleFactory._vehicleFactory
    }

    public createVehicle(vehicleType :VehicleType){
        const VehicleConstructors = {
            [VehicleType.Boat]: new Boat(),
            [VehicleType.Bus]: new Bus(),
            [VehicleType.Taxi]: new Taxi(),
        };
        return VehicleConstructors[vehicleType];
    }
}

class TravelAgency {
    private vehicles: Map<VehicleType, number>;
    private vehicleFactory: VehicleFactory;

    constructor() {
        this.vehicles = new Map<VehicleType, number>([
            [VehicleType.Bus, 4],
            [VehicleType.Taxi, 8],
            [VehicleType.Boat, 3]
        ]);
        this.vehicleFactory = VehicleFactory.getInstance();
    }

    public getVehicleToPassenger(passenger: Passenger): Vehicle | null {
        const favoriteVehicle = passenger.favoriteVehicle
        const numOfAvilibleFavoriteVehicle = this.vehicles.get(favoriteVehicle) || 0;
        if (numOfAvilibleFavoriteVehicle > 0) {
            this.vehicles.set(
                favoriteVehicle,
                numOfAvilibleFavoriteVehicle - 1
            );
            return this.vehicleFactory.createVehicle(favoriteVehicle);
        }
        
        for (const entry of Array.from(this.vehicles.entries())) {
            if (entry[1] > 0) {
                this.vehicles.set(entry[0], entry[1] - 1);
                return this.vehicleFactory.createVehicle(entry[0]);
            }
        }

        return null;
    }
}