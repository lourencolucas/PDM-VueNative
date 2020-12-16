const axios = require('axios');

export default class LoginUser {
    static async loginUser(usuario){
        const {status} = await axios.post('https://us-central1-uncisal.cloudfunctions.net/users-login', {
            usuario: {
                email: usuario.email,
                senha: usuario.senha,
            }
        })

        if(status == 200) {
            console.log(status);
            return true;
        } else {
            console.log(status);
            return false;
        }
    }
}