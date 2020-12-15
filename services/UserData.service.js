import axios from "axios";

export default class UserService {
    static async getDados() {
        const {status, data} = axios.post("https://us-central1-uncisal.cloudfunctions.net/users-create");

         return data;
    }
}