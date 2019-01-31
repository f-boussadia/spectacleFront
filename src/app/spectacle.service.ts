import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './category';
@Injectable({
  providedIn: 'root'
})
export class SpectacleService {
  private _headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }
  // public postCategoriesViaWsRest(categorie: Categorie): Observable<Categorie> {
  //   // appel web service Rest
  //   let urlWs = "./rest/categorie";
  //   //NB:URL ici relative qui commence par "./rest ou "rest"
  //   // et qui sera préfixé par 
  //   //http://localhost:8080/appliSpectacle selon le 
  //   //fichier proxi.conf.json (ng serve --proxy conf)
  //   return this.http.post<Categorie>(urlWs, categorie, { headers: this._headers });
  //   //depuis la version 4.3 de angular, http.post<T>
  //   //ou bien http.get<T> renvoie un resultat de type Observable<T>
  // }

  public getCategoriessViaWsRest(): Observable<Category[]> {
    // appel web service Rest
    let urlWs = "./rest/spectacle/categories";
    //NB:URL ici relative qui commence par "./rest ou "rest"
    // et qui sera préfixé par 
    //http://localhost:8080/appliSpringBoot selon le 
    //fichier proxi.conf.json (ng serve --proxy conf)
    return this.http.get<Category[]>(urlWs);
    //depuis la version 4.3 de angular, http.post<T>
    //ou bien http.get<T> renvoie un resultat de type Observable<T>

  }
}
