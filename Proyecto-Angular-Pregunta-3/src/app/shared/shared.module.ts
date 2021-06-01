import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MAT_DATE_LOCALE, MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AlertComponent } from './components/alert/alert.component';



const materialModules = [
  MatProgressSpinnerModule,
  MatInputModule,
  MatDialogModule,
  MatNativeDateModule,
  MatGridListModule,
  MatPaginatorModule,
  MatTableModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonToggleModule,
  MatTabsModule,
  MatMenuModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatButtonModule,
  MatTooltipModule,
  MatSelectModule,
  MatRadioModule,
  MatCheckboxModule,
  MatRippleModule,
  MatCardModule,
  MatExpansionModule,
  MatListModule,
  MatAutocompleteModule,
  MatSlideToggleModule,
];


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    ...materialModules,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    AlertComponent,
    ...materialModules
  ]
})
export class SharedModule {
}
