<script setup lang="ts">
import { type PropType } from 'vue';

const props = defineProps({
    icon: {
        type: String
    },

    title: {
        type: String
    },


    userData: {
        type: [Number, String, Object] as PropType<any>,
        required: true,

    }
})

</script>

<template>
    <v-list-item :prepend-icon="icon">
        <v-list-item-subtitle>
            {{ title }}
        </v-list-item-subtitle>
        <v-list-item-title>
            {{ userData.split('T')[0] }}
        </v-list-item-title>

    </v-list-item>
</template>