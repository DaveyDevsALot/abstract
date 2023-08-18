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

## Development Notes
You can find the figma moc ups in the docs folder as well as a screenshot of a KanBan board I used initially but had to sacrifice it for time contraints.
Note: the anchor links to the development projects in my experience section seem to be broken on the host site. I have filed an issue but please use the top bar navigation on Anewgo.com
to reference these interactive UI components that I have built at my time at Anewgo.

## UI/UX Scoring

To start, I believe that every item on the assessment was met. The application can be viewed once served locally. Included in every view of the application are a health check indicator which is denoted by a heart icon that starts as white and will turn the stroke/outline to green/red depending on the health of the service. This is polled every 60 seconds and can be seen in the developers tools in the console. There is also a date, time, and current branch name that the build was created from and it can all be found at the very bottom of the footer. I ultimately made the choice to not 'crowd' the UI by making these items large so the font color and size was selected to be mostly hidden. Worry not! Give it a hover on a device that is hoverable (or click on a phone) and it will be much more easily viewed. That being said I think the task success, time on task, and usability/enjoyment of the user would be an overall win.
As for a comparison to competitor sites of this kind (developer bio apps) I believe this does stand out in a good way but it must be noted that there is a clear lack of accessibilty and also a possible dangerous sensory experience for a sensitive user. This is not something I would ever consider for an enterprise production application but given the freedom to be creative and have fun I went for it!
As for usability, I think there are some great parts of the application. The layout appears stable on all platforms creating an enjoyable user experience. The interactivity and animation is quite shocking but I believe given the objective it _may_ wow in the right places. 

Some more things to note for future enhancements. It was a 'nice to have' that I would have liked to include that would leverage local storage to allow a user to toggle the scrolling text on/off. Perhaps it should also not occur every time the user navigates to home. I would also prefer to have launced the links to other projects in a new blank target. Also, I think it may have followed standard designs more to have the home as the '1st' selection. So, possibly putting it on the left of the menu. Just some observations as I sit back and go through it.

Overall, due to the lack of accessibility, and some sensory shocks, I would not be able to grade an A. I would be satisfied in the time given to give an honest assesment of a B / B+.
I hope you enjoyed the repository as much as I have! And, remember, keep on smiling!!

## Deployed on Vercel

Also included with the application was a seamless deployment to Vercel. I understand that this was not a requirement but it was an easy item to add along with the infrastructure.
You can see it at [David R Coulombe](abstract-gilt.vercel.app)
