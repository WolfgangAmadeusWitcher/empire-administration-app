import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SignageEditModalComponent } from '../signage-edit-modal/signage-edit-modal.component';
import { Signage } from './../../models/signage.model';

@Component({
  selector: 'app-signage-listing',
  templateUrl: './signage-listing.component.html',
  styleUrls: ['./signage-listing.component.css']
})
export class SignageListingComponent {

  selectedElementlId: number;

  @Input() signages: Signage[];

  @Output() recordDeleted = new EventEmitter<Signage>();
  @Output() editClicked = new EventEmitter<Signage>();


  constructor(private modalService: NgbModal) {}

  getDefaultSignage(): Signage{
    return Signage.getDefaultSignage();
  }


  public delete(data: Signage): void {
    this.recordDeleted.emit(data);
  }

  public openSignageModal(signage: Signage, $event: Event): void {
    const modalRef = this.modalService.open(SignageEditModalComponent, {
      centered: true,
      backdrop: 'static',
    });
    this.onRowClick(signage);
    modalRef.componentInstance.selectedSignage = signage;
    modalRef.componentInstance.formSubmitted = this.editClicked;
    modalRef.componentInstance.openSignageModal();
    $event.stopPropagation();
  }

  onRowClick(signage: Signage): void {
    if (this.selectedElementlId === undefined) {
      signage.isSelected = true;
      this.selectedElementlId = signage.id;
      return;
    }
    const selectedSignage = this.signages[this.signages.findIndex(s => s.id === this.selectedElementlId)];
    selectedSignage.isSelected = false;
    if (this.selectedElementlId === signage.id) {
      this.selectedElementlId = undefined;
    } else {
      signage.isSelected = true;
      this.selectedElementlId = signage.id;
    }
  }
}
