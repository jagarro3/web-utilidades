import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConstructorStanding, ConstructorStandingAdapter } from '../../models/formula-one/constructor-standing.model';
import { FormulaOneApiService } from '../../../core/data-service/formula-one-api.service';

@Injectable({
  providedIn: 'root',
})
export class FormulaOneService {
  constructor(
    public formulaOneApiService: FormulaOneApiService,
    private constructorStandingAdapter: ConstructorStandingAdapter
  ) {}

  public getConstructorStandings(year: number = 2022): Observable<ConstructorStanding[]> {
    return this.formulaOneApiService
      .get(`constructors/standings/${year}`)
      .pipe(map((data: ConstructorStanding[]) => data.map((item) => this.constructorStandingAdapter.adapt(item))));
  }
}
