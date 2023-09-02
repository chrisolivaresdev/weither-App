import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs';

@Component({
  selector: 'search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="search">
      <input class="search__input" placeholder="Ciudad..." type="text" [formControl]="inputSearch">
    </div>
  `,
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() submitted = new EventEmitter<string>();

  inputSearch = new FormControl('')


  ngOnInit(): void {
    this.onChange()
  }


  private onChange():void {
      this.inputSearch.valueChanges
      .pipe(
        map( (search:string | null) => search ?? ''),
        map( (search:string) => search.trim()),
        debounceTime(1000),
        distinctUntilChanged(),
        filter( (search:string) => search !== ''),
        tap( (search:string) => this.submitted.emit(search))
       )
      .subscribe()
  }

}
