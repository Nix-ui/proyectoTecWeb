import { Component, OnInit } from '@angular/core';
import { RecursosService } from '../../servicios/recursos.service';
import { Router } from '@angular/router';
import { Recurso } from '../../interfaces/recurso';
import { ResourceCardComponent } from '../../elementos/resource-card/resource-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recursos',
  standalone: true,
  imports: [ResourceCardComponent,CommonModule],
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.scss']
})
export class RecursosComponent implements OnInit {
  listaRecursos: Recurso[] = [];
  page: number;

  constructor(
    private router: Router,
    private recursosService: RecursosService
  ) {
    this.page = 1;
  }

  ngOnInit(): void {
    this.getRecursos();
  }

  getRecursos(page?: number): void {
    if (page) {
      this.page = page;
    }
    this.recursosService.getRecursos(this.page).subscribe({
      next: (data) => {
        this.listaRecursos = data;
        console.log('Recursos recibidos:', data);
      },
      error: (error) => {
        console.error('Error al obtener recursos:', error);
      }
    });
  }
}
