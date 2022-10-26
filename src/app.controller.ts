import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { async } from 'rxjs';
import { App } from './app';
import { AppService } from './app.service';
import { CreateAppDto } from './create-app.dto';

@Controller('cars')
export class AppController {
  constructor(private readonly appService: AppService) {}
/*
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
*/
  @Get()
  async getAll():Promise <App[]>{
    return this.appService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<App>{
    return this.appService.getById(id);
  }

  @Post()
 async create(@Body() app: App): Promise<App> {
  return this.appService.create(app);
 }
  
 @Put(':id')
async update(@Param('id') id: number, @Body() app: App): Promise<App> {
  app.id = id;
  return this.appService.update(app);
  
}

@Delete(':id')
async delete(@Param('id') id: number){
  this.appService.delete(id);

}
}
