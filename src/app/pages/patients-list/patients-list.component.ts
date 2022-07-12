import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PatientService } from '@core/services/patient.service';
import { PatientInfo } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss'],
})
export class PatientsListComponent implements OnInit {
  public readonly patients: MatTableDataSource<PatientInfo>;
  public displayedColumns: string[] = ['name', 'action'];

  public constructor(
    private readonly userService: PatientService,
    private readonly router: Router,
  ) {
    this.patients = new MatTableDataSource();
  }

  public ngOnInit(): void {
    this.patients.data = [...this.userService.fetchPatientInfo()];
  }

  public async goToNotes(patientId: string): Promise<void> {
    await this.router.navigate([`patient-notes/${patientId}`]);
  }
}
