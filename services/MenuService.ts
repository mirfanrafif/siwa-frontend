import { useCallback } from "react";
import { EXT_API } from "../constant";
import MenuMakanan from "../models/menu";

export const MenuService = () => {
  const getMenu = useCallback(async () => {
    return fetch(`${EXT_API}/api/makanan`).then((res: Response) => {
      return res.json() as Promise<MenuMakanan[]>;
    });
  }, []);

  const addMenu = useCallback(async (values) => {
    return fetch(`${EXT_API}/api/makanan`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    }).then((res) => res.json());
  }, []);

  return { getMenu, addMenu };
};
