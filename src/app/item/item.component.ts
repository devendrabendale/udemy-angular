import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StarWarService } from '../services/star-war.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() character;
  swService: StarWarService;
  
  constructor(swcService: StarWarService) { 
    this.swService = swcService;
  }

  ngOnInit(): void {
  }

  onSideAssign(side)
  {
    this.swService.onSideAssigned({name: this.character.name, side: side});
  }
}
