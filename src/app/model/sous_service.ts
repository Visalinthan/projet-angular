
export class Sous_Service{
    id: number;
    titre: string;
    sous_titre: string;
    sous_titre_2: string;
    sous_titre_3: string;
    description: string;
    description_2: string;
    description_3: string;
    img: string;
    id_service: number;


    constructor(id= 0, titre = '', sous_titre= '', sous_titre_2= '', sous_titre_3= '', description= '', description_2= '', description_3= '', img= '',id_service= 0 ){
        this.id = id;
        this.titre = titre;
        this.sous_titre = sous_titre;
        this.sous_titre_2 = sous_titre_2;
        this.sous_titre_3 = sous_titre_3;
        this.description = description;
        this.description_2 = description_2;
        this.description_3 = description_3;
        this.img = img;
        this.id_service = id_service;
    }
}
