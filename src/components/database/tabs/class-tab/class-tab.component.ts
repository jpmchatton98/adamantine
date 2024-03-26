import { Component } from '@angular/core';
import { BaseComponent } from 'src/components/meta/base/base.component';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-class-tab',
  templateUrl: './class-tab.component.html',
  styleUrls: ['./class-tab.component.scss'],
})
export class ClassTabComponent extends BaseComponent {
  public dataService: DataService;

  public override pageTitle: string = 'Classes';

  constructor(dataService: DataService) {
    super();
    this.dataService = dataService;
  }
  public classes: any[] = [];

  public override ngOnInit(): void {
    this.classes = this.dataService.getClasses();

    super.ngOnInit();
  }

  public nameUrlEncode(name: string): string {
    return (
      name
        ?.replace(/[ '"\(\)!\/:,&]/g, '-')
        .replace(/--+/g, '-')
        ?.toLowerCase() ?? ''
    );
  }

  public getIcon(name: string): string {
    return this.dataService.classIcons[
      name.toLowerCase().replaceAll(' ', '').replaceAll('-', '')
    ];
  }
}
