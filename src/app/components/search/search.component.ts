import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

import { ActivatedRoute } from '@angular/router' ;
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  buscar:string = "";

  constructor(
    private _pelServ: PeliculasService,
    private actRoute: ActivatedRoute
  ) {
    this.actRoute.params.subscribe(
      params => {
        if(params.texto){
          this.buscar = params.texto;
          this.buscarPelicula();
        }
      }
    );
  }

  ngOnInit() {
  }

  buscarPelicula(){
    if(this.buscar.length == 0){
      return;
    }
    this._pelServ.buscarPelicula(this.buscar).subscribe(
      data => {

      },
      error => {
        console.error(error);
      }
    );
  }

}
