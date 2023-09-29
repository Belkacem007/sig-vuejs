<script setup lang="ts">

import CardUserDetail from "../components/CardUserDetail.vue"
import type { User } from "../components/CardUserDetail.vue"

import { onMounted, ref } from 'vue'
import { useFetch } from '@vueuse/core'
import { useRoute } from 'vue-router'

import { RouterLink } from 'vue-router'

const route = useRoute()

const userData = ref<User>()

onMounted(async () => {
    try {
        const { data } = await useFetch('https://randomuser.me/api/?' + route.params.id).json()
        userData.value = data.value.results[0]

    } catch (error) {
        console.error(error)
    }
})




</script>

<template>
    <v-container fluid style="transform-origin: center top 0px;">
        <v-row justify="center">
            <v-col cols="6">
                <RouterLink to="/">
                    <v-btn v-ripple variant="text" prepend-icon="mdi-arrow-left">
                        GO BACK TO CONTACT LIST
                    </v-btn>
                </RouterLink>


                <CardUserDetail :userData="userData" />

            </v-col>
        </v-row>
    </v-container>
</template>