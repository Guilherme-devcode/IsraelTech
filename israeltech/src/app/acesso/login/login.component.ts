import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Autenticacao } from '../autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() public exibirPainel: EventEmitter<String> = new EventEmitter<String>()

  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'senha': new FormControl(null)
  })

  constructor(
    private Autenticacao: Autenticacao
  ) { }

  ngOnInit(): void {
  }

  public exibirPainelCadastro():void{
    this.exibirPainel.emit('cadastro')
  }

  public autenticar(): void{
    this.Autenticacao.autenticar(
      this.formulario.value.email,
      this.formulario.value.senha
    )
  }
}
