export class Message {
    constructor(
       public destinataire: string,
       public objet: string,
       public message: string,
       public Multipart: true,
       public Html: true
    ){}
}