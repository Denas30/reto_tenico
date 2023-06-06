import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IArticles, INewApi } from '../interfaces/interface-newApi';

@Injectable({
  providedIn: 'root'
})
export class NewApiService {

  private urlApi = 'https://newsapi.org/v2/everything?q=apple&from=2023-05-31&to=2023-05-31&sortBy=popularity&apiKey=dc1bf9142df74ca2bbd8ecaffb7e3ccb';


  constructor(private http: HttpClient) { }

  getData(): Observable<INewApi[]>{
    const api = this.http.get<IArticles>(`${this.urlApi}`)
    .pipe(
      map( x => x.articles)
    )
    return api;
  }





  getPost(date: any): Observable<any>{
    const apiPost = this.http.post(this.urlApi, date);
    console.log(apiPost);
    
    return apiPost
  }
}

