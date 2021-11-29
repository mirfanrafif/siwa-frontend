import Swal from "sweetalert2";
import { EXT_API } from "../constant";
import { TransaksiDetailItem, TransaksiItem } from "../models/Transaksi";
import User from '../models/User'


export default function TransaksiService() {
    const addTransaksi = async (transaksiData) => {
        return fetch(`${EXT_API}/transaksi`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(transaksiData)
        }).then((res: Response) => {
            return res.json()
        })
    }

    const getTransaksi = async () => {
        return fetch(`${EXT_API}/transaksi`)
            .then((res: Response) => {
                if (res.status == 200) {
                    return res.json() as Promise<TransaksiItem[]>;
                } else {
                    return Promise.reject(res.statusText)
                }
            });
    }

    const findTransaksi = async (id) => {
        return fetch(`${EXT_API}/transaksi/${id}`)
            .then((res: Response) => {
                if (res.status == 200) {
                    return res.json() as Promise<TransaksiDetailItem>;
                } else {
                    return Promise.reject(res.statusText)
                }
            });
    }

    return { addTransaksi, getTransaksi, findTransaksi }
}