import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export interface ContactInfo {
  firstName: string,
  lastName: string,
  emailAddress: string,
  phoneNumber: string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  contactForm: FormGroup;
  contactFormValues: ContactInfo;
  phoneNumberFormat = "^(\\([0-9]{3}\\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$";

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      emailAddress: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern(this.phoneNumberFormat)])
    });
  }

  contactSubmit() {
    if (this.contactForm.valid) {
      this.contactFormValues = { ...this.contactForm.value };
    }
  }
}
