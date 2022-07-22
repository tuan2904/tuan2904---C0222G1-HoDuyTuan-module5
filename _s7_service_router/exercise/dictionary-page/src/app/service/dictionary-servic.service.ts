import {Injectable} from '@angular/core';
import {IWord} from '../iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryServicService {

  constructor() {
  }


  list: IWord[] = [
    {id: 1, word: 'hello', mean: 'Chao'}
  ];

  getAll() {
    return this.list;
  }

  findId(id) {
    return this.list.find(item => item.id = id);
  }

  updateProduct(product: IWord) {
    const index = this.list.findIndex(p => p.id === product.id);
    this.list[index] = product;
  }
}
