import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  data: any;

  options: any;
  products: Product[] = []
  constructor() { }

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      datasets: [
        {
          data: [11, 16, 7, 3, 14],
          backgroundColor: [
            documentStyle.getPropertyValue('--red-500'),
            documentStyle.getPropertyValue('--green-500'),
            documentStyle.getPropertyValue('--yellow-500'),
            documentStyle.getPropertyValue('--bluegray-500'),
            documentStyle.getPropertyValue('--blue-500')
          ],
          label: 'My dataset'
        }
      ],
      labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue']
    };

    this.options = {
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        r: {
          grid: {
            color: surfaceBorder
          }
        }
      }
    };

    this.products = [
      {
        code: "01",
        name: "Nome",
        category: "Categoria",
        quantity: 48
      },
      {
        code: "02",
        name: "Nome2",
        category: "Categoria2",
        quantity: 4
      },
      {
        code: "02",
        name: "Nome2",
        category: "Categoria2",
        quantity: 4
      },
      {
        code: "02",
        name: "Nome2",
        category: "Categoria2",
        quantity: 4
      },  {
        code: "02",
        name: "Nome2",
        category: "Categoria2",
        quantity: 4
      },  {
        code: "02",
        name: "Nome2",
        category: "Categoria2",
        quantity: 4
      },  {
        code: "02",
        name: "Nome2",
        category: "Categoria2",
        quantity: 4
      },  {
        code: "02",
        name: "Nome2",
        category: "Categoria2",
        quantity: 4
      }
    ]
  }


}

export interface Product {

  code: any
  name: any
  category: any
  quantity: any

}
