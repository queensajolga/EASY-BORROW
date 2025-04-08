<script setup>
import { ref } from 'vue'

const theme = ref('light')
</script>

<template>
  <v-responsive class="border rounded">
    <v-app
      :theme="theme"
      :style="{
        backgroundImage: `url('/public/images/background.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }"
    >
      <v-container>
        <v-row class="d-flex justify-center my-6">
          <v-col cols="12" md="6" class="d-flex justify-center align-center">
            <h1 class="text-center" style="font-size: 40px">Welcome to Easy Borrow</h1>
          </v-col>
        </v-row>
        <p class="text-center">DASHBOARD</p>
      </v-container>
    </v-app>
  </v-responsive>
</template>

<style scoped>
.light-background {
  background-image: url('/public/images/background.jpg');
  background-size: cover;
  background-position: center;
}

.dark-background {
  background-image: url('/public/images/background.jpg');
  background-size: cover;
  background-position: center;
}
</style>
