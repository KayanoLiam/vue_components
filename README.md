# Vue Components Library

A collection of reusable Vue components built with Vue 3 and TypeScript. This library provides responsive, customizable UI components that can be easily integrated into any Vue project.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Vue](https://img.shields.io/badge/vue-3.x-brightgreen.svg)
![TypeScript](https://img.shields.io/badge/typescript-4.x-blue.svg)

## 📦 Components

### LoginRegister

A responsive login and registration component with smooth transitions and animations. Features include:

- Responsive design for all screen sizes
- Animated transitions between login and registration forms
- Form validation
- Social media login options
- Customizable styling

![LoginRegister Component](https://via.placeholder.com/800x400?text=LoginRegister+Component)

## 🚀 Installation

### Using npm or yarn

```bash
# npm
npm install @kayano/vue-components

# yarn
yarn add @kayano/vue-components
```

### Direct import in your project

You can also clone this repository and copy the components you need directly into your project.

## 🔧 Usage

### Global Registration

```javascript
// main.ts or main.js
import { createApp } from 'vue'
import App from './App.vue'
import LoginRegister from '@kayano/vue-components/LoginRegister'

const app = createApp(App)
app.component('LoginRegister', LoginRegister)
app.mount('#app')
```

### Local Registration

```vue
<template>
  <div>
    <LoginRegister />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { LoginRegister } from '@kayano/vue-components'

export default defineComponent({
  components: {
    LoginRegister
  }
})
</script>
```

## 🛠️ Development

### Project setup
```bash
# Install dependencies
yarn install
# or
npm install
```

### Compiles and hot-reloads for development
```bash
yarn serve
# or
npm run serve
```

### Compiles and minifies for production
```bash
yarn build
# or
npm run build
```

### Lints and fixes files
```bash
yarn lint
# or
npm run lint
```

### Customize configuration
See [Vue CLI Configuration Reference](https://cli.vuejs.org/config/).

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues and feature requests are welcome! Feel free to check the [issues page](https://github.com/KayanoLiam/vue_components/issues).

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Contact

KayanoShy - Kayano04@outlook.jp

Project Link: [https://github.com/KayanoLiam/vue_components](https://github.com/KayanoLiam/vue_components)
