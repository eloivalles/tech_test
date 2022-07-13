import { TestBed } from "@angular/core/testing";
import { MatMenuModule } from "@angular/material/menu";
import { AppComponent } from "./app.component";
import { MenuComponent } from "./components/menu/menu.component";

describe("AppComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatMenuModule],
      declarations: [AppComponent, MenuComponent],
    }).compileComponents();
  });

  test("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app).not.toBeNull();
  });
});
