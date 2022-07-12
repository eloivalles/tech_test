import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { PatientsListComponent } from './patients-list.component';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { PatientService } from '@core/services/patient.service';
import { MockRouter } from '@mocks/router.mock';

describe('PatientsListComponent', () => {
  let component: PatientsListComponent;
  let fixture: ComponentFixture<PatientsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientsListComponent],
      imports: [MatCardModule, MatIconModule, MatButtonModule, MatTableModule],
      providers: [
        {
          provide: PatientService,
          useValue: { fetchPatientInfo: () => [] },
        },
        { provide: Router, useClass: MockRouter },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(PatientsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).not.toBeNull();
  });

  test('should navigate to notes page', () => {
    const patientsService = TestBed.inject(PatientService);
    const router = TestBed.inject(Router);
    patientsService.fetchPatientInfo = jest.fn().mockReturnValue([
      {
        id: '111',
        name: 'test patient',
      },
    ]);
    jest.spyOn(router, 'navigate');

    component.ngOnInit();
    fixture.detectChanges();
    const editButtonElement = fixture.debugElement.queryAll(By.css('.patients__edit'));

    expect(editButtonElement.length).toEqual(1);
    editButtonElement[0].nativeElement.click();
    expect(router.navigate).toHaveBeenCalledWith(['patient-notes/111']);
  });
});
