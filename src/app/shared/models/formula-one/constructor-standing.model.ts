import { ConstructorInfo } from './constructor-info.model';
import { Injectable } from '@angular/core';
import { Adapter } from '../../../core/adapter/adapter';
import { ConstructorSettings, getSettings } from '../../../../assets/data/formula-one-settings';

export class ConstructorStanding {
  public points: number;
  public position: number;
  public season: number;
  public constructorInfo: ConstructorInfo;
  public settings: ConstructorSettings;
}

@Injectable({
  providedIn: 'root',
})
export class ConstructorStandingAdapter implements Adapter<ConstructorStanding> {
  adapt(item: any): ConstructorStanding {
    const constructorStanding = new ConstructorStanding();
    constructorStanding.points = item.points;
    constructorStanding.position = item.position;

    constructorStanding.constructorInfo = new ConstructorInfo();
    constructorStanding.constructorInfo.teamId = item.team_id;
    constructorStanding.constructorInfo.teamName = item.team_name;

    constructorStanding.settings = getSettings(item.season, item.team_id);

    return constructorStanding;
  }
}
