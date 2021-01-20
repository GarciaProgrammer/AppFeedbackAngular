import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela',
  templateUrl: './tela.component.html',
  styleUrls: ['./tela.component.css']
})
export class TelaComponent implements OnInit {

  verFormulario:boolean = false;
  constructor() { }

  habilitarFormulario(){
    this.verFormulario = !this.verFormulario;

  }

  cadastrarNovaPergunta(){

  }

  ngOnInit(): void {
  }

}
