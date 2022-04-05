export class Filleul{
    id: number;
    mail_filleul: string;
    statut: string;
    date_ajout: string;
    id_parrain: number;
    

    constructor(id= 0, mail_filleul='', statut='', date_ajout= '', id_parrain=0 ){
        this.id = id; 
        this.mail_filleul = mail_filleul;
        this.statut = statut;
        this.date_ajout = date_ajout;
        this.id_parrain = id_parrain;
        
    }
}