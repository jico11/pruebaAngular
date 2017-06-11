import { Component } from '@angular/core';
import { DataService} from './data.service';
import { trigger,state,style,transition,animate,keyframes} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
  	trigger('MyAwesomeAnimation',[
  		state('small',style({transform: 'scale(1)'
  		})),
  		state('large',style({transform: 'scale(1.2)'
  		})),

  		transition('small <=> large',animate('300ms ease-in'))
  	])
  ]
})
export class AppComponent {
  state: string  = 'small';

  animateMe(){
  	this.state = (this.state == 'small' ? 'large':'small');
  }

  title = 'app';
  myObject = {
  	gender: 'male',
  	age: 33,
  	location: 'CHILE'
  };
  myArr = true;
  angularLogo = 'https://www.google.cl/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';
  buttonStatus = 'enabled';

  myEvent(event){
  	console.log(event)
  };

  titleClass = false;
  titleClasses = {
  	'red-title': true,
  	'large-title': true
  };
  titleStyles = {
  	'color': 'red',
  	'font-size' : '4em'
  }


  constructor(private dataService:DataService){

  }

  someProperty:string = '';

  ngOnInit(){
  	console.log(this.dataService.cars);
  	this.someProperty = this.dataService.myData();
  }
}
