<template>
  <view class="container">
    <status-bar background-color="black" bar-style="light-content" />
    <text class="text-cadastro">Cadastrar Usuários</text>
    <text class="label">Nome</text>
    <text-input class="input"/>
    <text class="label">Celular</text>
    <text-input class="input"/>
    <text class="label">Email</text>
    <text-input class="input"/>
    <text class="label">Senha</text>
    <text-input class="input"/>
    <view class="itens"> 
      <button class="btn-entrar" title="Cadastrar" color="black" @press="changeRoute"></button>
    </view>
  </view>
</template>

<script>
export default {
    props: {
    navigation: { type: Object }
  },
  methods: {
    changeRoute() {
      this.navigation.navigate('Details');
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
