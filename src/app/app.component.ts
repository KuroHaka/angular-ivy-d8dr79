import { Component } from '@angular/core';
import { ALL_FOODS } from './constants/food';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  readonly SHOPPING_LIST = ALL_FOODS;
}
