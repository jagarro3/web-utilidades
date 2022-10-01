import { Injectable } from '@angular/core';
import { Adapter } from '../../../core/adapter/adapter';

export class ConstructorInfo {
  public season: number;
  public teamId: number;
  public teamName: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConstructorInfoAdapter implements Adapter<ConstructorInfo> {
  adapt(item: any): ConstructorInfo {
    const constructorInfo = new ConstructorInfo();
    constructorInfo.season = item.season;
    constructorInfo.teamId = item.team_id;
    constructorInfo.teamName = item.team_name;

    return constructorInfo;
  }
}
