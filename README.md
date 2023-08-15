This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server (see below for containerized local hosting solution):

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Host Locally:

First, run the command to build the image locally:
NOTE: You will need docker installed in you local environment. This can be found here: [https://docs.docker.com/engine/install/](https://docs.docker.com/engine/install/)

```bash
COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose build
```
Once this process completes successfully, you can then run:

```bash
docker-compose up
```

You will then see a message that a server has started on localhost:3000. At this point you can open [http://localhost:3000](http://localhost:3000) 
with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deployed on Vercel

Also included with the application was a seamless deployment to Vercel. I understand that this was not a requirement but it was an easy item to add along with the infrastructure.
