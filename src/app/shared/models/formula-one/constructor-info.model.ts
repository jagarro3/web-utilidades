import { Injectable } from '@angular/core';
import { Adapter } from '../../../core/adapter/adapter';

export class ConstructorInfo {
  public season: number;
  public team_id: number;
  public team_name: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConstructorInfoAdapter implements Adapter<ConstructorInfo> {
  adapt(item: any): ConstructorInfo {
    const constructorInfo = new ConstructorInfo();
    constructorInfo.season = item.season;
    constructorInfo.team_id = item.team_id;
    constructorInfo.team_name = item.team_name;

    return constructorInfo;
  }
}
