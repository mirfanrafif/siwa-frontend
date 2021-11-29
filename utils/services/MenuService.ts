import { useCallback } from "react";
import { EXT_API } from "../constant";
import MenuMakanan from "../models/menu";
import { AuthState } from "../reduxes/auth/AuthReducer";

export const MenuService = () => {

  const getMenu = async () => {
    return fetch(`${EXT_API}/menu`)
      .then((res: Response) => {
        if (res.status == 200) {
          return res.json() as Promise<MenuMakanan[]>;
        } else {
          return Promise.reject(res.statusText)
        }
      });
  }

  const addMenu = async (values) => {
    return fetch(`${EXT_API}/menu`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    }).then((res) => res.json());
  }

  const detailMenu = async (id) => {
    return fetch(`${EXT_API}/menu/${id}`).then((res: Response) => {
      return res.json() as Promise<MenuMakanan>;
    });
  }

  const updateMenu = async (id, values) => {
    return fetch(`${EXT_API}/menu/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    }).then((res) => res.json());
  }


  return { getMenu, addMenu, detailMenu, updateMenu };
};
