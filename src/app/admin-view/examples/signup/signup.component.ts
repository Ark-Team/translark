import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  test: Date = new Date();
  focus;
  focus1;

  constructor(public router: Router) { }

  ngOnInit() { }


  login() {
    this.redireccionar('statistics')
  }

  redireccionar(ruta: String) {
    console.log(ruta);
    setTimeout(() => {
      this.router.navigate([ruta]);
    }, 1000)
  }
}
