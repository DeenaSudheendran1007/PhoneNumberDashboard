import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatTableModule } from '@angular/material/table' 
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NumbersService } from './services/numbers.service';
import { PhoneDashboardComponent } from './components/phone-dashboard/phone-dashboard.component';
import { FilterComponent } from './components/filter/filter.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    AppComponent,
    PhoneDashboardComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    HttpClientModule,
    MatSortModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [
    provideAnimationsAsync(),
    NumbersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
