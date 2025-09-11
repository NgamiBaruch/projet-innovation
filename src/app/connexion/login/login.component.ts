import { AuthService } from '../../auth.service';
// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterLink } from '@angular/router';
// import { Router } from '@angular/router';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css'],
//   providers: [AuthService]
// })
//     // elem: any = {}; // Assurez-vous que 'elem' est initialisé
  
//     // constructor(private fb: FormBuilder,private authService:AuthService,private router:Router) {
//     //   this.loginForm = this.fb.group({
//     //     email: ['', [Validators.required, Validators.email]],
//     //     password: ['', Validators.required],
//     //   } );
//     // }
  
//     // passwordMatchValidator(form: FormGroup) {
//     //   return form.get('password')?.value === form.get('confirmPassword')?.value
//     //     ? null : { 'mismatch': true };
//     // }
  
  
//     // ngOnInit(): void {
//     //   console.log('On init ......');
//     // }
  
  
//     // onSubmit(): void {
//     //   if (this.loginForm.valid) {
//     //    const { email,password} = this.loginForm.value;
//     //    this.authService.login(email,password)
//     //     .subscribe(response => {
//     //       console.log("login successful",response);
//     //       this.router.navigate(['/administration']);
//     //     },error => {
//     //       console.error('login failed',error);
//     //     });
//     //   } else {
//     //     alert('Formulaire non valide');
//     //   }
      
//     // }

//     export class LoginComponent {
//       loginForm: FormGroup;
//       credentials = {
//         email: '',
//         password: ''
//       };
    
//       constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
//         this.loginForm = this.fb.group({
//           email: ['', [Validators.required, Validators.email]],
//           password: ['', [Validators.required]]
//         });
//       }
    
//       onSubmit(): void {
      
//         if (this.loginForm.valid) {
//           this.authService.login(this.loginForm.value).subscribe(
//             data => {
//               console.log('Login successful!');
//               this.router.navigate(['/administration']); // Redirige vers la page du tableau de bord après une connexion réussie
//             },
//             error => {
//               console.log('Login failed. Please try again.');
//             }
//           );
//         } else {
//           alert( 'Formulaire invalide');
//         }
//       }
    
//     }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  public errorMessage='';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      

      /*this.authService.login(email, password)
        .subscribe(response => {
          console.log('Login successful', response);
          this.router.navigate(['/Accueil']);
        }, error => {
          console.error('Login failed', error);
        });*/

        this.authService.login(email,password).subscribe({
          next: (response) => {
                     console.log("Success");
                     alert("Connexion reussie");
                     this.router.navigate(['/accueil']);
                     console.log(response);
                    
                     
        },
          error: (err) => { 
                      console.log("Error Occured");
                      alert("error");
                      this.errorMessage = "Failed connexion";
                      this.loginForm.reset();
                      this.router.navigate(['/login']);
                      
                      
                      
        }
    });


    }
  }
}