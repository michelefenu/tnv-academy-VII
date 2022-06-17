import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MenuSectionComponent } from './menu/menu-section/menu-section.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SiteHeaderComponent,
    FooterComponent,
    MenuComponent,
    MenuDetailComponent,
    ContactsComponent,
    MenuSectionComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
