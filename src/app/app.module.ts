import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {
  MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule, MatGridListModule,
  MatMenuModule, MatInputModule, MatFormFieldModule, MatSelectModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { CrewServiceComponent } from './crew-service/crew-service.component';

import { appRoutes } from './app.route';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CrewServiceComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule, MatGridListModule,
    MatMenuModule, MatInputModule, MatFormFieldModule, MatSelectModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatGridListModule, MatMenuModule,
    MatInputModule, MatFormFieldModule, MatSelectModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
