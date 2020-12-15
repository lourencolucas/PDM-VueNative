<template>
  <app-navigator> </app-navigator>
</template>

<script>
import { createAppContainer, createStackNavigator } from "vue-native-router";

import HomeScreen from "./screens/Login.vue";
import AddScreen from "./screens/Cadastrar.vue";
import DetailsScreen from "./screens/MeusDados.vue";
import Recuperar from "./screens/Recuperar.vue";
import Painel from "./screens/Painel.vue";

const StackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Add: AddScreen,
    Details: DetailsScreen,
    Recuperar: Recuperar,
    Painel: Painel,
  },
  {
    initialRouteName: "Home",
  }
);

const AppNavigator = createAppContainer(StackNavigator);

export default {
  components: { AppNavigator },
};
</script>
