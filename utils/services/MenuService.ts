import { useCallback } from "react";
import { EXT_API } from "../constant";
import MenuMakanan from "../models/menu";

export const MenuService = () => {
  const getMenu = useCallback(async () => {
    return fetch(`${EXT_API}/menu`).then((res: Response) => {
      return res.json() as Promise<MenuMakanan[]>;
    });
  }, []);

  const addMenu = useCallback(async (values) => {
    return fetch(`${EXT_API}/menu`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    }).then((res) => res.json());
  }, []);

  const detailMenu = useCallback(async (id) => {
    return fetch(`${EXT_API}/menu/${id}`).then((res: Response) => {
      return res.json() as Promise<MenuMakanan>;
    });
  }, []);

  const updateMenu = useCallback(async (id, values) => {
    return fetch(`${EXT_API}/menu/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    }).then((res) => res.json());
  }, []);


  return { getMenu, addMenu, detailMenu, updateMenu };
};
