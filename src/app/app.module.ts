import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
// import { AppRoutingModule } from './app-routing.module';

import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MenuService } from "./core/services/menu.service";
import { MenuComponent } from './components/menu/menu.component';

export const MATERIAL_MODULES = [
  MatIconModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
];

@NgModule({
  declarations: [AppComponent, MenuComponent],
  imports: [BrowserModule, BrowserAnimationsModule, ...MATERIAL_MODULES],
  providers: [MenuService],
  bootstrap: [AppComponent],
})
export class AppModule {}
