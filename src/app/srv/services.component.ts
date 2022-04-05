import { Component, OnInit } from '@angular/core';
import { Sous_Service } from '../model/sous_service';
import { SrvService } from '../services/srv.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  title= "Services";

  sous_services: Sous_Service[];
  selectedIso: Sous_Service ={ 
  "titre": "Isolation",
  "sous_titre": "L'isolation de votre maison",
  "sous_titre_2": null,
  "sous_titre_3": null,
  "description": "A température égale, une maison bien isolée vous offre un plus grand confort, vieillit mieux et nécessite moins de travaux d’entretien sur les supports attenant aux isolations de l’habitation.\r\n\r\nUne maison mal isolée laisse échapper la chaleur en hiver et perd rapidement sa fraîcheur en été. Une mauvaise isolation thermique des murs peut faire perdre jusqu’à 25% de la chaleur du logement, ce chiffre atteignant 30% et plus pour une isolation des combles ou de la toiture, faible ou inexistante ! Les menuiseries ne sont pas en générale une grande source de déperditions contrairement aux idées reçues.\r\n\r\nGrâce à une isolation performante, vous pouvez réduire vos factures de chauffage ou d’énergie liées à ces déperditions thermiques. Ainsi, effectuer des travaux d’isolation thermique permet de réduire jusqu’à 80% les consommations d’énergie liées au chauffage.\r\n\r\nEn limitant les besoins en énergie du logement, l’isolation thermique est l’accès principal aux économies d’énergie, bien avant le renouvellement des équipements de chauffage et de refroidissement du logement.",
  "description_2": null,
  "description_3": null,
  "img": "../../assets/img/services/isolation/home-isolationdroit1.jpg",
  "id_service": 1,
  "id": 1};

  selectedPompe: Sous_Service ={ 
    "titre": "Pompe à Chaleur",
    "sous_titre": "Estimer vos économies de chauffage",
    "sous_titre_2": null,
    "sous_titre_3": null,
    "description": "Alors que le prix de l’énergie ne cesse d’augmenter et que cette tendance va se poursuivre, les solutions de chauffage à la fois économiques et écologiques sont de plus en plus prisées. Les énergie renouvelables font partie de ces solutions qui permettent de réduire sa consommation énergétique. \r\n\r\nCette démarche est soutenue par les pouvoirs publics, qui peuvent vous octroyer plusieurs aides financières, mais aussi avec la prime énergie.",
    "description_2": null,
    "description_3": null,
    "img": "../../assets/img/services/pompe/pompe_a_chaleur.jpg",
    "id_service": 2,
    "id": 8};

    selectedVmc: Sous_Service ={ 
      "titre": "Service VMC",
        "sous_titre": "Estimer vos économie",
        "sous_titre_2": null,
        "sous_titre_3": null,
        "description": "La ventilation, plus qu’un confort, est une nécessité dans nos logements de mieux en mieux isolés et bien chauffés. Elle va permettre d’évacuer l’air vicié de l’intérieur de l’habitat, contrôler l’humidité et éviter environ 20 % de déperditions énergétiques par renouvellement d’air. Moyen astucieux pour ventiler et chauffer efficacement la maison, la ventilation mécanique contrôlée double flux s’avère une solution extrêmement performante.",
        "description_2": null,
        "description_3": null,
        "img": "../../assets/img/services/vmc/vmc.jpg",
        "id_service": 4,
        "id": 13};
    
  
  constructor(private iso_service: SrvService) {

   }

  ngOnInit(): void {
    this.iso_service.get_Sous_Serv().subscribe(
      (sous_services)=>{ 
        this.sous_services = sous_services
        
      });

      this.iso_service.getId_Sous_Serv(2).subscribe(
        (sous_services)=>{ 
          this.selectedIso = sous_services
          console.log(sous_services)
        });
  }

  selectIso(sous_service : Sous_Service){
    this.selectedIso = sous_service;
  }

  selectPompe(sous_service : Sous_Service){
    this.selectedPompe = sous_service;
  }

  selectVmc(sous_service : Sous_Service){
    this.selectedVmc = sous_service;
  }

}
