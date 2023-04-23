import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  sidebarVisible!: boolean;
  transitionDelay!: number;
  visible!: boolean
  position!: string;
  router!: Router;
  items: MenuItem[] = [];

  showDialog() {
    this.visible = true;
  }

  ngOnInit(): void {

    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-chart-bar',
        items: [
          {
            label: 'Dashboard',
            icon: 'pi pi-chart-line',
            routerLink: "/navigation",
          },
          {
            label: 'Usuarios',
            icon: 'pi pi-user-edit',
            routerLink: "/navigation/users"
          },

        ]
      },
      {
        label: 'Incidentes',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Incidentes',
            icon: 'pi pi-flag',
            routerLink: "/incidents"
          },
        ]
      }
    ]

  }
}

