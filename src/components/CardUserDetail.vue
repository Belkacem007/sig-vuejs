<script setup lang="ts">

import { type PropType } from 'vue';

import UserListItem from './USerListItem.vue'

export interface User {

    name: {
        first: string,
        last: string,
    },
    phone: number,

    location: {
        country: string
    }

    dob: {
        date: string
    }

    picture: {
        large: string
    },

    cell: {
        cell: string
    }
}

const props = defineProps({
    userData: {
        type: Object as PropType<User>,
        required: true,
    }
})



</script>

<template>
    <v-card v-if="userData" class="mt-4">
        <v-container fluid>

            <v-row align="center">
                <v-col cols="4">
                    <v-img :src="userData.picture.large" alt="user-image" />
                </v-col>
                <v-col>
                    <h1 class="text-h4"> {{ userData.name.first }} {{ userData.name.last }}</h1>

                    <v-list>
                        <UserListItem :icon="'mdi-phone'" :title="'Phone'" :user-data="userData.phone" />
                        <UserListItem :icon="'mdi-cake'" :title="'Birth Date'" :user-data="userData.dob.date" />
                        <UserListItem :icon="'mdi-card-account-details'" :title="'Social Number'"
                            :user-data="userData.cell" />
                        <UserListItem :icon="'mdi-earth'" :title="'Country'" :user-data="userData.location.country" />
                    </v-list>

                </v-col>
            </v-row>
        </v-container>

    </v-card>
</template>