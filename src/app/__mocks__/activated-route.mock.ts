import { Params } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

export class MockActivatedRoute {
  public queryParams: Observable<Params> = new BehaviorSubject<Params>({});
  public snapshot = {
    paramMap: {
      get: (param: string) => ({}),
    },
  };
}
