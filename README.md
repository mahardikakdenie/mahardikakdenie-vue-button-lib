## Vue Button Lib

## Features
- Button default
- link button, router-link

```shell
npm i mahardikakdenie-vue-button
```

Import and register component

**Global**

```js
import { createApp } from 'vue';
import App from './App.vue';
import VueButton from 'mahardikakdenie-vue-button'
const app = createApp(App);
app.use(VueButton);
```

**Local**
```vue
<script>    
import VueButton from 'mahardikakdenie-vue-button'

export default {
    components: { VueButton }
}
</script>    
```

***Property Data**
```vue
<script>
props: {
    btnClass: {
        type: String,
        default: 'vue-button'
    },
    isDisabled: {
        type: Boolean,
        default: false,
    },
    isLoading: {
        type: Boolean,
        default: false,
    },
    isDiv: {
        type: Boolean,
        default: false,
    },
    isLink: {
        type: Boolean,
        default: false,
    },
    iconPosition: {
        type: String,
        default: ''
    },
    text: {
        type: String,
        default: 'This is Button Text'
    },
    iconClass: {
        type: String,
        default: ''
    },
    icon: {
        type: String,
        default: '',
    },
    loadingClass: {
        type: String,
        default: '',
    },
    link: {
        type: String,
        default: '',
    }
},
</script>
```