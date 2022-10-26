import { Injectable } from '@nestjs/common';
import { Car } from './cars';

@Injectable()
export class CarsService {
    cars:Car[]=[
    {id:1, description:'Fusca'},
    {id:2, description:'Civic'},
    {id:3, description:'Uno'},
    ];

    getAll(){
        return this.cars;
    }

/*
    getByid(id: number){
        const car = this.cars.find((value) => value.id == id);
        return car;
    }

    create(car:Car){

    }

    update(car:Car){

    } 

    delete(id: number){

    }*/ 
}
