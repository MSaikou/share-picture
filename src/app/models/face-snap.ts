export class FaceSnapModel{
    constructor(
        public title: string,
        public description: string,
        public createdAt: Date,
        public snaps: number,
        public imageSrc: string
    ) {}

    addSnap(): void {
        this.snaps++;
    }

    removeSnaps():void {
        this.snaps--;
    } 
}