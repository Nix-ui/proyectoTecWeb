import { Component , Input, OnInit} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-cards',
  imports: [],
  templateUrl: './user-cards.component.html',
  styleUrl: './user-cards.component.scss'
})
export class UserCardsComponent {
  @Input() user: any;
  constructor() { }

}
