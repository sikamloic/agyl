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
        {
          name:'Sites internet',
          to:'/créer-site-internet'
        },
        {
          name:'Applications',
          to:'/application'
        },
        {
          name:'Renfort Tech',
          to:'/renfort'
        },
        {
          name:'UI/UX design',
          to:'/design'
        },
        {
          name:'Boutique E-com...',
          to:'/e-commerce'
        },
      ]
    },
    {
      name:'Rejoindre Agyl',
      submenu:[{name:'', to: ''}]
    },
    {
      name:'Faire appel à nous',
      submenu:[{name:'', to: ''}]
    }
  ]


  dropdown = [
    {
      name:'Sites internet',
      to:'/créer-site-internet'
    },
    {
      name:'Applications',
      to:'/application'
    },
    {
      name:'Renfort Tech',
      to:'/renfort'
    },
    {
      name:'UI/UX design',
      to:'/design'
    },
    {
      name:'Boutique E-com...',
      to:'/e-commerce'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
