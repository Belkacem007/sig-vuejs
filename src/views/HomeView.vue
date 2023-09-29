<script setup lang="ts">

import CardUser from '../components/CardUser.vue'

import { onMounted, ref } from 'vue'
import { useFetch } from '@vueuse/core'

const users = ref([])

onMounted(async () => {
  try {
    const { data } = await useFetch('https://randomuser.me/api/1.4/?results=100').json()
    users.value = data.value.results

  } catch (error) {
    console.error(error)
  }
})





</script>

<template>
  <v-app id="app">
    <v-container>
      <v-row align="center">
        <v-col cols="6">
          <div v-if="users.length === 0">
            <v-progress-circular :size="30" :width="4" color="black" indeterminate></v-progress-circular>
          </div>
          <h1 v-else class="text-h4">
            {{ users.length }} Contact(s)
          </h1>
        </v-col>
        <v-col>
          <v-text-field hide-details="auto" color="primary" label="Search..." prepend-inner-icon="mdi-magnify"
            variant="outlined"></v-text-field>
        </v-col>
      </v-row>


      <v-row>
        <v-col v-for="(user, index) in users" :key="index" cols="12" sm="6" md="3" lg="3" xl="2">
          <CardUser :user=user />
          <!-- <v-skeleton-loader :loading="true" :elevation="2" type="card">
            
          </v-skeleton-loader> -->
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
