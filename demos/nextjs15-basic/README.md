**At the time of testing this, this was actually taken for the most part form a shared zip inside the frontegg slack. Specifically [here](https://frontegg-community.slack.com/archives/C038P4WMA81/p1733341410166119?thread_ts=1733314380.024619&cid=C038P4WMA81). Made some tweaks to make it work better. There is a demo app @ https://github.com/frontegg/frontegg-nextjs/tree/master/demos/quick-starter-demo but was outdated at the time.**

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, check system versions (tested with below)
```bash
node --version
v23.1.0
npm --version
10.8.2
pnpm --version
9.13.2
```


install
```bash
pnpm install
```

then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You should see a login button. Same path will show a logout button and user data (e.g. image) when logged in. You can visit `/test` as well just to try a new custom page that should be protected by auth and middleware.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
