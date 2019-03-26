import { Injectable } from '@angular/core';

import { FormGroup, FormControl, Validator } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ValidationsService {


  constructor() { }

  /**
   *Valida que el valor del select no venga vacio
   *
   * @param {FormControl} control
   * @returns {{ [s: string]: boolean }}
   * @memberof ValidationsService
   */
  validaSelect(control: FormControl): { [s: string]: boolean } {
    // Si viene vacio el valor del control entonces confirmara que no es valido
    if (control.value === '') {
      return {
        validaSelect: true
      };
    }
    // Si no viene vacio el valor del control entonces es valido
    return null;
  }


}
