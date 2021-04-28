import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  characters = [
    { name: 'Luke', side: '' },
    { name: 'darth', side: '' }
  ];
  selectedTab='all';

  constructor() { }

  ngOnInit(): void {
  }

  getCharacters()
  {
    if(this.selectedTab==='all')
    return this.characters.slice();

    return this.characters.filter((char)=>{
      return char.side===this.selectedTab;
    });
  }

  onChangeTab(newTab)
  {
    this.selectedTab = newTab;
  }

}
