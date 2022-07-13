import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MenuService } from "./core/services/menu.service";
import { MenuComponent } from "./components/menu/menu.component";

export const MATERIAL_MODULES = [MatButtonModule, MatMenuModule];

@NgModule({
  declarations: [AppComponent, MenuComponent],
  imports: [BrowserModule, BrowserAnimationsModule, ...MATERIAL_MODULES],
  providers: [MenuService],
  bootstrap: [AppComponent],
})
export class AppModule {}
