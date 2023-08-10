import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DBService } from 'src/services/db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Adamantine';

  constructor(private router: Router, private dbService: DBService) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  onActivate(event: any) {
    window.scroll({
      top: 0,
      left: 0,
    });
  }

  public getCharacter() {
    this.dbService
      .getCharacter('4')
      .subscribe((response) => console.log(response));
  }
  public setCharacter() {
    this.dbService
      .setCharacter('callie', '4', { name: 'Callie' })
      .subscribe((response) => console.log(response));
  }
}
