import { Injectable } from '@angular/core';
import { mockNotesByPatient } from '@mocks/notes.mock';
import { BehaviorSubject, delay, firstValueFrom } from 'rxjs';
import { Notes, PatientInfo } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  public fetchPatientInfo(): PatientInfo[] {
    // Simulates GET call to endpoint
    return [
      {
        id: '111',
        name: 'test patient',
      },
    ];
  }

  public async getPatientNotes(patientId: string): Promise<Notes[] | null> {
    const patientData = mockNotesByPatient.find((list) => list.patientId === patientId);
    // Simulates GET call to endpoint. Done with observable to add a delay so user can see loader
    const stream = new BehaviorSubject<Notes[] | null>(patientData ? patientData.notes : null).pipe(
      delay(1600),
    );
    return firstValueFrom(stream);
  }
}
