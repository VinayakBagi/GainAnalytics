import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import './../../assets/js/smtp.js';
declare let Email: any;

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm  =  this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['',[ Validators.required, Validators.minLength(8)]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.contactForm.value)
    this.submitted = true;
    if (this.contactForm.valid) {
      Email.send({
        Host : 'smtp.gainanalytics.in',
        Username : 'amardeep@gainanalytics.in',
        Password : '****',
        To : 'kenj@gainanalytics.in,amardeep@gainanalytics.in',
        From : 'amardeep@gainanalytics.in',
        Subject : `${this.contactForm.value.subject}`,
        Body : `<i>User with below details has sent a message to you.</i><br/><br/>
                <b>Name: </b>${this.contactForm.value.name}<br/>
                <b>Email: </b>${this.contactForm.value.email}<br/>
                <b>Message: </b>${this.contactForm.value.message}<br/><br/>
                <b>End of Message.</b> `
      }).then( message => {
          if(message === 'OK') {
            message = 'Mail sent successfully.'
            this.contactForm.reset();
            this.submitted = false;
          }
          alert(message);
      });
    }
  }
}
