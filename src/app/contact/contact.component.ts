import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
export interface Email {
  fromEmail: string;
  toEmail: string;
  message: string;
  subject: string;

}
export interface ServiceList {
  fromEmail: string;
  toEmail: string;
  message: string;
  subject: string;

}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {



  tourPackage = [
    {name: 'Auckland City & West Coast Luxury Tour', value: 'AucklandTour1'},
    {name: 'Auckland to Waitomo Caves and Hobbiton Movie Set One Day Return Tour', value: 'AucklandTour2'},
    {name: 'Waiheke Island Exploration and Zipline Day Trip from Auckland', value: 'AucklandTour3'},
    {name: 'Auckland - Bay Of Island - Cape Reinga Tour', value: 'NorthIslandTour1'},
    {name: 'Auckland - Rotorua - Waitomo Caves Tour', value: 'NorthIslandTour2'},
    {name: 'Queens Town Tour', value: 'SouthIslandTour1'},
    {name: 'Queenstown, Milford Sound, Mount Cook & Christchurch Tour', value: 'SouthIslandTour2'},
  ]

  adult = [
    {name: '1', value: '1'},
    {name: '2', value: '2'},
    {name: '3', value: '3'},
    {name: '4', value: '4'},
    {name: '5', value: '5'},
    {name: '6', value: '6'},
    {name: '7', value: '7'},
    {name: '8', value: '8'},
    {name: '9', value: '9'},
    {name: '10', value: '10'}
  ]
  children = [
    {name: '1', value: '1'},
    {name: '2', value: '2'},
    {name: '3', value: '3'},
    {name: '4', value: '4'},
    {name: '5', value: '5'},
    {name: '6', value: '6'},
    {name: '7', value: '7'},
    {name: '8', value: '8'},
    {name: '9', value: '9'},
    {name: '10', value: '10'}
  ]


  lat = -36.79648;
  lng = 174.646926;
  constructor(private http: HttpClient) { }
  subject: FormControl = new FormControl();
  name: FormControl = new FormControl();
  fromEmail: FormControl = new FormControl();
  toEmail: FormControl = new FormControl();
  message: FormControl = new FormControl();
  noOfAdults: FormControl = new FormControl();
  noOfChildren: FormControl = new FormControl();
  tourPackages: FormControl = new FormControl();
  serviceName: string ;
  email: Email ;
  emailSuccess: Boolean ;
  form = new FormGroup({
    subject: new FormControl(),
    name: new FormControl(),
    fromEmail: new FormControl(),
    message:  new FormControl()
  });


  ngOnInit() {
    this.email = {
      fromEmail: '',
      toEmail: '',
      message: '',
      subject: ''
    };
  }


  send() {
    const TO_EMAIL = 'skr.bglr@gmail.com';
    const API_URL = 'https://booking-api-csoft-in.appspot.com';
    const noOfAdults = 'No Of Adults:';
    const noOfChildren = 'No Of Children:';

    //const API_URL = 'http://localhost:8080';
    this.email.fromEmail = this.fromEmail.value ;
    this.email.toEmail = TO_EMAIL ;
    console.log(this.serviceName);
    this.email.subject = "anything" ;
    this.email.message = this.message.value ;
    this.email.message = '${noOfAdults} \n ${noOfChildren} \n ${this.email.message}';
    console.log(this.email);
   // this.http.post<Email>(API_URL + 'api/website/sendEmailFromWebSite', this.email).
    this.http.post<boolean>(API_URL + '/api/website/sendEmailFromWebSite', this.email).
   subscribe(response => {
    this.emailSuccess = response;
    console.log(response);
    this.email = {
      fromEmail: '',
      toEmail: '',
      message: '',
      subject: ''
    };
   });
  }

}