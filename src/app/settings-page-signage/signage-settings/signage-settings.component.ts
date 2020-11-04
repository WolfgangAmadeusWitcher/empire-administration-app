import { Component } from '@angular/core';
import { SignageService } from '../../services/signage.service';
import { Signage } from './../../models/signage.model';

@Component({
  selector: 'app-signage-settings',
  templateUrl: './signage-settings.component.html',
  styleUrls: ['./signage-settings.component.css'],
})
export class SignageSettingsComponent {
  public signages: Signage[] = [];

  constructor(public signageService: SignageService) {
    this.signageService.getAll().subscribe((signagesResponse) => {
      signagesResponse.map((signage) => this.signages.push(signage));
    });
  }

  public createOrUpdateElement(signage: Signage): void {
    if (signage.id !== undefined) {
      const updateIndex = this.signages.findIndex((tc) => tc.id === signage.id);
      this.signageService.update(signage).subscribe((signageRecord) => {
        signageRecord.isSelected = this.signages[updateIndex].isSelected;
        this.signages[updateIndex] = signageRecord;
      });
    } else {
      this.signageService.create(signage).subscribe((signageRecord) => {
        this.signages.push(signageRecord);
      });
    }
  }

  public deleteElement(signage: Signage): void {
    this.signageService.remove(signage);

    const deleteIndex = this.signages.findIndex((tc) => tc.id === signage.id);
    this.signages.splice(deleteIndex, 1);
  }
}
