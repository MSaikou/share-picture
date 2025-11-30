import { SnapType } from "./snap-type.type";

export class FaceSnapModel{

    location?: string;
    id:string;

    constructor(
        public title: string,
        public description: string,
        public createdAt: Date,
        public snaps: number,
        public imageSrc: string
    ) {
        this.id = crypto.randomUUID().substring(0,8);
    }

    snap(snapType: SnapType){
        if(snapType==='snap'){
            this.addSnap();
        } else if (snapType === 'unsnap'){
            this.removeSnaps();
        }
    }

    addSnap(): void {
        this.snaps++;
    }

    removeSnaps():void {
        this.snaps--;
    } 

    setLocation(location: string): void {
        this.location = location;
    }

    withLocation(location: string): FaceSnapModel{
        this.setLocation(location);
        return this;
    }
}