import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { Observable, map } from 'rxjs';

@Injectable()
export class DBService {
  private baseUrl = 'https://adamantine-dnd.us-3.evennode.com';

  constructor(private http: HttpClient) {}

  public setCharacter(
    username: string,
    characterId: string,
    characterData: any
  ): Observable<any> {
    return this.http.post(this.baseUrl + '/db/setCharacter', {
      username,
      characterId,
      characterData,
    });
  }
  public setCharacterNoUser(characterId: string, characterData: any) {
    this.http
      .post(this.baseUrl + '/db/setCharacter', {
        characterId,
        characterData,
      })
      .subscribe((response) => console.log(response));
  }

  public async getCharacter(characterId: string): Promise<any> {
    return this.http
      .post(this.baseUrl + '/db/getCharacter', {
        characterId,
      })
      .toPromise();
  }

  public getCharacters(): Observable<any> {
    return this.http.post(this.baseUrl + '/db/getCharacters', {});
  }
  public getUserCharacters(username: string): Observable<any> {
    return this.http.post(this.baseUrl + '/db/getUserCharacters', {
      username,
    });
  }
}
