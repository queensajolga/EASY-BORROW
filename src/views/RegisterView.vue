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
      <v-spacer></v-spacer>

      <v-container>
        <v-row class="d-flex justify-center my-6">
          <v-col cols="12" md="6" class="d-flex justify-center align-center">
            <v-img :width="400" aspect-ratio="16/0" cover src="./images/EBlogo.png"></v-img>
          </v-col>
        </v-row>
      </v-container>
      <h5 class="text-center" style="font-size: 40px">Welcome to</h5>
      <p class="text-center" style="font-size: 60px">EASY BORROW</p>
      <p class="text-center" style="font-size: 20px">Share smarter, earn faster.</p>

      <v-main>
        <v-container>
          <v-row class="d-flex">
            <v-col cols="12" md="7">
              <v-text-field
                label="Firstname"
                variant="outlined"
                bg-color="yellow-darken-1 rounded-lg"
              >
              </v-text-field>
              <v-text-field
                label="Lastname"
                variant="outlined"
                bg-color="yellow-darken-1 rounded-lg"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" md="5">
              <v-text-field
                label="Address"
                variant="outlined"
                bg-color="yellow-darken-1 rounded-lg"
              >
              </v-text-field>
              <v-text-field
                label="Contact Number"
                variant="outlined"
                bg-color="yellow-darken-1 rounded-lg"
              >
              </v-text-field>
            </v-col>
            <v-col>
              <v-text-field label="Email" variant="outlined" bg-color="yellow-darken-1 rounded-lg">
              </v-text-field>
              <v-text-field
                label="Password"
                variant="outlined"
                type="password"
                bg-color="yellow-darken-1 rounded-lg"
              >
              </v-text-field>
              <v-text-field
                label="Confirm Password"
                type="password"
                variant="outlined"
                bg-color="yellow-darken-1 rounded-lg"
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-btn
            size="large"
            color="yellow-lighten-2"
            class="font-weight-bold mt-4 rounded-pill"
            type="submit"
            block
            >REGISTER</v-btn
          >

          <v-divider class="my-5"></v-divider>

          <h5 class="text-center" style="font-size: larger">
            Already have an account?<RouterLink to="/"> Click here to LOGIN</RouterLink>
          </h5>
        </v-container>
      </v-main>
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
