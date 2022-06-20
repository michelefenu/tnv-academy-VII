import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Piatto } from '../@models/menu';
import { MenuService } from '../@services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  filterText: string = '';

  piatti: Piatto[] = [];
  piattiAntipasti: Piatto[] = [];
  piattiPrimi: Piatto[] = [];
  piattiDolci: Piatto[] = [];

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    const getMenuObservable = this.menuService.getMenu();

    getMenuObservable.subscribe({
      next: (piatti) => {
        this.piatti = piatti;
        this.applyFilter();
      },
    });
  }

  applyFilter() {
    const filteredPiatti = this.piatti.filter((x) =>
      x.title.toLowerCase().includes(this.filterText.toLowerCase()) ||
      x.description.toLowerCase().includes(this.filterText.toLowerCase()) ||
      x.ingredients.find(x => x.toLowerCase().includes(this.filterText.toLowerCase()))
    );

    this.piattiAntipasti = filteredPiatti.filter(
      (x) => x.category === 'antipasti'
    );
    this.piattiPrimi = filteredPiatti.filter((x) => x.category === 'primi');
    this.piattiDolci = filteredPiatti.filter((x) => x.category === 'dolci');
  }
}
