import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


import '@mdi/font/css/materialdesignicons.css'



const icons = {
    defaultSet: 'mdi',
    aliases,
    sets: {
        mdi,
    }
}

const vuetify = createVuetify({
    components,
    directives,
    icons,



})

const app = createApp(App)

app.use(router)

app.use(vuetify).mount('#app')


