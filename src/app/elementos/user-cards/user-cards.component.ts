import { Component , Input, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ApiClientService } from '../../servicios/api-client.service';

@Component({
  selector: 'app-user-cards',
  imports: [],
  templateUrl: './user-cards.component.html',
  styleUrl: './user-cards.component.scss'
})
export class UserCardsComponent {
  @Input() user: any;
  constructor( private router: Router, private api: ApiClientService) { }
}
