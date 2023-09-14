import VueButton from './components/VueButton.vue';

export default {
    intall:(app, options) => {
        console.log("🚀 ~ file: index.js:5 ~ options:", options)
        app.component('vue-button', VueButton);
    },
}