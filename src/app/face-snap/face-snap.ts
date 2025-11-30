import { Component, inject, input, signal } from '@angular/core';
import { FaceSnapModel } from '../models/face-snap';
import { NgClass, NgStyle } from '@angular/common';
import { FaceSnapeService } from '../services/face-snap.service';

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

  private readonly facesnapService = inject(FaceSnapeService);

  onSnap(): void {
    if(this.userSnapped()){
      this.unSnap();
    }else{
      this.snap();
    }
  }
  
  unSnap() {
    this.facesnapService.snapFaceById(this.faceSnap()!!.id, 'unsnap');
    this.snappButton.update(titre => titre='Oh snap');
    this.userSnapped.update(etat => etat=false);
  }

  snap(): void {
    this.facesnapService.snapFaceById(this.faceSnap()!!.id, 'snap');
    this.snappButton.update(titre => titre='Oooh unSnap');
    this.userSnapped.update(etat => etat=true);
  }

}
