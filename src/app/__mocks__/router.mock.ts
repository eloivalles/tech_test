import { UrlTree } from '@angular/router';

export class MockRouter {
  public async navigate(): Promise<boolean> {
    return true;
  }

  public parseUrl(path: string): UrlTree {
    return fakeUrlTree(path);
  }
}

function fakeUrlTree(url: string): UrlTree {
  return ({ actualPath: url } as any) as UrlTree;
}
