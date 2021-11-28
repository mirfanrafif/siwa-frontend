import Swal from "sweetalert2";
import { EXT_API } from "../constant";
import User from '../models/User'


export default function TransaksiService() {
    const addTransaksi = async (transaksiData) => {
        return fetch(`${EXT_API}/transaksi`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(transaksiData)
        }).then((res: Response) => {
            return res.json()
        }, err => {
            Swal.fire({ title: 'Gagal Login', text: 'Gagal melakukan login : ' + err, icon: 'error' })
        })
    }

    return { addTransaksi }
}