import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './prod-list.component';
import { PracticeDirective } from './practice.directive';
import { UserLoginFormComponent } from './user-form.component';
import { ProductFormComponent } from './product-form.component';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule ],
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    PracticeDirective,
    UserLoginFormComponent,
    ProductFormComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
