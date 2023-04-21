import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [MessageService]
})
export class FooterComponent implements OnInit {

  year!: any

  constructor() { }

  ngOnInit(): void {
    this.year = new Date().getFullYear();
  }


}
