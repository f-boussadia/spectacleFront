import { Component, OnInit } from '@angular/core';
//import { Spectacle } from '../spectacle';
import { SpectacleService } from '../spectacle.service';
import { Category } from '../category';

@Component({
  selector: 'app-spectacle',
  templateUrl: './spectacle.component.html',
  styleUrls: ['./spectacle.component.css']
})
export class SpectacleComponent implements OnInit {

  //spectacle: Spectacle = new Spectacle();
  message: string = "";
  //tabSpectacles: Spectacle[] = new Array;
  tabCategories: Category[] = new Array;
  constructor(private spectacleService: SpectacleService) { }

  ngOnInit() {
  }

  recupererListeCategories() {
    this.spectacleService.getCategoriessViaWsRest()
      .subscribe((tabCat) => { this.tabCategories = tabCat; }, (error) => { console.log(error); });
  }

}
