import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { EpubInfoModel } from '../../shared/models/epub-info.model';
import { EpubService } from '../../shared/services/epub.service';

@Component({
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.scss'],
})
export class Dashboard1Component {
  private file: any;
  private wordMostCommonSubscription: Subscription;
  private wordBigramsCommonSubscription: Subscription;
  private wordTigramsCommonSubscription: Subscription;
  private epubInfoSubscription: Subscription;

  public numFreq: number = 10;

  public barChartLabelsWords: string[] = [];
  public barChartDataWords: any[] = [{ data: [] }];

  public barChartLabelsBigrams: string[] = [];
  public barChartDataBigrams: any[] = [{ data: [] }];

  public barChartLabelsTigrams: string[] = [];
  public barChartDataTigrams: any[] = [{ data: [] }];

  public epubInfo: EpubInfoModel;

  constructor(private epubService: EpubService, public sanitizer: DomSanitizer) {}

  private getWordsMostCommon(file: Blob) {
    this.wordMostCommonSubscription ? this.wordMostCommonSubscription.unsubscribe() : null;

    this.wordMostCommonSubscription = this.epubService.getWordsMostCommon(file, this.numFreq).subscribe(
      (data) => this.setDataChartWords(data),
      (error) => console.error(error)
    );
  }

  private getBigramsMostCommon(file: Blob) {
    this.wordBigramsCommonSubscription ? this.wordBigramsCommonSubscription.unsubscribe() : null;

    this.wordBigramsCommonSubscription = this.epubService.getBigramsMostCommon(file, this.numFreq).subscribe(
      (data) => this.setDataChartBigrams(data),
      (error) => console.error(error)
    );
  }

  private getTigramsMostCommon(file: Blob) {
    this.wordTigramsCommonSubscription ? this.wordTigramsCommonSubscription.unsubscribe() : null;

    this.wordTigramsCommonSubscription = this.epubService.getTigramsMostCommon(file, this.numFreq).subscribe(
      (data) => this.setDataChartTigrams(data),
      (error) => console.error(error)
    );
  }

  private getInfo(file: Blob) {
    this.epubInfoSubscription ? this.epubInfoSubscription.unsubscribe() : null;

    this.epubInfoSubscription = this.epubService.getInfo(file).subscribe(
      (data) => (this.epubInfo = data),
      (error) => console.error(error)
    );
  }

  private setDataChartWords(data: any): void {
    data.forEach((element) => {
      this.barChartLabelsWords.push(element[0]);
      this.barChartDataWords[0].data.push(element[1]);
    });
  }

  private setDataChartBigrams(data: any): void {
    data.forEach((element) => {
      this.barChartLabelsBigrams.push(element[0]);
      this.barChartDataBigrams[0].data.push(element[1]);
    });
  }

  private setDataChartTigrams(data: any): void {
    data.forEach((element) => {
      this.barChartLabelsTigrams.push(element[0]);
      this.barChartDataTigrams[0].data.push(element[1]);
    });
  }

  public onFileChange(fileList: FileList) {
    this.clearData();

    if (fileList.length > 0 || this.file != null) {
      this.file = fileList[0] ?? this.file;
      this.getInfo(this.file);
      this.getWordsMostCommon(this.file);
      this.getBigramsMostCommon(this.file);
      this.getTigramsMostCommon(this.file);
    }
  }

  private clearData() {
    this.barChartLabelsWords = [];
    this.barChartDataWords[0].data = [];
    this.barChartLabelsBigrams = [];
    this.barChartDataBigrams[0].data = [];
    this.barChartLabelsTigrams = [];
    this.barChartDataTigrams[0].data = [];
    this.epubInfo = undefined;
  }
}
