import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ItemsMenu } from './shared/interface/itemsMenu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  opened=false
  items : ItemsMenu[] = [
    {
      name:"Dashboard"
    }
  ]
  mostrar_menu=false
}
