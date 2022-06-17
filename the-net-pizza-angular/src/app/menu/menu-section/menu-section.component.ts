import { Component, Input, OnInit } from '@angular/core';
import { Piatto } from 'src/app/@models/menu';

@Component({
  selector: 'app-menu-section',
  templateUrl: './menu-section.component.html',
  styleUrls: ['./menu-section.component.scss']
})
export class MenuSectionComponent implements OnInit {

  @Input() piatti: Piatto[] = [];
  @Input() sectionTitle: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
