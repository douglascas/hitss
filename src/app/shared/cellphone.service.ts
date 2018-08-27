import { Injectable } from '@angular/core';
import { Cellphone } from './cellphone';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

export const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus, elit nec consequat fringilla, ' +
  'sem leo mollis mi, in congue tellus ex elementum augue. Vestibulum cursus, nisl non semper pellentesque,' +
  'libero ligula hendrerit velit, ut dapibus dui orci sit amet magna. Proin fringilla eros non ex vulputate' +
  'scelerisque. Vestibulum pulvinar dolor ac justo faucibus cursus. Quisque nec laoreet nibh, a scelerisque urna.' +
  'Nunc a semper metus, vel molestie ex. Suspendisse quis nunc eget enim semper lacinia nec egestas libero' +
  'Proin et velit vel urna dapibus pharetra. Praesent fringilla dolor sed nisi facilisis, quis consequat quam' +
  'elementum. Cras semper pretium ante, at placerat ante efficitur eget. Nam sed eleifend velit. Sed imperdiet' +
  'mauris eu euismod tristique. Nulla dui ligula, auctor in tortor posuere, sollicitudin euismod ipsum. Sed ut ' +
  'tristique dui. Donec quis leo risus. Aenean pulvinar mattis erat in ullamcorper. Nunc posuere urna ut eros consequat' +
  'interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur rhoncus' +
  'ornare massa, ac tincidunt purus iaculis id. Etiam lectus lacus, malesuada non ultrices id, viverra a tortor.';

export const mock: Cellphone[] = [{
  'price': 1990,
  'code': '653d9688-af26-4ff1-b1a6-58c474fba27f',
  'model': 'Moto G5 Plus',
  'brand': 'Motorola',
  // 'photo': 'http://www3.claro.com.br/sites/default/files/claro-net-simples_5654b06692637-224x170_565c9453ee1bf.png​',
  'photo': 'https://i4.zst.com.br/images/smartphone-motorola-moto-g-g5-plus-xt1683-tv-digital-32gb-12-0-mp-2-chips-android' +
    '-7-0-nougat-3g-4g-wi-fi-photo197883275-12-16-13.jpg',
  'date': '26/11/2015',
  'decription': lorem
}​, {
  'price': 3990,
  'code': 'd10e528f-9f2c-4271-9dc1-967bef224695​',
  'model': 'IPhone 7 Plus',
  'brand': 'Apple',
  // 'photo': 'http://www3.claro.com.br/sites/default/files/claro-net-simples_5654b06692637-224x170_565c9453ee1bf.png​',
  'photo': 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/i/' +
    'ph/iphone7/plus/iphone7-plus-black-select-2016?wid=1200&hei=630&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1472430090682',
  'date': '25/12/2015',
  'decription': lorem
}, {
  'price': 699,
  'code': 'ba59f136-9d1f-42bf-8f4a-826dca8dde5b​',
  'model': 'J7',
  'brand': 'Samsung',
  // 'photo': 'http://www3.claro.com.br/sites/default/files/claro-net-simples_5654b06692637-224x170_565c9453ee1bf.png​',
  'photo': 'https://drop.ndtv.com/TECH/product_database/images/672017111356AM_635_j7_db.jpeg',
  'date': '01/11/2015',
  'decription': lorem
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

  // Insere na lista o item que eu criei
  update(data: Cellphone, cellphone: Cellphone) {
    this.cellphones.filter(a => a.code === data.code)
      .map(a => Object.assign(a, cellphone));
  }

  remove(cellphone: Cellphone) {
    this.cellphones.splice(this.cellphones.indexOf(cellphone), 1);
  }

}
