import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public url: string;
  constructor(public httpClient: HttpClient) { this.url = environment.apiUri }

  public searchAnswer(pregunta: string): Observable<any> {
    return this.httpClient.get(this.url + "pregunta", {
      params: {
        pregunta: pregunta,
      }
    });
  }

  public getEstadisticasIdioma(idioma: string): Observable<any>{
    return this.httpClient.get(this.url+"estadisticas/"+idioma); 
  }

  public getEstadisticas():Observable<any>{
    return this.httpClient.get(this.url+"estadisticas"); 
  }

}
