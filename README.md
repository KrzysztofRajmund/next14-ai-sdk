## Common rules in Next.js 14 / App Router (next 14.1.0, react 18.2.0):

[Blog about 10 common mistakes](https://vercel.com/blog/common-mistakes-with-the-next-js-app-router-and-how-to-fix-them)

1. Route Handlers:
   - Route handlers should not be used within Server Components (Server Component should not make a request to Route Handler to retrieve some JSON data, we should just fetch data from external source or just import JSON file into the Server Component)
   - if we need to fetch data in Client Component then we can use a Route Handler
   - Route Handlers are cached by default when using the GET method with the Response object. It can be visible in production only. To check it locally run the command: pnpm build && pnpm start
   - create RESTful endpoints, giving the full control over the response (no overhead for creating and configuring a separate server)
   - great to make external API requests when extra logic needs to be added to those requests
   - they run server-side, ensuring that sensitive information never gets shipped to the browser
2. Server Actions:
   - they work with the Client Component and Server Components (mainly used for form submissions and data mutations)
3. Server and Client Component relationship:
   - Client Component can be placed in Server Component
   - if Client Component imports any other components, these components become client component by default ('use client' directive it is not needed in this case) - "client boundaries"
   - if Server Component imports any other components, these components become server component by default ('use server' directive it is not needed in this case) - "server boundaries"
   - children props do not heritage Client Component or Server Components "boundaries" described above. It means that Client Component can have a Server Component as a children prop
     (Passing Server Components to Client Components as Props)
4. `redirect('/')` can not be used inside try catch, `redirect('/')` has own internal Next.js specific error
5. Layouts do not re-render, they are cached. When we need to re-render components wrapper then the template component is more suitable.
6. Server Components have access to the following fns and props to be able to access the incoming requests:
   - `cookies()`
   - `headers()`
   - `params`
   - `searchParams`
7. `fetch()` requests are memoized for all components within React component tree
8. `cache()` fn memoizes data requests

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
