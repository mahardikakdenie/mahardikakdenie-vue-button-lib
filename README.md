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
```
