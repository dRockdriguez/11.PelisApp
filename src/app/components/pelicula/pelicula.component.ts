import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router' ;
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html'
})
export class PeliculaComponent implements OnInit {

  pelicula:any;
  regresar:string;
  busqueda:string ="";

  constructor(
    private _pelServ: PeliculasService,
    private actRoute: ActivatedRoute
  ) {
    this.actRoute.params.subscribe(
      params => {
        console.log(params);
        this.regresar = params['pagina'];
        
        if(params['peli']){
          this.busqueda = params['peli'];
        }
        this._pelServ.getPelicula(params['id']).subscribe(
          res => {
            this.pelicula = res;
            console.log(this.pelicula);
          },
          error => {
            console.error(error);
          }
        );
      }
    );
  }

  ngOnInit() {
  }

}
