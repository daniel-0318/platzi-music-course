import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;
  validation_messages = {
    name: [
      {type: "required", message: "El nombre es requerido"},
      {type: "pattern", message: "No es un nombre válido"}
    ],
    last_name: [
      {type: "required", message: "El apellido es requerido"},
      {type: "pattern", message: "No es un apellido válido"}
    ],
    email: [
      {type: "required", message: "El email es requerido"},
      {type: "pattern", message: "No es un email válido"}
    ],
    password: [
      {type: 'required', message: 'El password es requerido'},
      {type: 'minLength', message: 'Tamaño minimo 5 caracteres'}
    ],
    passconfirm: [
      {type: 'required', message: 'la confirmación del password es requerido'},
      {type: 'minLength', message: 'Tamaño minimo 5 caracteres'}
    ],
    
  };

  errorMessage: String = "";


  constructor(private formBuilder: FormBuilder, private authService: AuthenticateService, 
    private navCtrl: NavController, private storage: Storage) {
    this.storage.create();
    this.registerForm = this.formBuilder.group({
      name: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(25),
        Validators.pattern("[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$")
      ])),
      last_name:new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(25),
        Validators.pattern("[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$")
      ])),
      email: new FormControl("",Validators.compose([
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
      ])),
      password: new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
      passwordConfirm: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ]))
    }, {validator: this.matchingPassword('password', 'passwordConfirm')}
    );
   }


  registerUser(values){

  }

  ngOnInit() {
  }

  matchingPassword(passwordKey: string, confirmPasswordKey: string){
    // TODO maybe use this https://github.com/yuyang041060120/ng2-validation#notequalto-1
    return (group: FormGroup): {[key: string]: any} => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];
      console.log("Aqui "+ password + " " + confirmPassword)
      if (password.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: true
        };
      }
    }
  }

}
