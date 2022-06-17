import { Component, Input, OnInit } from '@angular/core';
import { Piatto } from 'src/app/@models/menu';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() piatto: Partial<Piatto> = {};

  constructor() { }

  ngOnInit(): void {
    
  }

}
