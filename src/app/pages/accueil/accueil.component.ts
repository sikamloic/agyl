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
  constructor() { }

  ngOnInit(): void {
  }

}
