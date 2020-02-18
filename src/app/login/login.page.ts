import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: any;
  username: string;
  error: string;
  password: string;
  find;
  constructor(private apiService: ApiService, private nvc: NavController) {
    this.user = [];
  }

  ngOnInit() {
    this.nvc.navigateRoot('login');
  }
  getUsers() {
    this.apiService.getUser().subscribe(response => {
      this.user = response;
      for (const studentsDataKey in this.user) {
        if (this.user[studentsDataKey].login.username === this.username && this.user[studentsDataKey].login.password === this.password) {
          this.find = true;
          break;
        } else {
          this.find = false;
        }
      }
      if (!this.find) {
        this.error = 'Données incorrect';
      } else {
        this.nvc.navigateRoot('user-list');
      }
    });
  }
}
