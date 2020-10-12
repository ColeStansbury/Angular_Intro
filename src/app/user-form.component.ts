import {Component, OnInit} from '@angular/core'
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms'

@Component({
  selector: 'userLogin',
  templateUrl: 'user-form.component.html'
})
export class UserLoginFormComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit() {
    this.form = new FormGroup({
      username: this.formBuilder.control('',
      Validators.pattern('^[a-z0-9_-]{3,15}$')),
      password: this.formBuilder.control('',Validators.compose([
                    Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'),Validators.required]))
    });
  }
  onSubmit(userLogin) {
    console.log(userLogin)
  }
};