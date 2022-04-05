export class Adresse{
    id: number;
    rue: string;
    cp: number;
    ville: string;
    pays: string;

    constructor(id= 0,rue='', cp= 0, ville='', pays=''){
        this.id = id; 
        this.rue = rue;
        this.cp = cp;
        this.ville = ville;
        this.pays = pays;
    }
}