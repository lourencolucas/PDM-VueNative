<template>
  <view class="container">
    <status-bar background-color="black" bar-style="light-content" />
    <text class="text-cadastro">Cadastrar Usuários</text>
    <text class="label">Nome</text>
    <text-input class="input" placeholder="Digite seu Nome" />
    <text class="label">Celular</text>
    <text-input class="input" placeholder="Digite seu Celular" />
    <text class="label">Email</text>
    <text-input class="input" placeholder="Digite seu E-mail" />
    <text class="label">Senha</text>
    <text-input class="input" placeholder="Digite seu Senha" />
    <view class="itens">
      <button
        class="btn-entrar"
        title="Cadastrar"
        color="black"
        @press="cadStatus"
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
        email: "userdemo@demo.com.br",
        celular: "8298807555",
        senha: "123456",
      },
    };
  },
  props: {
    navigation: { type: Object },
  },
  methods: {
    changeRoute() {
      this.navigation.navigate("Details");
    },
    cadStatus() {
      axios
        .post("https://us-central1-uncisal.cloudfunctions.net/users-create", {
          usuario: {
            nome: "Rony",
            celular: "8298807555",
            email: "userdemo@demo.com.br",
            senha: "123456",
            sexo: "Masculino",
            idade: "30",
          },
        })
        .then(function (response) {
          console.log(response);
          alert(response.status);
        })
        .catch(function (error) {
          console.log(error);
          alert(error);
        });
    },
    statusCad() {
      alert("Verificar Status 200 ou 500!");
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
.text-cadastro {
  margin: 10%;
  font-size: 30px;
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
