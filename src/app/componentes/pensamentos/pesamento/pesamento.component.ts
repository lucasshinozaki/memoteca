import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesamento',
  templateUrl: './pesamento.component.html',
  styleUrls: ['./pesamento.component.css']
})
export class PesamentoComponent implements OnInit {

  @Input() pensamento = {
    conteudo: 'teste angular',
    autoria: 'lucas',
    modelo: 'modelo3'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
