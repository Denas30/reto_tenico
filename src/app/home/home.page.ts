import { Component, OnInit } from '@angular/core';
import { NewApiService } from '../service/new-api.service';
import { IArticles, INewApi } from '../interfaces/interface-newApi';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  articles: INewApi[] = [];

  constructor(private newApiService: NewApiService) {}

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    await this.newApiService.getData().subscribe((dataApi) => {
      this.articles = dataApi;
      console.log('llego', this.articles);
    });
  }

  orderDesen() {
    const order = this.articles.sort();
    console.log('evento', order);
    // const order =   art.articles.sort();
    // console.log('ordenar', order);
  }
}
