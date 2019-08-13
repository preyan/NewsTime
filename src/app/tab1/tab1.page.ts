import { Component } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  masterArray: any;
  constructor(private newsService: NewsService) {}

  ionViewWillEnter() {
    this.newsService.getData('top-headlines?country=in').subscribe(data => {
      this.masterArray = data['articles'];
    })
  }
}
