 import { Component,OnInit,HostListener } from '@angular/core';
 import { Router, RouterLink } from '@angular/router';
 import { AuthService } from '../../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

 @Component({
   selector: 'app-register',
   templateUrl: './register.component.html',
   styleUrl: './register.component.css',
  providers: [AuthService]
})
// export class RegisterComponent {

//   userForm: FormGroup;
//   elem: any = {}; // Assurez-vous que 'elem' est initialisé
//   utilisateur: any;
//   router: any;

//   constructor(private fb: FormBuilder,private authService:AuthService) {
//     this.userForm = this.fb.group({
//       lastName: ['', Validators.required],
//       firstName: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', Validators.required],
//       confirmPassword: ['', Validators.required],
//       telephone: ['', Validators.required],
//       type: ['CLIENT',Validators.required ],// par défaut
//     }, { validators: this.passwordMatchValidator });
//   }

//   passwordMatchValidator(form: FormGroup) {
//     return form.get('password')?.value === form.get('confirmPassword')?.value
//       ? null : { 'mismatch': true };
//   }


//   ngOnInit(): void {
//     console.log('On init ......');
//   }

  

  
//   onSubmit(): void {
//     if (this.userForm.valid) {
//       this.authService.register(this.userForm.value).subscribe(
//         data => {
//           console.log('Registration successful!');
//           this.router.navigate(['/login']);
//         },
//         error => {
//           console.log('Registration failed. Please try again.');
//         }
//       );
//     } else {
//       alert('Formulaire invalide');
//     }
//   }
//   activeField: number | null = null;
//   navbarColor: string = 'green';
//   public showBlocks = false;
//   blocks = [
//     { content: 'Block 1', state: 'hidden' },
//     { content: 'Block 2', state: 'hidden' },
//     { content: 'Block 3', state: 'hidden' }
//   ];

//   onClick(fieldIndex: number) {
//     this.activeField = this.activeField === fieldIndex ? null : fieldIndex;
//   }
// }
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AuthService } from '../../auth.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-register',
//    templateUrl: './register.component.html',
//    styleUrl: './register.component.css',
//   providers: [AuthService]
// })
export class RegisterComponent implements OnInit {

  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      telephone: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.userForm.valid) {
      this.authService.register(this.userForm.value).subscribe({
       next: (response) => {
          console.log('Registration successful', response);
          alert("Register success");
          this.router.navigate(['/login']);
        }, error: (err) => {
          console.error('Registration failed', err);
          alert("Register failed");
          this.userForm.reset();
          this.router.navigate(['/register']);
        }
        });
    }
  }
}
