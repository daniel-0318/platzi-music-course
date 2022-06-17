import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlatziMusicService {

  private urlapi = 'https://platzi-music-api.herokuapp.com/browse/new-releases';

  constructor(private http: HttpClient) { }


  getNewReleases(): any{
    console.log("=======================");
    console.log(this.http.get(this.urlapi));
    console.log("=======================");
    return this.http.get(this.urlapi);
  }

}
