import { Component, OnInit } from '@angular/core';
import { from, map, Observable, toArray } from 'rxjs';
import { Pais } from 'src/app/model/pais';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-listado-paises',
  templateUrl: './listado-paises.component.html',
  styleUrls: ['./listado-paises.component.css']
})


export class ListadoPaisesComponent implements OnInit {


  paises: Pais[] = undefined;


  constructor(private paisService: PaisService) { }


  ngOnInit() {

    let stream1: Observable<Pais[]> = this.paisService.getAll();

    stream1.subscribe(
      datosEnBruto => {
        from(datosEnBruto)
          .pipe(
            map(paisEnBruto => {
              let pais = new Pais();
              pais.name.common = paisEnBruto.name.common;
              pais.region = paisEnBruto.region;
              pais.capital = paisEnBruto.capital;
              pais.population = paisEnBruto.population;

              return pais;
            }
            ),
            toArray()
          ).subscribe(
              arrayPaises => {
                this.paises = arrayPaises;
              }
            )

      });

  }
}
