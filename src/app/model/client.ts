export class Client{
    id: number;
    civilite:string;
    nom: string;
    prenom: string;
    tel: number;
    mail: string;
    code_client: string;


    constructor(id= 0, civilite='', nom='', prenom='', tel=0, mail='', code_client){
        this.id = id;
        this.civilite = civilite;
        this.nom = nom;
        this.prenom = prenom;
        this.tel = tel;
        this.mail = mail;
        this.code_client = code_client;
    }
}
