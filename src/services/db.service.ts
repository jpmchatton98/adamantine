import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { Observable, map } from 'rxjs';

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
  public setCharacterNoUser(characterId: string, characterData: any) {
    this.http
      .post('http://localhost:8080/db/setCharacter', {
        characterId,
        characterData,
      })
      .subscribe((response) => console.log(response));
  }

  public async getCharacter(characterId: string): Promise<any> {
    return this.http
      .post('http://localhost:8080/db/getCharacter', {
        characterId,
      })
      .toPromise();
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
