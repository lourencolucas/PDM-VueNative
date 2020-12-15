<template>
  <view class="container">
    <status-bar background-color="black" bar-style="light-content" />
    <text class="text-login">Login</text>
    <text class="label">E-mail</text>
    <text-input class="input" v-model="usuario.email" />
    <text class="label">Senha</text>
    <text-input class="input" v-model="usuario.senha" />
    <view class="itens">
      <text class="recuperar" @press="recuperarRoute">Esqueceu a senha?</text>
      <button
        class="btn-entrar"
        title="Login"
        color="black"
        @press="logarTeste"
      ></button>
    </view>
  </view>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      usuario: {
        nome: "Rony",
        celular: "8298807555",
        email: "userdemo@demo.com.br",
        senha: "123456",
        sexo: "Masculino",
        idade: "30",
      },
    };
  },
  props: {
    navigation: { type: Object },
  },
  methods: {
    changeRoute() {
      this.navigation.navigate("Painel");
    },
    logarTeste() {
      axios
        .post("https://us-central1-uncisal.cloudfunctions.net/users-login", {
          usuario: {
            nome: "Rony",
            celular: 8298807555,
            email: "userdemo@demo.com.br",
            senha: 123456,
            sexo: "Masculino",
            idade: 30,
          },
        })
        .then(function (response) {
          if (response = undefined) {
            alert("Status 500!");
          }else {
            alert("Status 200!");
        }
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      this.navigation.navigate("Painel");
    },
    recuperarRoute() {
      this.navigation.navigate("Recuperar");
    },
  },
};
</script>

<style>
.container {
  background-color: white;
  align-items: center;
  display: flex;
}

.itens {
  display: flex;
}

.recuperar {
  align-self: flex-start;
  margin: 15px 10px;
}

.label {
  align-self: flex-start;
}
.text-login {
  margin: 20%;
  font-size: 40px;
  color: black;
}

.input {
  width: 98%;
  margin: 10px 10px;
  border-radius: 1px;
  padding: 10px;
  border-width: 1;
}
</style>
