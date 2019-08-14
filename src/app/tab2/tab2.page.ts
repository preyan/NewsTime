import { Component } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  masterArray: any;
  constructor(private newsService: NewsService) {}

  ionViewWillEnter() {
    this.newsService.getData('top-headlines?country=in').subscribe(data => {
      this.masterArray = data['articles'];
    })
  }
}
