import React from "react";
import FormMenu from "../../../components/menu/FormMenu";
const defaultMenu = { id: 0, nama: "", harga: 0, url_gambar: "", jenis_menu: "" }

export default function Tambah() {

  return (
    <FormMenu menu={defaultMenu} />
  );
}
