export class Impot{
    ref_fiscal: string;
    ref_avis: string;
    revenu: number;
    annee: number;

    constructor(ref_fiscal = '', ref_avis = '', revenu = 0, annee = 0){

        this.ref_fiscal = ref_fiscal;
        this.ref_avis = ref_avis;
        this.revenu = revenu;
        this.annee = annee;
    }
}