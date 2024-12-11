This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started


First, check system versions (tested with below)
```bash
node --version
v23.1.0
npm --version
10.9.0
pnpm --version
9.13.2
```


install
```bash
pnpm install
```

Copy `.env.sample` as `.env` and add values to env vars.

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.


## How it was created

```bash
# for base recent nextjs15
# @see https://nextjs.org/docs/14/getting-started/installation
# note it uses the App Router so also refer to https://next-auth.js.org/configuration/initialization#route-handlers-app
npx create-next-app@latest

# for nextauth5 is the same as authjs beta
# @see https://authjs.dev/getting-started/installation
npm install next-auth@beta
```

Add the redirect url below to [frontegg](https://portal.frontegg.com/development/authentication/hosted) to avoid getting a "Redirect uri wasn't found" error. See https://support.frontegg.com/hc/en-us/articles/12058210828061-How-to-fix-Redirect-uri-wasn-t-found.

Refer to notes from PR pasted at `demos/nextjs15-authjs/src/providers/FrontEggNextAuthProvider.ts`

```bash
{{APP_URL}}/api/auth/callback/frontegg
```


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
