export class Testeur{
    date_test: string;
    resultat: boolean;
    id_impot: number;
    id_logement: number;
    

    constructor(date_test = '', resultat = null, id_impot = 0, id_logement = 0){
        this.date_test = date_test; 
        this.resultat = resultat;
        this.id_impot = id_impot;
        this.id_logement = id_logement;
    }
}