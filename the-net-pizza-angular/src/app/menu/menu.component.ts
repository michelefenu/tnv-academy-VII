import { Component, OnDestroy, OnInit } from '@angular/core';
import { Piatto } from '../@models/menu';
import { MenuService } from '../@services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  piattiAntipasti: Piatto[] = [];
  piattiPrimi: Piatto[] = [];
  piattiDolci: Piatto[] = [];

  constructor(private menuService: MenuService) {
  }

  ngOnInit(): void {
    const getMenuObservable = this.menuService.getMenu()
    
    getMenuObservable.subscribe({
      next: (piatti) => {
        this.piattiAntipasti = piatti.filter(x => x.category === 'antipasti');
        this.piattiPrimi = piatti.filter(x => x.category === 'primi');
        this.piattiDolci = piatti.filter(x => x.category === 'dolci');
      }
    });
  }
}
