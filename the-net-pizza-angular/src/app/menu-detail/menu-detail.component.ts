import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Piatto } from '../@models/menu';
import { MenuService } from '../@services/menu.service';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.scss']
})
export class MenuDetailComponent implements OnInit {

  piatto: Partial<Piatto> = {};

  constructor(private activatedRoute: ActivatedRoute, private menuService: MenuService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['piattoId'];
    
    this.menuService.getPiatto(id).subscribe({
      next: (response) => this.piatto = response,
      error: (err) => console.log('Piatto non trovato!')
    })

  }
}
