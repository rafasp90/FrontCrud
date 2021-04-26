import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListarPessoaResult } from '../models/result/listar-pessoa-result';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient) { }

  listar(): Observable<ListarPessoaResult[]> {
    return this.http.get<ListarPessoaResult[]>(`${environment.urlApiCrud}/Pessoa/Listar`);
  }

}
