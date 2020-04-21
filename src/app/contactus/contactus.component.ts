import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ContactUsModel } from '../Models/ContactUsModel';
import { ContactService } from '../_services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
})
export class ContactusComponent implements OnInit {
  constructor(
    private contactService: ContactService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  // loading = false;
  // responseMessage: string;
  // error: string;
  // contactModel: ContactUsModel;
  // submitted = false;
  // contactForm: FormGroup;
  ngOnInit(): void {}
  // SaveContact() {
  //   this.submitted = true;
  //   if (this.contactForm.invalid) {
  //     return;
  //   }
  //   this.contactModel = this.contactForm.value;
  //   this.loading = true;
  //   this.contactService
  //     .Save(this.contactForm.value)
  //     .pipe(first())
  //     .subscribe(
  //       (result: string) => {
  //         this.responseMessage = result;
  //       },
  //       (error) => {
  //         this.error = error;
  //       }
  //     );
  //   this.loading = false;
  // }
}
