import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MenuService } from '../@services/menu.service';

@Component({
  selector: 'app-add-piatto',
  templateUrl: './add-piatto.component.html',
  styleUrls: ['./add-piatto.component.scss']
})
export class AddPiattoComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {
    this.menuService.addPiatto(form.value).subscribe({
      next: (res) => console.log(res)
    });
  }
}
