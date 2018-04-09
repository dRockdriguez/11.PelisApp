import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Pelicula } from '../../interfaces/pelicula.interface';
import { PeliculaImagenPipe } from '../../pipes/pelicula-imagen.pipe';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  private cartelera:any;
  private populares:any;
  private popularesNinos:any;

  constructor(
    private _pSer: PeliculasService
  ) {
    this._pSer.getPopulares().subscribe(
      data => {
        this.populares = data;
      },
      error => {
        console.error(error);
      }
    );
    this._pSer.getCartelera().subscribe(
      data => {
        this.cartelera = data;
      },
      error => {
        console.error(error);
      }
    );
    this._pSer.getPopularesNinos().subscribe(
      data => {
        this.popularesNinos = data;
      },
      error => {
        console.error(error);
      }
    );
  }

  ngOnInit() {}
}
