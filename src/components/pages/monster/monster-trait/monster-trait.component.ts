import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-monster-trait',
  templateUrl: './monster-trait.component.html',
  styleUrls: ['./monster-trait.component.scss'],
})
export class MonsterTraitComponent {
  @Input() trait: any;
  @Input() level: number = 0;
}
