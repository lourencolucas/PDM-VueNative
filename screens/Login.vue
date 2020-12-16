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
    <text class="recuperar">Não é cadastrado?</text>
      <button
        class="btn-entrar"
        title="Cadastrar"
        color="black"
        @press="cadastrarRoute"
      ></button>
    </view>
  </view>
</template>

<script>
import LoginUser from "../services/Login.service";

export default {
  data() {
    return {
      usuario: {
        email: "userdemo@demo.com.br",
        senha: "minhasenha",
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
    cadastrarRoute() {
      this.navigation.navigate("Add");
    },
    recuperarRoute() {
      this.navigation.navigate("Recuperar");
    },
    async logarTeste() {
      const response = await LoginUser.loginUser(this.usuario);
      console.log(response);

      if (response == true) {
        alert("Login realizado com sucesso!");
        this.navigation.navigate("Painel");
      } else {
        alert("Dados incorretos!");
      }
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
  margin: 10%;
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
