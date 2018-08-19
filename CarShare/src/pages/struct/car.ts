export class Car {

    public make : string
    public model : string
    public rego : string
    public uid : string
    public year : number
    public docID : string

    public constructor(
        docID: string,
        make : string,
        model : string,
        rego : string,
        uid : string,
        year : number,
    ) {
        this.docID = docID
        this.make = make
        this.model = model
        this.rego = rego
        this.uid = uid
        this.year = year
    }
}