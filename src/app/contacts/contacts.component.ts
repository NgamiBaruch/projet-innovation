import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from '../service/http.service';
import { Message } from '../model/message';
// import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
  // animations: [
  //   trigger('changeColor', [
  //     state('default', style({
  //       backgroundColor: 'rgba(177, 252, 177, 0.3)'
  //     })),
  //     state('clicked', style({
  //       backgroundColor: 'white'
  //     })),
  //     transition('default => clicked', [
  //       animate('0.5s')
  //     ]),
  //     transition('clicked => default', [
  //       animate('0.5s')
  //     ])
  //   ])
  // ]
})

export class ContactsComponent implements OnInit{
  activeField: number | null = null;

  contactForm!: FormGroup;
  message!: Message;
  isLoading = false;
  toasts: any[] = [];
  

  constructor(private formBuilder: FormBuilder, private httpService: HttpService ){}

  ngOnInit(): void {
      this.contactForm = this.formBuilder.group({
        typeClient: ['particulier', Validators.required],
        name: ['', Validators.required],
        prenom: ['', Validators.required],
        email: ['', Validators.required],
        message: ['', Validators.required],
        phone: ['', Validators.required],
      })
  }

  get email() { return this.contactForm.get('email'); }

  onSendMessage(){
    this.isLoading = true; // Show spinner
    this.message = new Message(
      "contacts@eis-innovation.com",
      "EIS SITE Message",
      `<div style='margin-left: 70px; margin-right: 70px;'><div style='background-color: rgb(7,160,7); color: white; font-size: 20px; text-align: center;height: 40px;padding-top: 5px; font-weight: 700;'>EIS-SITE Contact message</div><div style='margin-top: 10px'>Type de client : <span style='font-weight: 700;'>${this.contactForm.value.typeClient}</span></div><div>Message envoyé par : <span style='font-weight: 700;'>${this.contactForm.value.name} ${this.contactForm.value.prenom}</span></div><div>Email : <span style='font-weight: 700;'>${this.contactForm.value.email}</span> </div><div>Téléphone : <span style='font-weight: 700;'>${this.contactForm.value.phone}</span> </div><div style='margin-top: 20px; font-weight: 700;'>Message :</div><div style='margin-top: 5px; margin-left: 30px; margin-right: 30px;'>${this.contactForm.value.message} :</div></div>`,
      true,
      true   
    );

    if(this.message){
      this.httpService.sendContactMessage(this.message).subscribe(response => {
        console.log(response);
        this.show("Confirmation", "Message envoyé avec succès !", "") ; // Afficher Toast..
        this.contactForm.reset();
      } );
    } 

  }

  onClick(fieldindex : number) {
    this.activeField = this.activeField === fieldindex ? null : fieldindex;
  }

  // Pour le Toast
  show(title: string, message: string, time: string) {
    this.isLoading = false; // Arrêt spinner
    this.toasts.push({ title, message, time, show: true });
    setTimeout(() => {
      this.toasts.shift();
    }, 6000); // Le toast disparaît après 6 secondes
  }
  closeToast(toast: any) {
    toast.show = false;
  }

}


