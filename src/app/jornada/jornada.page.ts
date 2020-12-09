import { Resultado } from './../model/resultado';
import { Component, OnInit } from '@angular/core';
import { LigaService } from '../services/liga.service';

@Component({
  selector: 'app-jornada',
  templateUrl: './jornada.page.html',
  styleUrls: ['./jornada.page.scss'],
})
export class JornadaPage implements OnInit {

  jornadaAjornada: boolean = false;
  jornadas: Array<Resultado> = new Array();

  constructor(private ligaService: LigaService) { 
  }
  
  public pasarJornada(){
    this.ligaService.pasarJornada();
    this.jornadas = this.ligaService.jornadas;
    this.jornadaAjornada = this.ligaService.jornadaAjornada;
  }

  ngOnInit() {
  }

}
