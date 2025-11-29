import { Component, OnInit, inject } from '@angular/core';
import { FaceSnapModel } from '../models/face-snap';
import { FaceSnap } from '../face-snap/face-snap';
import { FaceSnapeService } from '../services/face-snap.service';

@Component({
  selector: 'app-face-snap-list',
  imports: [FaceSnap],
  templateUrl: './face-snap-list.html',
  styleUrl: './face-snap-list.scss',
})
export class FaceSnapList implements OnInit {
  
  faceSnaps!: FaceSnapModel[];

  private readonly faceSnapService = inject(FaceSnapeService);
  
  ngOnInit(): void {
    this.faceSnaps = this.faceSnapService.getFaceSnaps();
  }


}
