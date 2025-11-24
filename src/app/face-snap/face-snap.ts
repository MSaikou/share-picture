import { Component, Input, OnInit, input } from '@angular/core';
import { FaceSnapModel } from '../models/face-snap';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  standalone:true,
  imports: [NgStyle],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss',
})
export class FaceSnap implements OnInit {

  faceSnap = input<FaceSnapModel>();

  snappButton = 'Oh snap'
  userSnapped = true;
  
  ngOnInit(): void {
  }

  onSnap(): void {
    if(this.userSnapped){
      this.unSnap();
    }else{
      this.snap();
    }
  }
  
  unSnap() {
    this.faceSnap()?.addSnap();
    this.snappButton = "Oh snap";
    this.userSnapped = false;
  }

  snap(): void {
    this.faceSnap()?.removeSnaps();
    this.snappButton = "Oooh unSnap";
    this.userSnapped = true;
  }

}
