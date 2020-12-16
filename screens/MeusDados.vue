<template>
  <view class="container">
    <status-bar background-color="black" bar-style="light-content" />
    <text class="text-cadastro">Meus Dados</text>
    <text class="label">Nome</text>
    <text-input class="input" v-model="usuario.nome" />
    <text class="label">Celular</text>
    <text-input class="input" v-model="usuario.celular" />
    <text class="label">Email</text>
    <text-input class="input" v-model="usuario.email" />
    <text class="label">Senha</text>
    <text-input class="input" v-model="usuario.senha" />
    <view class="itens">
      <!-- <button
        class="btn-entrar"
        title="Editar"
        color="black"
        @press="changeRoute"
      ></button> -->
    </view>
  </view>
</template>

<script>
import GetUser from "../services/GetUser.service";

export default {
  async mounted() {
    const {usuario} = await GetUser.getDados();
    this.usuario = usuario;
    console.log(this.usuario);

  },
  data() {
    return {
      usuario: {
        nome: null,
        email: null,
        celular: null,
        senha: null,
      },
    };
  },
  props: {
    navigation: { type: Object },
  },
  methods: {
    changeRoute() {
      this.navigation.navigate("Home");
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
