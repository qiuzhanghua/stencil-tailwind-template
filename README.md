
# Stencil + TailwindCSS Template

## Getting Started
```bash
pnpm create stencil component stencil-tailwind-template
cd stencil-tailwind-template
pnpm install -D tailwindcss stencil-tailwind-plugin typescript

```

### modify stencil.config.ts
```ts
  plugins: [
  tailwind(),
  tailwindHMR(),
]
```

## Thanks
- [How to Integrate Tailwind CSS into your Stencil Project](https://ionic.io/blog/how-to-integrate-tailwind-css-into-your-stencil-project)

## See Also
- [Another Stencil Tailwind Example](https://github.com/qiuzhanghua/stencil-tailwind)