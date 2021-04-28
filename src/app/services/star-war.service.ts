import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StarWarService {

  characters = [
    { name: 'Luke', side: '' },
    { name: 'darth', side: '' }
  ];

  constructor() { }
  
  getCharacters(selectedTab) {
    if (selectedTab === 'all')
      return this.characters.slice();
    return this.characters.filter((char) => {
      return char.side === selectedTab;
    });
  }
  
  onSideAssigned(updatedCharacter) {
    let pos = this.characters.findIndex((char) => {
      return char.name === updatedCharacter.name;
    });
    this.characters[pos].side = updatedCharacter.side;

  }
}
