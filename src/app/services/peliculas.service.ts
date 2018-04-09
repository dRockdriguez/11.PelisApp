import { Injectable } from '@angular/core';
import { Jsonp, Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PeliculasService {
  private apikey:string = "7f47deaaf530fcf820538f8436d429d7";
  private url:string = "https://api.themoviedb.org/3";

  peliculas:any[] = [];

  constructor(
    private jsonp: Jsonp,
    private http: Http
  ) { }

  getPopulares(){
    let url = `${this.url}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).map(
      res => {
        return res.json().results
      }
    );
  }

  buscarPelicula(texto:string){
    let url = `${this.url}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).map(
      res => {
        this.peliculas = res.json().results;
        console.log(this.peliculas)
        return res.json().results
      }
    );
  }

  getPopularesNinos(){
    let url = `${this.url}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es&certification.lte=G&certification_country=US&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url).map(
      res => {
        return res.json().results
      }
    );
  }

  getCartelera(){
    let desde = new Date();
    let hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);
    let desdeStr = `${desde.getFullYear()}-${desde.getMonth()+1}-${desde.getDay()}`
    let hastaStr = `${hasta.getFullYear()}-${hasta.getMonth()+1}-${hasta.getDay()}`

    let url = `${this.url}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).map(
      res => {
        return res.json().results
      }
    );
  }

  getPelicula(id:string){
    let url = `${this.url}/movie/${id}?api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).map(
      res => {
        return res.json()
      }
    );
  }

}
