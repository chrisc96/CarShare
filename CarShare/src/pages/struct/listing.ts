export class Listing {
    public constructor(public id: string,
                       public carDocumentID: string,
                       public departureDate: string,
                       public departureTime: string,
                       public destination: string,
                       public meetingPoint: string,
                       public seatsAvailable: string,
                       public storageSpace: boolean,
                       public timeCreated: Date,
                       public userDocumentID: string,
                       public whoWantsToCome: string[],
                       public whosComing: string[]) {
    }
}