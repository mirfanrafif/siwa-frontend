import MenuMakanan from "./menu";

export interface Kasir {
    id: number;
    nama: string;
    username: string;
    level: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface TransaksiItem {
    id: number;
    userid: number;
    createdAt: Date;
    updatedAt: Date;
    UserId: number;
    kasir: Kasir;
}

export interface TransaksiDetailItem {
    id: number;
    userid: number;
    createdAt: Date;
    updatedAt: Date;
    UserId: number;
    details: Detail[];
    kasir: Kasir;
}

export interface Detail {
    id: number;
    transaksi_id: number;
    menu_id: number;
    jumlah: number;
    createdAt: Date;
    updatedAt: Date;
    menu: MenuMakanan;
}