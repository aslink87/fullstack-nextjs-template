# NextJS, MongoDB, and Typescript App Template

Leverages NextJS, TailwindCSS, Storybook, Typescript, Jest, Sass, MongoDB, Husky, Commitlint, Prettier, and ESLint

# How to Use

In your terminal, run the following command:

```bash
npm install
```

# Run in Development mode

```bash
npm run dev
```

# Storybook

Run storybook with:

```bash
npm run storybook
```

# Mongo setup

Create a .env.local file.

```bash
MONGODB_URI={your URI goes here}
MONGODB_DB={database name}
```

You can test if mongo is connected by running the app and navigating to...

```bash
localhost:3000/mongo
```
It should say 'You are connected to MongoDB'

# Husky and commitlint

Husky is setup to ensure the app passes 'npm run lint' before committing.
Also, husky ensures the app will build succesfully before pushing.
Commitlint requires a few parameters to be met for commits to be accepted.
Namely that a commit contains a subject (you can see these in the commitlint.config.js file).
Other rules are also listed in the config file.

# Tailwind and styling

You can use either tailwind, css, or sass.
Modules are supported so feel free to create separate sass files for each component.

# Prettier and EsLint

Should work out the box. Configure to your liking.

# Testing

Initialized with a simple test in the __tests__ directory, to ensure the main layout is rendered.
