import { Injectable } from '@angular/core';
import { Cellphone } from './cellphone';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

export const mock: Cellphone[] = [{
  'price': 1990,
  'code': '653d9688-af26-4ff1-b1a6-58c474fba27f',
  'model': 'Moto G5 Plus',
  'brand': 'Motorola',
  'photo': 'http://www3.claro.com.br/sites/default/files/claro-net-simples_5654b06692637-224x170_565c9453ee1bf.png​',
  'date': '26/11/2015'
 }​, {
 ​ 'price': 3990,
  'code': 'd10e528f-9f2c-4271-9dc1-967bef224695​',
  'model': 'IPhone 7 Plus',
  'brand': 'Apple',
  'photo': 'http://www3.claro.com.br/sites/default/files/claro-net-simples_5654b06692637-224x170_565c9453ee1bf.png​',
  'date': '25/12/2015'
 }, {
 ​ 'price': 699,
  'code': 'ba59f136-9d1f-42bf-8f4a-826dca8dde5b​',
  'model': 'J7',
  'brand': 'Samsung',
  'photo': 'http://www3.claro.com.br/sites/default/files/claro-net-simples_5654b06692637-224x170_565c9453ee1bf.png​',
  'date': '01/11/2015'
 }​];

@Injectable()
export class CellphoneListService {

  constructor() { }

  // Método no qual consumiria os serviços de `/claro/mobile` e retornaria todos os celulares
  list(): Observable<Cellphone[]> {
    return of(mock as Cellphone[]);
  }

  // Método no qual consumiria os serviços de `/claro/mobile/{code}` e retornaria um celular específico
  get(): Observable<Cellphone> {
    return of(null);
  }

  add(cellphone: Cellphone): Observable<Cellphone[]> {
    mock.push(cellphone);
    return of(mock);

  }


}
