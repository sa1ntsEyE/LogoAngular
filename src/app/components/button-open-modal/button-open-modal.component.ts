import { Component } from '@angular/core';
import { ModalService } from "../../service/modal.service";

@Component({
  selector: 'app-button-open-modal',
  templateUrl: './button-open-modal.component.html',
  styleUrls: ['./button-open-modal.component.scss']
})
export class ButtonOpenModalComponent {
  constructor(private modalService: ModalService) {}

  openModal() {
    this.modalService.openModal();
  }
}
