import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  cars = ['Ford', 'Chevrolet','Mazda'];

  myData(){
  	return 'This is my data, man!';
  }

}
