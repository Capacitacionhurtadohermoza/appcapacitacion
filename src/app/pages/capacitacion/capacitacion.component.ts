import { Component, OnInit } from '@angular/core';
import { CapacitacionService } from 'src/app/services/capacitacion.service';
import { CapacitacionModel } from '../../models/capacitacion.models';

@Component({
  selector: 'app-capacitacion',
  templateUrl: './capacitacion.component.html'
})
export class CapacitacionComponent implements OnInit {

  capacitaciones:CapacitacionModel[] = [];
  
  constructor(
    private capacitacionService: CapacitacionService
  ) { 

  }

  ngOnInit() {
    this.capacitaciones = this.capacitacionService.getCapacitaciones();
  }

}
