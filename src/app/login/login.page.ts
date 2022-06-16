import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  loginForm: FormGroup;
  validation_messages = {
    email: [
      {type: "required", message: "El email es requerido"},
      {type: "pattern", message: "No es un email válido"}
    ],
    password: [
      {type: 'required', message: 'El password es requerido'},
      {type: 'minLength', message: 'Tamaño minimo 5 caracteres'}
    ],
  };

  errorMessage: String = "";


  constructor(private formBuilder: FormBuilder, private authService: AuthenticateService, private navCtrl: NavController) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl("",Validators.compose([
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
      ])),
      password: new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ]))
    });
   }

  ngOnInit() {
  }

  loginUser(credentials){
    this.authService.loginUser(credentials).then(res => {
      this.errorMessage="";
      this.navCtrl.navigateForward("/home");
    });
  }

}
