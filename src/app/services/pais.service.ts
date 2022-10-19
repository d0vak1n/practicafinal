import { Injectable } from '@angular/core';
import { HttpClient}  from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Pais } from '../model/pais';
import { Observable } from 'rxjs';

// https://restcountries.com/v3.1/all

const URL = environment.URLBase;

@Injectable({
  providedIn: 'root'
})

export class PaisService {

  constructor(private httpCliente:HttpClient) {}

  getAll(){

    return this.httpCliente.get<Pais[]>(URL);


  }

}
