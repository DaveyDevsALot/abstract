This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Host Locally:
Navigate to the root directory of the project.
Then, run the command to make shell script executable:
** NOTE: You will need docker installed in you local environment. This can be found here: [https://docs.docker.com/engine/install/](https://docs.docker.com/engine/install/)

```bash
chmod +x start_services.sh
```
Then, run the command to build and start the service locally:

```bash
./start_services.sh
```

You will then see a message that a server has started on localhost:3000. At this point you can open [http://localhost:3000](http://localhost:3000) 
with your browser to view the application.

## Running a Local Dev Server
First, run the development server (see below for containerized local hosting solution):

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deployed on Vercel

Also included with the application was a seamless deployment to Vercel. I understand that this was not a requirement but it was an easy item to add along with the infrastructure.
