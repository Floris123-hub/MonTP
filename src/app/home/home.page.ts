import { Component} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  username : string;
  password : string;

  constructor() {}

  login(){
    console.log("Username : "+ this.username);
    console.log("Password : "+ this.password);
  }
}
