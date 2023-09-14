import VueButton from './components/VueButton.vue';

export default {
    install:(app) => {
        app.component('vue-button', VueButton);
    },
}