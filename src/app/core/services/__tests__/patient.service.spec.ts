import { mockNotesByPatient } from '@mocks/notes.mock';
import { PatientService } from '../patient.service';

describe('PatientService', () => {
  let sut: PatientService;

  beforeEach(() => {
    sut = new PatientService();
  });

  test('should be created', () => {
    expect(sut).not.toBeNull();
  });

  describe('fetchPatientInfo()', () => {
    test('should return userInfo', () => {
      const expectedPatientInfo = sut.fetchPatientInfo();

      expect(expectedPatientInfo).toStrictEqual([
        {
          id: '111',
          name: 'test patient',
        },
      ]);
    });
  });

  describe('getPatientNotes()', () => {
    test('should return a valid response when existing patient id', async () => {
      const actualResponse = await sut.getPatientNotes('111');

      expect(actualResponse).toStrictEqual(mockNotesByPatient[0].notes);
    });

    test('should return null when non existing patient id', async () => {
      const actualResponse = await sut.getPatientNotes('');

      expect(actualResponse).toBe(null);
    });
  });
});
