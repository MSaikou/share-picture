import { Component, input, signal } from '@angular/core';
import { FaceSnapModel } from '../models/face-snap';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  standalone:true,
  imports: [NgStyle, NgClass],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss',
})
export class FaceSnap {

  faceSnap = input<FaceSnapModel>();
  
  snappButton = signal<string>('Oh snap');
  userSnapped = signal<boolean>(false);

  onSnap(): void {
    if(this.userSnapped()){
      this.unSnap();
    }else{
      this.snap();
    }
  }
  
  unSnap() {
    this.faceSnap()?.addSnap();
    this.snappButton.update(titre => titre='Oh snap');
    this.userSnapped.update(etat => etat=false);
  }

  snap(): void {
    this.faceSnap()?.removeSnaps();
    this.snappButton.update(titre => titre='Oooh unSnap');
    this.userSnapped.update(etat => etat=true);
  }

}
