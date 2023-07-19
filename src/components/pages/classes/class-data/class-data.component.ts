import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IClass } from 'src/app/models/data.models';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-class-data',
  templateUrl: './class-data.component.html',
  styleUrls: ['./class-data.component.scss'],
})
export class ClassDataComponent implements OnInit {
  public classData: IClass;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    const className = this.route.parent.snapshot.params['name'];
    this.classData = this.dataService.getClass(className);
  }

  public levelKeys(object: any): string[] {
    return Object.keys(object)
      .map((l) => parseInt(l))
      .sort((a, b) => a - b)
      .map((l) => l.toString());
  }
}
