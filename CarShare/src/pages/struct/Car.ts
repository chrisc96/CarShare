export class Car {

    public make : string
    public model : string
    public rego : string
    public uid : string
    public year : number

    public constructor(
        make : string,
        model : string,
        rego : string,
        uid : string,
        year : number,
    ) {
        this.make = make
        this.model = model
        this.rego = rego
        this.uid = uid
        this.year = year
    }
}