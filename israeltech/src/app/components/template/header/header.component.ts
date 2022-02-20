import { Component, OnInit } from '@angular/core';
import { Autenticacao } from 'src/app/acesso/autenticacao.service';
import * as firebase from 'firebase';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private autenticacao : Autenticacao) { }
  Email: string | undefined

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged((user) => {

    })
    firebase.auth().onAuthStateChanged((user)=>{
      this.Email = user?.email
    })
  }
  public sair(): void{
    this.autenticacao.sair()
  }
}
