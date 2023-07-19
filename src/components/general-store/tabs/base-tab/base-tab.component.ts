import { Component, Input, OnInit } from '@angular/core';
import { GeneralStoreService } from 'src/services/general-store.service';

@Component({
  selector: 'gs-base-tab',
  templateUrl: './base-tab.component.html',
  styleUrls: ['./base-tab.component.scss'],
})
export class BaseTabComponent implements OnInit {
  @Input() data: string = '';
  @Input() excludedColumns: string[] = [];
  public itemData: any[] = [];

  constructor(protected generalStoreService: GeneralStoreService) {}

  public ngOnInit(): void {
    this.itemData = this.generalStoreService.getItems(this.data);
  }

  public getColumns(): string[] {
    return Object.keys(this.itemData[0]);
  }

  public formatHeader(header: string): string {
    const split = header.replace(/([a-z](?=[A-Z]))/g, '$1 ').split(' ');
    for (var i = 0; i < split.length; i++) {
      split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1);
    }
    return split.join(' ');
  }

  public formatCost(cost: number): string {
    cost = parseFloat(cost.toFixed(4));

    if (!cost) {
      return '-';
    }

    if (cost < 0.1 || (cost * 100) % 10 !== 0) {
      return `${cost * 100} cp`;
    } else if (cost < 1 || (cost * 10) % 10 !== 0) {
      return `${cost * 10} sp`;
    } else if (cost < 10000 || cost % 10 !== 0) {
      return `${cost} gp`;
    } else {
      return `${cost / 10} pp`;
    }
  }

  public formatWeight(weight: number): string {
    weight = parseFloat(weight.toFixed(4));

    if (!weight) {
      return '-';
    }

    if (weight >= 2000) {
      return `${weight / 2000} ton${weight !== 2000 ? 's' : ''}`;
    } else {
      return `${weight} lb${weight !== 1 ? 's' : ''}`;
    }
  }

  public formatTime(time: number): string {
    if (time >= 100) {
      return `${time / 10} weeks`;
    } else {
      return `${time} days`;
    }
  }

  public formatSpeed(speed: number): string {
    return `${speed} mph`;
  }
}
