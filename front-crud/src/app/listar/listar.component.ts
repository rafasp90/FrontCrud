import { Component, OnInit } from '@angular/core';
import { ListarPessoaResult } from '../models/result/listar-pessoa-result';
import { PessoaService } from '../services/pessoa.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.sass']
})
export class ListarComponent implements OnInit {
  
  pessoas: ListarPessoaResult[] = [];

  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.listarPessoas();
  }

  listarPessoas() {
    this.pessoaService.listar()
    .subscribe(
      result => {
        this.pessoas = result;
      }
    )
  }
}
