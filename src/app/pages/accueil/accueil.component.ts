import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  options = [
    'Ingenieur back-end',
    'Ingenieur full-stark',
    'Développeur Android',
    'Développeur React Native',
    'Développeur node.JS',
    'Développeur Java',
    'Développeur Ops',
    'Ingenieur front-End',
    'Ingenieur mobile',
    'Développeur iOS',
    'Développeur React',
    'Développeur Python',
    'Développeur Javascript',
    'Développeur Angular',
  ]
  titles = [
    "refaire votre site internet",
    "développer votre application mobile ou web",
    "créé votre MVP engageant pour vos premiers utilisateurs",
    "créer vos boutiques e-commerce",
    "créer vos visuels ou interfaces design d'App ou de site"
  ]
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "autoplay": true,
    "speed": 5000,
    "infinite": true,
  };
  constructor() { }

  ngOnInit(): void {
  }

}
