import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute } from '@angular/router';
import { Notes } from '@core/models/user.model';
import { PatientService } from '@core/services/patient.service';
import { MockActivatedRoute } from '@mocks/activated-route.mock';
import { PatientNotesComponent } from './patient-notes.component';

describe('PatientNotesComponent', () => {
  let component: PatientNotesComponent;
  let fixture: ComponentFixture<PatientNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientNotesComponent],
      imports: [MatCardModule, MatIconModule, MatButtonModule, MatProgressSpinnerModule],
      providers: [
        {
          provide: PatientService,
          useValue: { getPatientNotes: () => [] },
        },
        { provide: ActivatedRoute, useClass: MockActivatedRoute },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PatientNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).not.toBeNull();
  });

  describe('Sorting', () => {
    const note1: Notes = {
      id: 'aaa',
      coachName: 'John',
      content: '1',
      createdAt: new Date('1/1/2022'),
      isFlagged: false,
    };
    const note2: Notes = {
      id: 'bbb',
      coachName: 'Maria',
      content: '2',
      createdAt: new Date('1/4/2022'),
      isFlagged: true,
    };
    const note3: Notes = {
      id: 'ccc',
      coachName: 'Tom',
      content: '3',
      createdAt: new Date('2/2/2022'),
      isFlagged: false,
    };
    const notesMock: Notes[] = [note1, note2, note3];
    let service: PatientService;

    beforeEach(async () => {
      service = TestBed.inject(PatientService);
    });

    test('should sort notes by flag and date', async () => {
      service.getPatientNotes = jest.fn().mockResolvedValue(notesMock);
      await component.ngOnInit();
      expect(component.notes).toEqual([note2, note3, note1]);
    });
  });
});
