import { MenuDataNode } from "@core/models/menu.model";
import { MenuService } from "../menu.service";

describe("MenuService", () => {
  let sut: MenuService;

  beforeEach(() => {
    sut = new MenuService();
  });

  test("should be created", () => {
    expect(sut).not.toBeNull();
  });

  describe("methods", () => {
    test("getRootNodes - should return root nodes", () => {
      const result = sut.getRootNodes();
      const expected: MenuDataNode[] = [
        {
          name: "Bebidas",
          id: 1,
          parentId: null,
          isExpandable: true,
        },
        {
          name: "Comidas",
          id: 2,
          parentId: null,
          isExpandable: false,
        },
        {
          name: "Limpieza",
          id: 3,
          parentId: null,
          isExpandable: false,
        },
      ];

      expect(result).toStrictEqual(expected);
    });

    test("getChildren - should return chlidren nodes", () => {
      const node = {
        name: "Gaseosas",
        id: 100,
        parentId: 1,
        isExpandable: true,
      };
      const result = sut.getChildren(node);
      const expected: MenuDataNode[] = [
        {
          name: "Con Alcohol",
          id: 1010,
          parentId: 100,
          isExpandable: false,
        },
        {
          name: "Sin Alcohol",
          id: 1009,
          parentId: 100,
          isExpandable: true,
        },
      ];

      expect(result).toStrictEqual(expected);
    });
  });
});
