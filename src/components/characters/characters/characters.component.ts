import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { DBService } from 'src/services/db.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  public users = {
    adamantine: ['Brad', 'Joey', 'Jon', 'Maddie', 'Spencer'],
  };
  public userCharacters = { adamantine: [], mithral: [] };

  constructor(private dbService: DBService, private router: Router) {}

  public ngOnInit(): void {
    localStorage.clear();

    for (let i = 0; i < this.users.adamantine.length; i++) {
      this.dbService
        .getUserCharacters(this.users.adamantine[i])
        .subscribe((c) => {
          this.userCharacters.adamantine[i] = c;
        });
    }
    // for (let i = 0; i < this.users.mithral.length; i++) {
    //   this.dbService.getUserCharacters(this.users.mithral[i]).subscribe((c) => {
    //     this.userCharacters.mithral[i] = c;
    //   });
    // }
  }

  public create(username): void {
    localStorage.clear();
    let uuid = this.generateUUID();
    this.dbService
      .setCharacter(username, uuid, {
        background: {
          choices: [],
        },
        equipment: {},
      })
      .subscribe((response) => {
        console.info(response);
        this.router.navigateByUrl(`/characters/${uuid}/builder`);
      });
  }

  public generateUUID() {
    var d = new Date().getTime();
    var d2 =
      (typeof performance !== 'undefined' &&
        performance.now &&
        performance.now() * 1000) ||
      0;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = Math.random() * 16;
        if (d > 0) {
          r = (d + r) % 16 | 0;
          d = Math.floor(d / 16);
        } else {
          r = (d2 + r) % 16 | 0;
          d2 = Math.floor(d2 / 16);
        }
        return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
      }
    );
  }

  public getCharName(character: any) {
    const data = JSON.parse(character.data);
    return data.name;
  }
}
