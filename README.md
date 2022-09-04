<div align="center">

# My Software Portfolio 😄

</div>

**Built/Hosted Using**

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

**Front-End**

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

**Back-End**

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

<br>

# Overview

This is my in-progress online web portfolio deployed/managed via [Vercel](https://vercel.com/). This project was built using the react framework [Next.js](https://nextjs.org/). The contact form utilizes the [MailGun](https://www.mailgun.com/) API as part of the [Github Student Developer Pack](https://education.github.com/pack).

# Reusing this project

If you wish to use this project for your own purposes, click **[here](https://github.com/JamBot3000/WebPortfolio/generate)** to generate your own repo with the exact same files and structure.

## Important Steps

- Install the JS packages: `yarn install`/`npm install` _(Ensure you are using node v12 or higher)_
- Create a mailgun account then generate your API key and Domain
- Create a `.env.local` file at the root of the project formatted like so:

```
MAILGUN_API_KEY=1234567890
MAILGUN_DOMAIN=sandbox1234567890.mailgun.org
MAILGUN_EMAIL=youremail@domain.com
```

<br>

From there all you need to do is `yarn dev` to run the project - for help deploying using vercel, check out [this](https://vercel.com/docs/concepts/deployments/overview)
