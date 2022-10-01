import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../../core/data-service/api.service';
import { BaseEntityService } from './base-entity.service';
import { EpubInfoModel } from '../models/epub-info.model'

const baseRoute: string = 'epub/';

@Injectable({
  providedIn: 'root',
})
export class EpubService extends BaseEntityService<any> {
  constructor(public apiService: ApiService) {
    super(apiService, baseRoute);
  }

  public getWordsMostCommon(file: Blob, numWords: number): Observable<any> {
    let formData = new FormData();
    formData.append('file', file);

    const params = new HttpParams().append('numWords', numWords.toString());

    return this.apiService
      .postBlob(this.baseRoute + 'words-most-common', formData, params)
      .pipe(map((data: any) => data));
  }

  public getBigramsMostCommon(file: Blob, numWords: number): Observable<any> {
    let formData = new FormData();
    formData.append('file', file);

    const params = new HttpParams().append('numWords', numWords.toString());

    return this.apiService
      .postBlob(this.baseRoute + 'bigrams-most-common', formData, params)
      .pipe(map((data: any) => data));
  }

  public getTigramsMostCommon(file: Blob, numWords: number): Observable<any> {
    let formData = new FormData();
    formData.append('file', file);

    const params = new HttpParams().append('numWords', numWords.toString());

    return this.apiService
      .postBlob(this.baseRoute + 'tigrams-most-common', formData, params)
      .pipe(map((data: any) => data));
  }

  public getInfo(file: Blob): Observable<EpubInfoModel> {
    let formData = new FormData();
    formData.append('file', file);
    return this.apiService
      .postBlob(this.baseRoute + 'info', formData)
      .pipe(map((data: any) => data));
  }
}
