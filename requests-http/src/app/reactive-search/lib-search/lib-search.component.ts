import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap, map, filter, distinctUntilChanged, debounce, debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-lib-search',
  templateUrl: './lib-search.component.html',
  styleUrls: ['./lib-search.component.scss']
})
export class LibSearchComponent implements OnInit {

  queryField = new FormControl();
  // tslint:disable-next-line: quotemark
  readonly SEARCH_URL = "https://api.cdnjs.com/libraries";
  results$: Observable<any>;
  total: number;
  readonly FIELDS = 'name,filename,version,homepage';

  constructor(
    private http: HttpClient,
  ) { }

  /**
   * a ordem dos operadores faz diferente, é importante entender o papel de cada um.
   */
  ngOnInit() {
    this.results$ = this.queryField.valueChanges
      .pipe(
        map(value => value.trim()),
        filter(value => value.length > 1),
        debounceTime(200),
        distinctUntilChanged(),
        // tap(value => console.log(value)),
        switchMap(value => this.http.get(this.SEARCH_URL, {
          params: {
            search: value,
            fields: this.FIELDS
          }
        })),
        tap((res: any) => this.total = res.total),
        map((res: any) => res.results)
      );
  }

  onSearch() {
    console.log(this.queryField.value);
    const fields = 'name,filename,version,homepage';
    let value = this.queryField.value;
    // tslint:disable-next-line: no-conditional-assignment
    if (value && (value = value.trim()) !== '') {

      const params_ = {
        search: value,
        fields: fields
      };
      // evitar concatenar string, sempre usar HttpParams
      let params = new HttpParams();
      params = params.set('search', value);
      params = params.set('fields', fields);

      this.results$ = this.http.get(this.SEARCH_URL, { params })
        .pipe(
          tap((res: any) => this.total = res.total),
          map((res: any) => res.results)
        );

    }

  }

}
