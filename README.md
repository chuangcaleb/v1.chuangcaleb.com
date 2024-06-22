# Chuang Caleb's Personal Website

> Succeeded by v2: [chuangcaleb/chuangcaleb.com: My Personal Website (v2). Focus on streamlining DX & using CSS Variables for component variants.](https://github.com/chuangcaleb/chuangcaleb.com)

## 🛠️ Technologies Used

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```filetree
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## TODO

- README lol
- random tilt of tech cards
- FAQ section
- light/dark toggle
- lazy load images
