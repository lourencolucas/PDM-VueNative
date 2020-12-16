<template>
  <view class="container">
    <status-bar background-color="black" bar-style="light-content" />
    <text class="text-cadastro">Cadastrar Usuários</text>
    <text class="label">Nome</text>
    <text-input class="input" v-model="usuario.nome" />
    <text class="label">Celular</text>
    <text-input class="input" v-model="usuario.celular" />
    <text class="label">Email</text>
    <text-input class="input" v-model="usuario.email" />
    <text class="label">Senha</text>
    <text-input class="input" v-model="usuario.senha" />
    <view class="itens">
      <button
        class="btn-entrar"
        title="Cadastrar"
        color="black"
        @press="cadStatus"
      ></button>
    <text class="label"></text>
      <button
        class="btn-entrar"
        title="Login"
        color="black"
        @press="loginRoute"
      ></button>
    </view>
  </view>
</template>

<script>
import CadUser from "../services/CadUser.service";

export default {
  data() {
    return {
      usuario: {
        nome: "Rony",
        email: "userdemo@demo.com.br",
        celular: "8298807555",
        senha: "minhasenha",
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
    loginRoute() {
      this.navigation.navigate("Home");
    },
    async cadStatus() {
      const response = await CadUser.cadastarUser(this.usuario);
      console.log(response);

      if (response == true) {
        alert("Dados enviados");
      } else {
        alert("Dados não enviados");
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
.text-cadastro {
  margin: 5%;
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
