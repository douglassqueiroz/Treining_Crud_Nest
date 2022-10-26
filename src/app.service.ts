import { Injectable } from '@nestjs/common';
import { last } from 'rxjs';
import { App } from './app';

@Injectable()
export class AppService {
  apps:App[]=[
    {id:1, description: 'Celta'},
    {id:2, description: 'Corsa'},
    {id:3, description: 'Saveiro'},
  ];
  getAll(){
    return this.apps;
  }
  getById(id: number){
      const app = this.apps.find((value) => value.id == id);
      return app;
  }
  create(app:App) {
    let LastId=0;
    if(this.apps.length > 0){
      LastId = this.apps[this.apps.length - 1].id;
    }
    app.id = LastId + 1;
    this.apps.push(app);

    return app;
  }

  update(app: App) {
    const appsArray = this.getById(app.id);
    if(appsArray){
        appsArray.description = appsArray.description;
    }
    return appsArray;
  }
  delete(id:number){
    const index = this.apps.findIndex((value) => value.id ==id);
    this.apps.splice(index, 1);
  }

  /*
  getHello(): string {
    return 'Hello World!';
  }
  */
}
