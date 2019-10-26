import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private httpOptionsGeneral = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  constructor(private http: HttpClient) { }

  getAlbums() {
    return this.http.get('http://jsonplaceholder.typicode.com/users')
      .pipe(map(this.extractData));
  }

  getPosts() {
    return this.http.get('http://jsonplaceholder.typicode.com/posts')
      .pipe(map(this.extractData));
  }

}
