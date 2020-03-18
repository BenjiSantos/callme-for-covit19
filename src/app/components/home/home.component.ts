import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {AngularFireStorage} from '@angular/fire/storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService, private storage: AngularFireStorage) { }
  public users = [];

  ngOnInit() {
    this.authService.getUsers().subscribe((catsSnapshot) => {
      this.users = [];
      catsSnapshot.forEach((catData: any) => {
        this.users.push({
          id: catData.payload.doc.id,
          data: catData.payload.doc.data()
        });
      });
    });
  }
}
