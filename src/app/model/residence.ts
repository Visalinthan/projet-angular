export class Residence{
    id_personne: number;
    id_adresse: number;
    type_residence: string;

    constructor(id_personne = 0, id_adresse = 0, type_residence = ''){
        this.id_personne = id_personne;
        this.id_adresse = id_adresse; 
        this.type_residence = type_residence;

    }
}