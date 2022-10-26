import { Controller,Get, Param, Post, Put } from "@nestjs/common";
import { Car } from "./cars";
import { CarsService } from "./cars.service";

@Controller()
export class CarsController{

    constructor(
        private readonly carsService: CarsService
    ){}
   
    @Get()
    async getAll() : Promise <Car[]> {
        return this.carsService.getAll();
    }

/* 
    @Get(':id')
    async getById(@Param('id') id: number) : Promise<Car> {
        return this.carsService.getByid(id);
    }
*/




/*
    @Post()
    create(@Body() createCarDto: CreateCarDto){
    return 'This action adds a new car';
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return 'This action returns a #${id} car';
    }
    
    @Put(':id')
    update(@Param('id')id: string, @Body() updateCarDto: UpdateCarDto) {
        return 'This action update a #${id} cat';
    }
    
    @Delete(':id')
    remove(@Param('id')id: string){
        return 'This action removes a #${id}';
    }*/
}
