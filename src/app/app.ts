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
  faceSnaps!: FaceSnapModel[];
  
  ngOnInit(): void {
    this.faceSnaps = [
      new FaceSnapModel(
        'Archibald',
        'Mon meilleur ami depuis toujours !',
        new Date(),
        10,
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
      ),
      new FaceSnapModel(
        'Three Rock Mountain',
        'Un endroit magnifique pour les randonnées.',
        new Date(),
        6,
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg'
      ),
      new FaceSnapModel(
        'Un bon repas',
        'Mmmh que c\'est bon !',
        new Date(),
        156,
        'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg'
      )
    ];
    this.faceSnaps[1].setLocation('à la montagne');
  }



}
