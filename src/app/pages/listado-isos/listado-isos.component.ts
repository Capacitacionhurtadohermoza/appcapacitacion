import { Component, OnInit } from '@angular/core';
import { CapacitacionService } from 'src/app/services/capacitacion.service';
import { CapacitacionModel } from '../../models/capacitacion.models';

@Component({
  selector: 'app-listado-isos',
  templateUrl: './listado-isos.component.html'
})
export class ListadoIsosComponent implements OnInit {

  capacitaciones:CapacitacionModel[] = [];

  constructor(
    private capacitacionService: CapacitacionService
  ) { 

  }

  ngOnInit() {
    this.capacitaciones = this.capacitacionService.getCapacitaciones();
  }

}
