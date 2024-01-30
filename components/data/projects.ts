export const webProjects = [
    // webscrape
    {
        title: "E-Commerce Stripe Store (Full Stack)",
        url_link: "https://afashionstore.vercel.app",
        url_image:
            "https://res.cloudinary.com/crimson-flamingo/video/upload/v1706216141/3105%20portfolio%20screenshots/fashion.mp4",
        description:
            "This is an e-commerce site built using Stripe API. Users can purchase products, update or delete quantity, create an account to view past orders and more. The availability of the products are real-time and once a user successfully purchases an item, an order will be created and the available product quantity will update in my database. Once the quantity hits 0, a banner will show 'Out of Stock.' Users can create an account to view his past orders using Google, Github or email. For email, he will receive a magic link to sign in. The workflow is 1. User adds an item to his cart. 2. A cart-tracking cookie will be created and saved for 30 days. 3. User can add more items and update quantity. If quantity added is greater than product availability, then a notification will show on the top right corner. 4. User goes to checkout page and enters information. On payment success, an order will be created, the product availability will be updated, his cart cookie will be deleted and user will be redirected to success page. 5. User can create an account to view past orders. 6. Repeat 1-4.",
        technologiesUsed:
            "Nextjs, Next-Auth, SendGrid, Stripe, Tailwindcss, Postgres, Prisma, Typescript, Git, Puppeteer",
        gitHubLink: "https://github.com/BestVersion7/fashionstore",
    },
    {
        title: "Travel Blog And CMS (Full Stack)",
        url_link: "https://speedruntravel.com",
        url_image:
            "https://res.cloudinary.com/crimson-flamingo/video/upload/v1706216166/3105%20portfolio%20screenshots/speed.mp4",
        description:
            "The goal of this website is to share my travel adventures. It is a custom built CMS with an admin page that I can use to edit articles/photos. Users can post comments once signed in with Google. The article, user, comment data are stored to AWS RDS. For photo storage, I am using Cloudinary which caches photos for faster delivery. For newsletter subscription, I have incorporated SendGrid which automates the sending out emails. All the emails are sent out from info@speedruntravel.com which I created on Zoho mail.",
        technologiesUsed:
            "Nextjs,  Next-Auth, SendGrid, Prisma, Postgres, Material UI, SCSS, Typescript, Git",
        gitHubLink: "https://github.com/BestVersion7/speedruntravel",
    },
    {
        title: "Doctor Appointment Booking Site (Full Stack)",
        url_link: "https://cooperpricehealth.vercel.app",
        url_image:
            "https://res.cloudinary.com/crimson-flamingo/video/upload/v1706216164/3105%20portfolio%20screenshots/cooper.mp4",
        description:
            "The goal of this website is to inform users about mental health and allow them to book an appointment with a therapist. It is a full stack website that allows users to book an appointment with a therapist. I added a default test account to use to book the appointment. Once a date and time is booked, the availability on the calendar updates and is no longer available. I am using react-calendar to make the view easier and all the data is stored on RDS. The api is stored on this domain /api/booking. Lastly, I used Bootstrap for styling the buttons.",
        technologiesUsed:
            "Nextjs, Postgres, Bootstrap, Prisma, SCSS, Typescript, Git",
        gitHubLink: "https://github.com/BestVersion7/cooperpricehealth",
    },

    // {
    //     title: "Personal Drink Recipe Blog (Full Stack)",
    //     url_link: "https://winestore.vercel.app/",
    //     url_image:
    //         "https://res.cloudinary.com/crimson-flamingo/video/upload/v1691376473/3105%20portfolio%20screenshots/Wine_Blog_-_Personal_-_Microsoft_Edge_2023-08-06_22-45-58.mp4",
    //     description:
    //         "The goal of this website is to share drink recipes. Users can sign in using Google, Github or email and post comments to the recipes. The authentication part is handled by third-party next-auth package. In the previous version (https://goldenwine.herokuapp.com/), the authentication was written by myself but Auth2.0 is better in terms of security and users generally don't like to create new accounts. Furthermore, it is deployed to Vercel which results in better performance removing the cold starts from Heroku free tier.",
    //     technologiesUsed:
    //         "Nextjs, AWS RDS (Postgres), OAuth 2.0, Cloudinary, Prisma, SCSS, Git",
    //     gitHubLink: "https://github.com/BestVersion7/winestore",
    // },
    // {
    //     title: "Drink Recipe Blog (Outdated)",
    //     url_link: "https://goldenwine.herokuapp.com/",
    //     url_image:
    //         "https://res.cloudinary.com/crimson-flamingo/image/upload/v1561066077/3105%20portfolio%20screenshots/3105_wine_screenshot.png",
    //     description:
    //         "This is a full stack website deployed on Heroku. The goal of this website is to find recipes for alcoholic beverages and post reviews on the recipe. Reviews can only be posted once users sign in or create a new account. I have also incorporated Cloudinary CDN to submit profile images and transformations. All the data is stored on MongoDB Atlas.",
    //     technologiesUsed:
    //         "React, MongoDB, ExpressJs, Heroku, Google Analytics, Git",
    //     gitHubLink: "https://github.com/BestVersion7/heroku-site",
    // },
];
export const personal = {
    title: "Personal Professional Website (Full Stack)",
    url_link: "https://hunterkf.com",
    url_image:
        "https://res.cloudinary.com/crimson-flamingo/video/upload/v1691376467/3105%20portfolio%20screenshots/My_Website_-_Personal_-_Microsoft_Edge_2023-08-06_22-32-04.mp4",
    description:
        "This is my personal website. It is a full stack site rewritten in 2023 to use Next 13.js (previously Next12) server side rendering for better SEO. It is also hosting all the api route that I use for my other projects including the booking app and my blog. All the API logic is centralized here and it is easier for me to maintain and separate front end and back end logic. It includes all the CRUD routes and application middleware for creating/updating articles, reels, comments, etc.",
    // "This is a full stack website deployed on Heroku. The goal of this website is for me to write and share articles with you. I have created my own API: REST for user authentication, and SOCKET.io for live comments. I also have a master/admin page running on web sockets for me to publish, update, delete articles real time. All the data is stored on PostgreSQL.",
    technologiesUsed:
        "Typescript, Nextjs, Supabase (Postgres), Next-Auth, Cloudinary, Prisma, Tailwindcss, Git",
    gitHubLink: "https://github.com/BestVersion7/trainingnext13",
};
