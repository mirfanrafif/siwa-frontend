// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import React from "react";
import MenuMakanan from "../../models/menu";

const listMakanan: MenuMakanan[] = [
  {
    id: 1,
    nama: "Pecel",
    harga: 9000,
    url_gambar:
      "https://awsimages.detik.net.id/community/media/visual/2021/05/21/cara-membuat-sambal-pecel-madiun-1.jpeg?w=700&q=90",
  },
  {
    id: 2,
    nama: "Rawon",
    harga: 15000,
    url_gambar:
      "https://www.unileverfoodsolutions.co.id/dam/global-ufs/mcos/SEA/calcmenu/recipes/ID-recipes/rice-dishes/nasi-rawon/main-header.jpg",
  },
  {
    id: 3,
    nama: "Pecel",
    harga: 9000,
    url_gambar:
      "https://awsimages.detik.net.id/community/media/visual/2021/05/21/cara-membuat-sambal-pecel-madiun-1.jpeg?w=700&q=90",
  },
  {
    id: 4,
    nama: "Rawon",
    harga: 15000,
    url_gambar:
      "https://www.unileverfoodsolutions.co.id/dam/global-ufs/mcos/SEA/calcmenu/recipes/ID-recipes/rice-dishes/nasi-rawon/main-header.jpg",
  },
  {
    id: 5,
    nama: "Pecel",
    harga: 9000,
    url_gambar:
      "https://awsimages.detik.net.id/community/media/visual/2021/05/21/cara-membuat-sambal-pecel-madiun-1.jpeg?w=700&q=90",
  },
  {
    id: 6,
    nama: "Rawon",
    harga: 15000,
    url_gambar:
      "https://www.unileverfoodsolutions.co.id/dam/global-ufs/mcos/SEA/calcmenu/recipes/ID-recipes/rice-dishes/nasi-rawon/main-header.jpg",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<MenuMakanan>>
) {
  res.status(200).json(listMakanan);
}
