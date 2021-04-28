import { Component, OnInit } from '@angular/core';
import { StarWarService } from '../services/star-war.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  selectedTab='all';
  swcService : StarWarService;

  constructor(swService: StarWarService) { 
    this.swcService = swService;
  }

  ngOnInit(): void {
  }

  getCharacters()
  {
    return this.swcService.getCharacters(this.selectedTab);
  }

  onChangeTab(newTab)
  {
    this.selectedTab = newTab;
  }
}
