import axios from "axios";

export default class UserService {
    static async login() {
        //  const {data} = await axios.post("https://us-central1-uncisal.cloudfunctions.net/users-login");
         const {status, data} = axios.post("https://us-central1-uncisal.cloudfunctions.net/users-login",{usuario:{"nome":"Rony","celular":8298807555,"email":"userdemo@demo.com.br","senha":123456,"sexo":"Masculino","idade":30}});
         console.log(status);
         return data;
    }
}