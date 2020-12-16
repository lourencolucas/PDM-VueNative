const axios = require('axios');

export default class CadUser {
    static async cadastarUser(usuario){
        const {status} = await axios.post('https://us-central1-uncisal.cloudfunctions.net/users-create', {
            usuario: {
                nome: usuario.nome,
                celular: usuario.celular,
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