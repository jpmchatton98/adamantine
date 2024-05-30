import { Component, Input } from '@angular/core';
import { BaseComponent } from 'src/components/meta/base/base.component';
import { GeneralStoreService } from 'src/services/general-store.service';

@Component({
  selector: 'gs-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss'],
})
export class VehicleComponent extends BaseComponent {
  @Input()
  set name(index: string) {
    this.vehicle = this.generalStoreService.getVehicle(index);
    this.pageTitle = this.vehicle.name;
  }

  public vehicle;

  constructor(private generalStoreService: GeneralStoreService) {
    super();
  }

  public modifier(score: number): string {
    let mod = Math.floor((score - 10) / 2);
    if (mod > 0) {
      return `+${mod}`;
    } else {
      return mod.toString();
    }
  }
}
