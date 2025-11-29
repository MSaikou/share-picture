import {  Injectable } from "@angular/core";
import { FaceSnapModel } from "../models/face-snap";

@Injectable({
    providedIn:'root'
})
export class FaceSnapeService {

    faceSnaps: FaceSnapModel[] = [
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
            ).withLocation('à la montagne'),
            new FaceSnapModel(
              'Un bon repas',
              'Mmmh que c\'est bon !',
              new Date(),
              156,
              'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg'
            )
          ];
    
    getFaceSnaps(): FaceSnapModel[]{
        return [... this.faceSnaps ];
    }
    
    
}