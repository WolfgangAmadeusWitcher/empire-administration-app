import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Signage } from './../../models/signage.model';

@Component({
  selector: 'app-signage-listing',
  templateUrl: './signage-listing.component.html',
  styleUrls: ['./signage-listing.component.css']
})
export class SignageListingComponent implements OnInit {

  editSignageForm: FormGroup;
  @Input() signages: Signage[];
  @Output() recordDeleted = new EventEmitter<Signage>();
  @Output() editClicked = new EventEmitter<Signage>();
  selectedElementlId: number;

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal
  ) {}

  getSelectedSignage(): Signage {
    return this.signages[
      this.signages.findIndex((sign) => sign.id === this.selectedElementlId)
    ];
  }

  ngOnInit(): void {
    this.clearModal();
  }

  getDefaultSignage(): Signage{
    return Signage.getDefaultSignage();
  }

  private clearModal(): void {
    this.editSignageForm = this.formBuilder.group(Signage.getDefaultSignage());
  }

  public delete(data: Signage): void {
    this.recordDeleted.emit(data);
  }

  public openSignageModal(
    editSignageModal: FormGroup,
    signage: Signage
  ): void {
    this.modalService.open(editSignageModal, {
      centered: true,
      backdrop: 'static',
    });

    this.editSignageForm.patchValue({
      id: signage.id,
      alias: signage.alias,
      terminalSignages: signage.terminalSignages,
    });
  }

  onSubmit(): void {
    this.editClicked.emit(this.editSignageForm.value);
    this.modalService.dismissAll();
  }

  onRowClick(signageId: number, checkBox): void {
    this.clearPreviouslySelectedCheckBox();
    if (this.selectedElementlId !== signageId) {
      this.selectedElementlId = signageId;
      checkBox.checked = true;
    } else {
      this.selectedElementlId = undefined;
    }
  }

  private clearPreviouslySelectedCheckBox(): void {
    if (this.selectedElementlId !== undefined) {
      const previousCheckBox = document.getElementById(
        this.selectedElementlId.toString()
      ) as HTMLInputElement;

      previousCheckBox.checked = false;
    }
  }
}
