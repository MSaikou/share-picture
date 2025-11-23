import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './face-snap/face-snap';
import { FaceSnapModel } from './models/face-snap';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [FaceSnap],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{
  mySnap!: FaceSnapModel;
  
  ngOnInit(): void {
    this.mySnap = new FaceSnapModel(
      'Archibald',
      'Mon meilleur ami depuis tout petit !',
      new Date(),
      0,
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
    );
  }



}
