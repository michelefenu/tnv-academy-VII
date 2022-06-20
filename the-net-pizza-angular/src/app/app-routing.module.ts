import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPiattoComponent } from './add-piatto/add-piatto.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'menu/:piattoId', component: MenuDetailComponent },
  { path: 'addPiatto', component: AddPiattoComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '', component: MenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
