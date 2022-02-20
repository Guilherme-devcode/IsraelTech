import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Autenticacao } from 'src/app/acesso/autenticacao.service';
import { Usuario } from 'src/app/acesso/usuario.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  usuario!: Usuario
  Email: string | undefined

  constructor(private userService: Autenticacao) { }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged((user) => {

    })
    firebase.auth().onAuthStateChanged((user)=>{
      this.Email = user?.email
    })
  }

  

}
