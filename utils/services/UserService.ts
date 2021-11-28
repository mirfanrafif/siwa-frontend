import Swal from "sweetalert2";
import { EXT_API } from "../constant";
import User from '../models/User'

export default function UserService() {
    const login = async (userData) => {
        console.log(userData)
        return fetch(`${EXT_API}/auth/login`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData)
        }).then((res: Response) => {
            return res.json() as Promise<User>;
        }, err => {
            Swal.fire({ title: 'Gagal Login', text: 'Gagal melakukan login : ' + err, icon: 'error' })
        })
    }

    return { login }
}