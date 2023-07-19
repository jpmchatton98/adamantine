import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-choice',
  templateUrl: './display-choice.component.html',
  styleUrls: ['./display-choice.component.scss']
})
export class DisplayChoiceComponent {
  @Input() choice: any;
  @Input() subChoice = false;

  @Input() level = 0;
}
