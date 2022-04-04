import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICharacter, ICharacters} from '../../models/character.interface'
import { ILocation, ILocations } from 'src/app/models/location';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Api } from 'src/app/models/api.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private Url!: string
 
  constructor(private http: HttpClient) { }

  getCharacters(): Observable<ICharacters>{
    this.Url=`${environment.urlBaseApi+"/character"}`
    const character = this.http.get<ICharacters>(this.Url);
    return character
  }

 
  getCharacter(characterId: number): Observable<ICharacter> {
    const url = environment.urlBaseApi + `/character/${characterId}`;
    return this.http.get<ICharacter>(url);
  }

getLocations(): Observable<ILocations>{
  this.Url=`${environment.urlBaseApi+"/location"}`
  const location = this.http.get<ILocations>(this.Url)
  return location
}

  getLocation(locationId: number): Observable<ILocation>{
    const url = environment.urlBaseApi + `/character/${locationId}`;
    return this.http.get<ILocation>(url);
  } 



  
}
