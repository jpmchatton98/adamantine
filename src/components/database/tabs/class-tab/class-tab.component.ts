import { Component } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-class-tab',
  templateUrl: './class-tab.component.html',
  styleUrls: ['./class-tab.component.scss'],
})
export class ClassTabComponent {
  public dataService: DataService;

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }
  public classes: any[] = [];

  public ngOnInit(): void {
    this.classes = this.dataService.getClasses();
  }

  public nameUrlEncode(name: string): string {
    return (
      name
        ?.replace(/[ '"\(\)!\/:,&]/g, '-')
        .replace(/--+/g, '-')
        ?.toLowerCase() ?? ''
    );
  }
}
