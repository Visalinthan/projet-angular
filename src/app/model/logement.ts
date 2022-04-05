export class Logement{
    statut_logement: string;
    type_logement: string;
    age_logement: string;
    nb_pers: number;
    id_chauffe: number;

    constructor(id = 0, statut_logement = '', type_logement = '', age_logement = '', nb_pers = 0, id_chauffe = 0){
        this.statut_logement = statut_logement;
        this.type_logement = type_logement;
        this.age_logement = age_logement;
        this.nb_pers = nb_pers;
        this.id_chauffe = id_chauffe;
    }
}