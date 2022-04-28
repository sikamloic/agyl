import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showMenu = false;
  showSubmenu = false;
  menu = [
    {
      name:'Notre offre',
      submenu:[
        {'name':'Sites internet'},
        {'name':'Applications'},
        {'name':'Renfort Tech'},
        {'name':'UI/UX design'},
        {'name':'Boutique E-com...'},
      ]
    },
    {
      name:'Rejoindre Agyl',
      submenu:[{'name':''}]
    },
    {
      name:'Faire appel à nous',
      submenu:[{'name':''}]
    }
  ]
  dropdown = ['Sites internet','Applications','Renfort Tech','UI/UX design','Boutique E-com...']
  constructor() { }

  ngOnInit(): void {
  }

}
