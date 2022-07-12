import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Notes } from '@core/models/user.model';
import { PatientService } from '@core/services/patient.service';

@Component({
  selector: 'app-patient-notes',
  templateUrl: './patient-notes.component.html',
  styleUrls: ['./patient-notes.component.scss'],
})
export class PatientNotesComponent implements OnInit {
  public notes: Notes[] | null = null;
  public state: 'loading' | 'loaded' | 'error' = 'loading';
  private readonly patientId: string;

  public constructor(
    private readonly patientService: PatientService,
    private readonly actRoute: ActivatedRoute,
  ) {
    this.patientId = this.actRoute.snapshot.paramMap.get('patientId') ?? '';
    if (this.patientId === '') {
      throw new Error('can not get patient id');
    }
  }

  public async ngOnInit(): Promise<void> {
    this.state = 'loading';
    this.notes = await this.patientService.getPatientNotes(this.patientId);
    this.sortNotes();
    this.state = this.notes ? 'loaded' : 'error';
  }

  public toogleflag(noteId: string): void {
    if (this.notes) {
      const index = this.notes.findIndex((note) => note.id === noteId);
      if (index === -1) {
        throw new Error('unable to unflag note');
      }
      this.notes[index].isFlagged = !this.notes[index].isFlagged;
      this.sortNotes();
    }
  }

  private sortNotes(): void {
    if (this.notes) {
      const flagedNotes = this.notes.filter((note) => note.isFlagged);
      const unflagedNotes = this.notes.filter((note) => !note.isFlagged);

      flagedNotes.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
      unflagedNotes.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
      this.notes = [...flagedNotes, ...unflagedNotes];
    }
  }
}
