import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPiattoComponent } from './edit-piatto/edit-piatto.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'menu/:piattoId', component: MenuDetailComponent },
  { path: 'editPiatto/:piattoId', component: EditPiattoComponent },
  { path: 'editPiatto', component: EditPiattoComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '', component: MenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
