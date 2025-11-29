export class FaceSnapModel{

    location?: string;

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

    setLocation(location: string): void {
        this.location = location;
    }

    withLocation(location: string): FaceSnapModel{
        this.setLocation(location);
        return this;
    }
}