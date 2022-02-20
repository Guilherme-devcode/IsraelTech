import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.scss']
})
export class AcessoComponent implements OnInit {

  public cadastro: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  public exibirPainel(event: String){
    this.cadastro = event === 'cadastro' ? true : false
  }

}
