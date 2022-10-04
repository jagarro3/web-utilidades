import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { ConstructorStanding } from '../../shared/models/formula-one/constructor-standing.model';
import { FormulaOneService } from '../../shared/services/formula-one/formula-one.service';

@Component({
  templateUrl: './formula-one.component.html',
  styleUrls: ['./formula-one.component.scss'],
})
export class FormulaOneComponent {
  private constructorStandingsSubscription: Subscription;
  public constructorStandings: ConstructorStanding[];

  constructor(private formulaOneService: FormulaOneService, public sanitizer: DomSanitizer) {
    this.getConstructorStandings();
  }

  private getConstructorStandings() {
    this.constructorStandingsSubscription ? this.constructorStandingsSubscription.unsubscribe() : null;

    this.constructorStandingsSubscription = this.formulaOneService.getConstructorStandings().subscribe(
      (data) => ((this.constructorStandings = data), console.log(this.constructorStandings)),
      (error) => console.error(error)
    );
  }
}
