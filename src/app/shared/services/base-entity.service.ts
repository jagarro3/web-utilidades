import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../../core/data-service/api.service';

@Injectable()
export abstract class BaseEntityService<T> {
  private route: string;

  constructor(protected apiService: ApiService, protected baseRoute: string) {
    this.route = baseRoute;
  }

  public getById(id: any): Observable<T> {
    return this.apiService.get(this.route + id).pipe(map((data: T) => data));
  }
}
