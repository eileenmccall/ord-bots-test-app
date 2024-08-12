This is a Next.js app written as part of a technical assessment for [Ordinals Bot](https://ordinalsbot.com). 

## View the production site:

You can view the site live on Vercel at the following URL: https://eileen-mccall-ord-bots.vercel.app/

## Run the app locally

After cloning the repo, the app is pretty simple to get up and running

### Install dependencies

Navigate to the project root in a terminal and run the following command:

`npm install`

### Add environment variables

In order to use the Ordinals Bot API, you need an API key, otherwise the app doesn't really do much and will probably just explode. Follow the following steps to keep your life explosionless:

1. Create a file at the root directory called `.env`
2. In that file, add the line `API_KEY=YOUR_API_KEY_HERE`, adding in your API key where appropriate


### Run the app!

That's it! All you need to do now is run `npm run dev` and the project should start up.

You can view the project in your browser at `localhost:3000`
