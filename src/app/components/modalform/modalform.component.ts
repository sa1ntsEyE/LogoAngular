import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalService } from "../../service/modal.service";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-modalform',
  templateUrl: './modalform.component.html',
  styleUrls: ['./modalform.component.scss']
})
export class ModalformComponent implements OnInit {
  formDataArray: FormData[] = [];
  isVisible: boolean = false;
  isThankYouVisible: boolean = false;

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    if (typeof localStorage !== 'undefined') {
      const storageData = localStorage.getItem('formDataArray');
      if (storageData) {
        this.formDataArray = JSON.parse(storageData);
      }
    }

    this.modalService.modalVisible$.subscribe(visible => {
      this.isVisible = visible;
    });
  }

  closeModal() {
    this.isThankYouVisible = false;
    this.modalService.closeModal();
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const newFormData = {
        fullName: form.value.fullName,
        email: form.value.email,
        phone: form.value.phone
      };
      this.formDataArray.push(newFormData);
      localStorage.setItem('formDataArray', JSON.stringify(this.formDataArray));
      form.reset();
      this.isThankYouVisible = true;
    }
  }
}
