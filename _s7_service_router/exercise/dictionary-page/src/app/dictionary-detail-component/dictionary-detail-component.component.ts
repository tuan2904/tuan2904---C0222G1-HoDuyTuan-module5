import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {DictionaryServicService} from '../service/dictionary-servic.service';
import {IWord} from '../iword';

@Component({
  selector: 'app-dictionary-detail-component',
  templateUrl: './dictionary-detail-component.component.html',
  styleUrls: ['./dictionary-detail-component.component.css']
})
export class DictionaryDetailComponentComponent implements OnInit {
  detail: FormGroup;
  dic: IWord;

  constructor(private activatedRoute: ActivatedRoute,
              private dictionary: DictionaryServicService) {
  }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.dic = this.dictionary.findId(id);
  }


}
