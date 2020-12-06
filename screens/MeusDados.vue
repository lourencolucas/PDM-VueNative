<template>
  <view class="container">
    <status-bar background-color="black" bar-style="light-content" />
    <text class="text-cadastro">Meus Dados</text>
    <text class="label">Nome</text>
    <text-input class="input" v-model="nome"/>
    <text class="label">Celular</text>
    <text-input class="input" v-model="celular"/>
    <text class="label">Email</text>
    <text-input class="input" v-model="email"/>
    <text class="label">Senha</text>
    <text-input class="input" v-model="senha"/>
    <view class="itens">
      <button class="btn-entrar" title="Editar" color="black" @press="changeRoute"></button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      email: "lorenipsun@gmail.com",
      senha: "************",
      celular: "(82) 99999-9999",
      nome: "Loren Ipsun Et Past",
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
