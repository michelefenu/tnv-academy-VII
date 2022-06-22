import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Piatto } from '../@models/menu';
import { MenuService } from '../@services/menu.service';

@Component({
  selector: 'app-edit-piatto',
  templateUrl: './edit-piatto.component.html',
  styleUrls: ['./edit-piatto.component.scss'],
})
export class EditPiattoComponent implements OnInit {
  piatto: Partial<Piatto> = {};
  isEditMode = false;
  piattoId: number;

  constructor(
    private menuService: MenuService,
    private router: Router,
    activatedRoute: ActivatedRoute
  ) {
    this.piattoId = activatedRoute.snapshot.params['piattoId'];
    this.isEditMode = !!this.piattoId;
  }

  ngOnInit(): void {
    if (this.isEditMode) {
      this.menuService.getPiatto(this.piattoId).subscribe({
        next: (res) => (this.piatto = res),
      });
    }
  }

  onSubmit(form: NgForm) {
    form.control.markAllAsTouched();
    if (form.valid) {
      if (this.isEditMode) {
        this.menuService.editPiatto(this.piattoId, form.value).subscribe({
          next: (res) => {
            console.log(res);
            this.router.navigateByUrl('/');
          },
        });
      } else {
        this.menuService.addPiatto(form.value).subscribe({
          next: (res) => {
            console.log(res);
            this.router.navigateByUrl('/');
          },
        });
      }
    }
  }
}
