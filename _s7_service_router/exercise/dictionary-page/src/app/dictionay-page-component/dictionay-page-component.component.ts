import {Component, OnInit} from '@angular/core';
import {IWord} from '../iword';
import {DictionaryServicService} from '../service/dictionary-servic.service';

@Component({
  selector: 'app-dictionay-page-component',
  templateUrl: './dictionay-page-component.component.html',
  styleUrls: ['./dictionay-page-component.component.css']
})
export class DictionayPageComponentComponent implements OnInit {
  list: IWord[] = [];

  constructor(private dictionary: DictionaryServicService) {
  }

  ngOnInit(): void {
this.getAll();
  }
  getAll() {
    this.list = this.dictionary.getAll();
  }
}
