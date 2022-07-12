import { Component } from "@angular/core";
import { MenuDataNode } from "@core/models/menu.model";
import { MenuService } from "@core/services/menu.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  public data: MenuDataNode[];

  constructor(private readonly service: MenuService) {
    this.data = this.service.getRootNodes();
  }
}
