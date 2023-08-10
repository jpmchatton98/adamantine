import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class DBService {
  constructor(private http: HttpClient) {}

  public setCharacter(
    username: string,
    characterId: string,
    characterData: any
  ): Observable<any> {
    return this.http.post('http://localhost:8080/db/setCharacter', {
      username,
      characterId,
      characterData,
    });
  }
  public setCharacterNoUser(
    characterId: string,
    characterData: any
  ): Observable<any> {
    return this.http.post('http://localhost:8080/db/setCharacter', {
      characterId,
      characterData,
    });
  }

  public getCharacter(characterId: string): Observable<any> {
    return this.http.post('http://localhost:8080/db/getCharacter', {
      characterId,
    });
  }

  public getCharacters(): Observable<any> {
    return this.http.post('http://localhost:8080/db/getCharacters', {});
  }
  public getUserCharacters(username: string): Observable<any> {
    return this.http.post('http://localhost:8080/db/getUserCharacters', {
      username,
    });
  }
}
