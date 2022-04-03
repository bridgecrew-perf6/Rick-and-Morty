import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Character} from '../../models/character.interface'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Api } from 'src/app/models/api.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private Url!: string
 
  constructor(private http: HttpClient) { }

  // getCharacter(id?:number): Observable<Character>{
  //   this.Url=`${environment.urlBaseApi}/${id}`;
  //   const character = this.http.get<Character>(this.Url);
  //   return character
  // }
  getApi(){
    return this.http.get<Character>(`${environment.urlBaseApi}`)
  }

  getCharacter(){
    return this.http.get<Character>(`${environment.urlBaseApi+"/character"}`)
  }

  // getDetails(id:number){
  //   return this.http.get<Character>(`${environment.urlBaseApi}/${id}`)
  // }

  getLocation(){
    return this.http.get<Character>(`${environment.urlBaseApi+"/location"}`)
  }

  getEpisode(){
    return this.http.get<Character>(`${environment.urlBaseApi+"/episode"}`)
  }

  
}
