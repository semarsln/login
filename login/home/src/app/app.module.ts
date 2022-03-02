import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignComponent } from './components/sign/sign.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Route } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { GeneratepasswordComponent } from './components/generatepassword/generatepassword.component';

import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SidebarModule } from 'ng-sidebar';
import { MatCardModule } from '@angular/material/card';

import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDrawerContainer } from '@angular/material/sidenav';

const routers: Route[] = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: SignComponent,
  },

  {
    path: 'generatepassword',
    component: GeneratepasswordComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    SignComponent,
    LoginComponent,

    GeneratepasswordComponent,
  ],
  imports: [
    MatDrawerContainer,
    MatSidenavModule,
    BrowserModule,
    MatSlideToggleModule,
    MatTabsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routers),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialFileInputModule,
    MatMenuModule,
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,

    MatBadgeModule,
    SidebarModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatDividerModule,
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,

    MatBadgeModule,
    MatListModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatChipsModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
  ],
})
export class AppModule {
  ngOnInit(): void {}
}
