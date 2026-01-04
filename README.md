# Vue 2.7 + TypeScript Boilerplate

A minimal boilerplate for building Vue 2.7 applications with TypeScript and Composition API.

## 🚀 Quick Start

INSTRUCTIONS: https://docs.google.com/document/d/1fPU2sX5o_5H9t1V4PUwyOinV26TJB66SW8FJQAuAozM/edit?usp=sharing

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**

```bash
npm install
```

2. **Start development server:**

```bash
npm run dev
```

The app will open at `http://localhost:8080`

3. **Build for production:**

```bash
npm run build
```

## 📂 Project Structure

```
final-boilerplate/
├── public/
│   └── index.html           # HTML template
├── src/
│   ├── components/
│   │   └── ExampleComponent.vue  # Example component
│   ├── App.vue              # Main application component
│   ├── main.ts              # Application entry point
│   ├── types.ts             # TypeScript type definitions
│   └── vue-shims.d.ts       # Vue TypeScript declarations
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── webpack.config.js        # Webpack configuration
└── README.md                # This file
```

## 🔧 Technology Stack

- **Vue 2.7.16**: Progressive JavaScript framework with built-in Composition API
- **TypeScript**: Type-safe development
- **Webpack 5**: Module bundler
- **CSS3**: Modern styling

## 📝 Key Files

### src/main.ts

Entry point of the application. Initializes Vue and mounts the root component.

### src/App.vue

Root component of the application. Uses Composition API with `<script setup>`.

### src/components/ExampleComponent.vue

Example component demonstrating:

- Props with TypeScript interfaces
- Emits with type definitions
- Reactive state with `ref`
- Event handling
- Scoped styles

### src/types.ts

Define your TypeScript types, interfaces, and type aliases here.

### src/vue-shims.d.ts

TypeScript declarations for `.vue` files. Required for TypeScript to recognize Vue components.

## 🎯 Vue 2.7 Composition API

This boilerplate uses Vue 2.7's built-in Composition API. Key features:

### Reactive State

```typescript
import { ref, reactive } from "vue";

const count = ref<number>(0);
const state = reactive({ name: "Vue" });
```

### Computed Properties

```typescript
import { computed } from "vue";

const double = computed(() => count.value * 2);
```

### Lifecycle Hooks

```typescript
import { onMounted, onUnmounted } from "vue";

onMounted(() => {
  console.log("Component mounted");
});
```

### Component Props & Emits

```typescript
// Props
interface Props {
  title: string;
}
const props = defineProps<Props>();

// Emits
const emit = defineEmits<{
  (e: "update", value: string): void;
}>();
```

## 🎨 Styling

- Use `<style scoped>` for component-specific styles
- Use `<style>` without scoped for global styles
- CSS is processed by webpack

## 📦 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (outputs to `dist/`)

## 🔍 TypeScript Configuration

The `tsconfig.json` is configured for Vue 2.7 development:

- Target: ES2015
- Module: ESNext
- Strict mode: disabled (can be enabled for stricter type checking)
- JSX: preserve (for Vue templates)

## 🌐 Webpack Configuration

Webpack is configured to:

- Bundle TypeScript and Vue files
- Handle CSS with style-loader
- Provide development server with hot reload
- Generate production builds with optimization

## 💡 Next Steps

1. **Remove example component**: Delete `src/components/ExampleComponent.vue` and remove its usage from `App.vue`
2. **Add your components**: Create new components in `src/components/`
3. **Define your types**: Add your application types to `src/types.ts`
4. **Update App.vue**: Build your application structure
5. **Add routing** (optional): Install and configure `vue-router`
6. **Add state management** (optional): Install and configure `pinia` or `vuex`

## 📖 Resources

- [Vue 2.7 Documentation](https://v2.vuejs.org/)
- [Vue Composition API](https://vuejs.org/guide/extras/composition-api-faq.html)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Webpack Documentation](https://webpack.js.org/)

## 🐛 Troubleshooting

### "Cannot find module 'vue'" error

After running `npm install`, restart your IDE's TypeScript server:

- VS Code: Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac) → "TypeScript: Restart TS Server"

### Hot reload not working

Make sure you're running `npm run dev` and the webpack dev server is active on port 8080.

## 📄 License

This is a boilerplate project. Use it freely for your own projects.
