import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { RoleComponent } from './component/role/role.component';
import { SideNavComponent } from './component/side-nav/side-nav.component';
import { SharedadminServiceService } from './shared/sharedadmin-service.service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RoleComponent,
    SideNavComponent
  ],
  providers: [
    SharedadminServiceService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
