export class NailPolish {
    public id: number;
    public name: string;
    public brand: string;
    public series: string;
    public imagePath: string;

    constructor(id: number, name: string, brand: string, series: string, imagePath: string) {
        this.id = id;
        this.name = name;
        this.brand = brand;
        this.series = series;
        this.imagePath = imagePath;
    }
}
