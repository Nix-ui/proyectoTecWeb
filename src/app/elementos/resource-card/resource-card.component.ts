import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Recurso } from '../../interfaces/recurso'
import { ApiClientService } from '../../servicios/api-client.service';
@Component({
  selector: 'app-resource-card',
  imports: [],
  templateUrl: './resource-card.component.html',
  styleUrl: './resource-card.component.scss'
})
export class ResourceCardComponent {
  @Input() recurso!: Recurso;
  constructor( private router: Router, private api: ApiClientService) { }
}
