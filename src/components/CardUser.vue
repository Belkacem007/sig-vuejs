<script setup lang="ts">

import { RouterLink } from 'vue-router'

import { type PropType } from 'vue';

export interface User {
    id: {
        value: number
    },
    name: {
        first: string,
        last: string,
    },
    email: string,
    picture: {
        large: string
    }
}

const props = defineProps({
    user: {
        type: Object as PropType<User>,
        required: true,
    }
})
</script>

<template>
    <router-link :to="'/contact/' + user.id.value">
        <v-hover v-slot="{ isHovering, props }">
            <v-card v-ripple :class="{ 'on-hover': isHovering }" :elevation="isHovering ? 8 : 2" v-bind="props">
                <v-img :height="204" cover :src="user.picture.large" alt="user-image" />
                <v-card-title>
                    {{ user.name.first }} {{ user.name.last }}
                </v-card-title>
                <v-card-text>
                    <v-icon size="large" icon="mdi-email"></v-icon>
                    {{ user.email }}
                </v-card-text>
            </v-card>
        </v-hover>

    </router-link>
</template>