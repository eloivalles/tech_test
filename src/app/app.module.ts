import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PatientsListComponent } from './pages/patients-list/patients-list.component';
import { PatientNotesComponent } from './pages/patient-notes/patient-notes.component';
import { AppRoutingModule } from './app-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PatientService } from './core/services/patient.service';

export const MATERIAL_MODULES = [
  MatIconModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatButtonModule,
  MatCardModule,
];

@NgModule({
  declarations: [AppComponent, PatientsListComponent, PatientNotesComponent],
  imports: [AppRoutingModule, BrowserModule, BrowserAnimationsModule, ...MATERIAL_MODULES],
  providers: [PatientService],
  bootstrap: [AppComponent],
})
export class AppModule {}
