export class Listing {
    public constructor(public id: string,
                       public UserIDPoster: string,
                       public carID: string,
                       public dateCreated: Date,
                       public moreInfo: string,
                       public postedOnFacebok: boolean,
                       public when: Date,
                       public whoWantsToCome: string[],
                       public whosComing: string[]) {
    }
}