import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { Observable, map } from 'rxjs';

@Injectable()
export class DBService {
  private baseUrl = 'https://adamantine-dnd.us-3.evennode.com';

  constructor(private http: HttpClient) {
    if (window.location.href.includes('localhost:4200')) {
      this.baseUrl = 'http://localhost:8080';
    }
  }

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
      .subscribe((response) => console.info(response));
  }
  public deleteCharacter(characterId: string): Observable<any> {
    return this.http.post(this.baseUrl + '/db/deleteCharacter', {
      characterId,
    });
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
