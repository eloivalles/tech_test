import { Component, Input } from "@angular/core";
import { MenuDataNode } from "@core/models/menu.model";
import { MenuService } from "@core/services/menu.service";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent {
  @Input() data: MenuDataNode[] = [];
  @Input() trigger: MenuDataNode;
  @Input() isRootNode = false;

  constructor(private readonly service: MenuService) {}

  getData(node: MenuDataNode): void {
    this.data = this.service.getChildren(node);
  }

  isExpandable(node: MenuDataNode): boolean {
    return this.service.isExpandable(node);
  }
}
