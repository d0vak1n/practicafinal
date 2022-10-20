import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from 'src/app/model/pais';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-listado-paises',
  templateUrl: './listado-paises.component.html',
  styleUrls: ['./listado-paises.component.css']
})

// Raul Moreno Arroyo


export class ListadoPaisesComponent implements OnInit {


  paises:Pais[] = undefined;
  printColumnas:string[] = undefined;

  constructor(private paisService:PaisService) {}


  ngOnInit() {

    let observable:Observable<Pais[]> = this.paisService.getAll();
    
    observable.subscribe(datos => {
      this.paises = datos;
    });
    
  }

}
