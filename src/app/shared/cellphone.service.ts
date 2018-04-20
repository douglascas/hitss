import { Injectable } from '@angular/core';
import { Cellphone } from './cellphone';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

export const mock: Cellphone[] = [{
  'price': 1990,
  'code': '653d9688-af26-4ff1-b1a6-58c474fba27f',
  'model': 'Moto G5 Plus',
  'brand': 'Motorola',
  // 'photo': 'http://www3.claro.com.br/sites/default/files/claro-net-simples_5654b06692637-224x170_565c9453ee1bf.png​',
  'photo': 'https://i4.zst.com.br/images/smartphone-motorola-moto-g-g5-plus-xt1683-tv-digital-32gb-12-0-mp-2-chips-android' +
           '-7-0-nougat-3g-4g-wi-fi-photo197883275-12-16-13.jpg',
  'date': '26/11/2015'
 }​, {
 ​ 'price': 3990,
  'code': 'd10e528f-9f2c-4271-9dc1-967bef224695​',
  'model': 'IPhone 7 Plus',
  'brand': 'Apple',
  // 'photo': 'http://www3.claro.com.br/sites/default/files/claro-net-simples_5654b06692637-224x170_565c9453ee1bf.png​',
  'photo': 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/i/' +
           'ph/iphone7/plus/iphone7-plus-black-select-2016?wid=1200&hei=630&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1472430090682',
  'date': '25/12/2015'
 }, {
 ​ 'price': 699,
  'code': 'ba59f136-9d1f-42bf-8f4a-826dca8dde5b​',
  'model': 'J7',
  'brand': 'Samsung',
  // 'photo': 'http://www3.claro.com.br/sites/default/files/claro-net-simples_5654b06692637-224x170_565c9453ee1bf.png​',
  'photo': 'https://drop.ndtv.com/TECH/product_database/images/672017111356AM_635_j7_db.jpeg',
  'date': '01/11/2015'
 }​];

@Injectable()
export class CellphoneListService {

  cellphones = mock;

  constructor() { }

  // Método no qual consumiria os serviços de `/claro/mobile` e retornaria todos os celulares
  list(): Observable<Cellphone[]> {
    return of(mock as Cellphone[]);
  }

  // Método no qual consumiria os serviços de `/claro/mobile/{code}` e retornaria um celular específico
  get(): Observable<Cellphone> {
    return of(null);
  }

  // Insere na lista o item que eu criei
  add(cellphone: Cellphone): Observable<Cellphone[]> {
    this.cellphones.push(cellphone);
    return of(this.cellphones);
  }

  // Atribui o valor da lista sem o item que eu removi à própria lista.
  remove(cellphone: Cellphone) {
    this.cellphones = mock.filter(c => c.code !== cellphone.code);
    return this.cellphones;
  }

}
