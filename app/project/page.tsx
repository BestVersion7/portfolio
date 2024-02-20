export const metadata = {
    title: "Projects",
};
import { ProjectItem } from "@/components/ProjectItem";
import Link from "next/link";
import { personal } from "@/components/data/projects";
import { webProjects } from "@/components/data/projects";
const fashionStore = webProjects[0];

export default function ProjectPage() {
    const awsLine = `psql --host=xxx.comxxxx --port=5432 --username=postgres --password --dbname=xxx`;
    const psqlLine = `CREATE TABLE blog ( 
    article_id INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    article_date DATE DEFAULT CURRENT_TIMESTAMP,
    article_image_small VARCHAR(300),
    article_image VARCHAR(300), article_title VARCHAR(100),
    article_post TEXT, article_public BOOLEAN 
);`;

    return (
        <main>
            <div>
                <h3>Summary of Projects</h3>
                <ol className="list-decimal mx-8">
                    <li>
                        Youtube Clone -
                        <Link
                            target="_blank"
                            href="https://watchyoutube.vercel.app/"
                            className="bg-yellow-200 hover:underline px-2"
                        >
                            https://watchyoutube.vercel.app
                        </Link>
                    </li>
                    <li>
                        E-Commerce Store -
                        <Link
                            target="_blank"
                            href="https://afashionstore.vercel.app/"
                            className="bg-yellow-200 hover:underline px-2"
                        >
                            https://afashionstore.vercel.app
                        </Link>
                    </li>
                    <li>
                        Travel Blog -
                        <Link
                            target="_blank"
                            href="https://speedruntravel.com/"
                            className="bg-yellow-200 hover:underline px-2"
                        >
                            https://speedruntravel.com
                        </Link>
                    </li>
                </ol>
            </div>
            <br />

            <span className="py-1 px-2 rounded-xl text-white bg-red-700">
                Article written in Feb 2024
            </span>
            <div className="text-center mt-1">
                <ProjectItem
                    {...fashionStore}
                    showVideo={false}
                    showDesc={false}
                />
            </div>
            <div>
                <h2 className="h2article">Overview:</h2>
                <p>
                    This is a modern e-commerce website with all the features
                    you need including:
                </p>
                <ul className="list-disc mx-8 grid sm:grid-cols-2 lg:grid-cols-3 ">
                    <li>SEO Friendly</li>
                    <li>Mobile responsive</li>
                    <li>Search products</li>
                    <li>Paginate products</li>
                    <li>Account creation</li>
                    <li>Payment Processing</li>
                    <li>Product Review</li>
                    <li>Purchase history</li>
                    <li>Live product availability</li>
                    <li>Message Notifications</li>
                    <li>Email Notifications</li>
                    <li>Google Analytics</li>
                </ul>

                <h2 className="h2article">Design Pattern & Layout</h2>
                <p>
                    The design is inspired by amazon.com, temu.com and
                    shopravella.com. I use tailwind for faster development and I
                    like the easy to remember naming convention.
                </p>

                <h2 className="h2article">User Experience</h2>
                <p>
                    This is a mobile friendly website giving a great experience
                    for mobile, tablet or desktop users. Everything scales well
                    and colour and contrast is great. The images are responsive
                    and optimized which means lower loading times for mobile
                    phones. Some of data is being cached which means lower page
                    load times on subsequent visits. There is a working search
                    bar, iOS and android friendly slideshow swiper for trending
                    products. The site is SEO friendly and most of the pages and
                    product api calls are server rendered which means great
                    google keyword tracking. And finally, there are event
                    listeners for closing dropdowns such as the search bar
                    dropdown when clicking away from the target box.
                </p>
                <h2 className="h2article">Search & Pagination</h2>
                <div>
                    <p>
                        For pagination, I need to get the total count of the
                        product. Then I needed to get the page count and I am
                        using 24 products per page so product_count/24 gives me
                        the page count. The minimum page would be 1 and the
                        maximum would be 4. If there were more than 4 pages, I
                        would use 1,2,3,[last_number]. On button click, the
                        router will push to ?page=2. Below is the SQL code.
                    </p>
                    <ul className="list-decimal mx-8">
                        <li>SELECT COUNT(*) FROM product</li>
                        <li>
                            SELECT COUNT(*) FROM product WHERE product_category=
                            {`'`}dress{`'`}
                        </li>
                        <li>
                            SELECT COUNT(*) FROM product WHERE product_name
                            CONTAINS {`'`}abc{`'`}
                        </li>
                        <li>
                            SELECT * FROM product LIMIT 24 OFFSET (page-1)*24
                        </li>
                        <li>
                            SELECT * FROM product WHERE product_category={`'`}
                            dress{`'`}
                            LIMIT 24 OFFSET (page-1)*24
                        </li>
                        <li>
                            SELECT * FROM product WHERE product_name CONTAINS
                            {`'`}abc{`'`} LIMIT 24 OFFSET (page-1)*24
                        </li>
                    </ul>
                </div>

                <h2 className="h2article">Products & Prices Datascraping</h2>
                <div>
                    Only the products and prices data are scraped from Amazon. I
                    use puppeteer to get the product image, product price, and
                    product title from https://amazon.com/s?k=dress or
                    https://amazon.com/s?k=bags.
                    <br />
                    Then the for loop code runs which does:
                    <ol className="list-decimal mx-8">
                        <li>
                            Check Product table and make sure the name does not
                            exist
                        </li>
                        <li>
                            Create a product in Product Table and returns the
                            product_id
                        </li>
                        <li>
                            Create a price in Price Table with the product_id
                            foreign key and returns price_id
                        </li>
                        <li>
                            Update a product in Product Table with the price_id
                        </li>
                        <li>
                            Create availability in ProductAvailability Table
                            with product_id foreign key and default
                            available_quantity of 3
                        </li>
                    </ol>
                    <code className="bg-slate-700 text-white"></code>
                    Then I have a for loop, which for every product, it will
                    save the three data points plus additional data saved to
                    Product table. After, the price creates and I set the
                    availability to 3 for each product that was created and
                    saves to Price Table. Then each product gets automatically
                    saved to my own database. The reviews are all user generated
                    and not scraped from Amazon.
                </div>

                <h2 className="h2article">Protected routes</h2>
                <p>
                    There are two routes I am protecting: /account and
                    /api/order through middleware. For /account, the browser
                    will check for an auth token and the user will be redirected
                    to /signin if not logged in. The /api/order is protected by
                    headers: {`{authorization:process.env.API_KEY}`}. This is an
                    important api route to protect because the GET fetch
                    requests are SELECT * FROM orders WHERE email = email If you
                    have someone{`'`}s email, you can see that person{`'`}s
                    whole order history and we don{`'`}t want that.
                </p>
                <h2 className="h2article">Workflow of Site</h2>
                <div>
                    <ol className="list-decimal mx-8">
                        <li>User adds a product.</li>
                        <li>
                            A cart cookie gets created and stored in browser for
                            30 days.
                        </li>
                        <li>
                            User makes updates/changes to cart and post and put
                            requests will run in the backend to add or update
                            quantity/products.
                        </li>
                        <li>
                            A yellow notifications will pop up every time a new
                            product is added or quantity is updated on the top
                            right corner.
                        </li>
                        <li>
                            User can checkout items in cart using a real or
                            stripe test credit card that Stripe handles. Once
                            card goes through, 4 api calls will run.
                        </li>

                        <li>
                            <ol className="list-decimal mx-8">
                                <li>
                                    Check if the product is still available in
                                    the rare chance it was purchased right as
                                    you were checking out. If fail, notification
                                    will appear asking you to update quantity or
                                    remove from cart.
                                </li>
                                <li>
                                    Decrease the quantity for each product you
                                    purchased on the database.
                                </li>
                                <li>
                                    Save the payment intent generated by stripe
                                    and create an order
                                </li>
                                <li>
                                    Clear the cart cookie so user can make new
                                    orders.
                                </li>
                            </ol>
                        </li>

                        <li>
                            User gets redirected to success page which shows the
                            order number and shows what items you purchased,
                            quantity and total for each.
                        </li>
                        <li>
                            User can create an account with the same email used
                            on the stripe checkout page to view past orders. You
                            can create an account through Google, Facebook or
                            typing in your email address. All these methods
                            require you to verify your email. Once verified, you
                            are signed in.
                        </li>
                        <li>
                            You can navigate to /account or /account/orders page
                            to update your name and view your orders.
                        </li>
                        <li>
                            You can leave a product review any time and the name
                            you used will show.
                        </li>
                    </ol>
                </div>

                <h2 className="h2article">Database/Storage</h2>
                <div>
                    <p>
                        I am using Prisma (postgres) to write the api logic for
                        the routes. Currently I have 11 tables + 1 table stored
                        on Stripe database that each play an important role.
                    </p>
                </div>
                <ol className="list-decimal mx-8">
                    <li>
                        Product - stores all product related info (cached for 24
                        hours)
                    </li>
                    <li>
                        Price - stores all prices - One product can have
                        multiple prices. GET, POST requests only (cached
                        forever)
                    </li>
                    <li>
                        Product Availability - stores available quantity; GET,
                        POST, PUT requests only (not-cached)
                    </li>
                    <li>
                        Cookie - stores the cookie generated when user adds an
                        item to cart; GET, POST requests only (cached forever)
                    </li>
                    <li>
                        Cart - stores each item with referencing cookie; GET,
                        POST, PUT requests only (not-cached)
                    </li>
                    <li>
                        Order - stores each order and referencing payment
                        intent; GET, POST requests only (cached forever)
                    </li>
                    <li>
                        Product Review - stores review data with referencing
                        user; GET, POST requests only (not-cached)
                    </li>
                    <li>
                        User - stores unique user id; GET, POST, PUT requests
                        only (not-cached)
                    </li>
                    <li>
                        Account - stores account sign-in method; POST requests
                        only
                    </li>
                    <li>Session - stores session data; POST requests only</li>
                    <li>
                        VerificationToken - stores authentication tokens; POST
                        requests only
                    </li>
                    <li>
                        PaymentIntent - this is a table on the Stripe database -
                        GET, POST, PUT requests only (cached forever)
                    </li>
                </ol>
            </div>
            <video
                controls
                muted
                autoPlay={false}
                className="border-2 border-black"
            >
                <source type="video/mp4" src={fashionStore.url_image} /> Your
                browser does not support playing this video
            </video>

            <div className="m-4 h-24 flex items-center justify-center border border-black border-dashed text-emerald-400 font-black tracking-widest text-3xl underline">
                End
            </div>
            <div className="article">
                <span className="py-1 px-2 rounded-xl text-white bg-red-700">
                    Article written in Jan 2023
                </span>
                <div className="text-center mt-1">
                    <ProjectItem
                        {...personal}
                        showVideo={false}
                        showDesc={false}
                    />
                </div>
                <h2 className="h2article">Implementation</h2>
                <p>
                    This is full-stack website built using Next 13 and deployed
                    on Vercel server. I have created my own API and also use
                    external third party APIs. The codebase is written in
                    Typescript {">"} 90%. The database server I use to save and
                    store my data is AWS RDS Postgres. Furthermore, there is
                    Google Analytics tracking which is helpful for me to gauge
                    audience views.
                </p>
                <h2 className="h2article">Design</h2>
                <p>
                    The design approach I used is mobile friendly. I code
                    everything with the intention of mobile-view. Then, I would
                    add the viewports and set min-width to adjust the content
                    view from tablets and desktops. It is important because the
                    majority percentage of news/articles/blog readers come from
                    mobile devices. The tools I used to make this happen is SCSS
                    and Material UI. I like the color design of MUI which is why
                    I chose that. SCSS is a game changer because I can reuse
                    styles easily and put them in variables, which is something
                    not possible in regular CSS.
                </p>
                <h2 className="h2article">API</h2>
                <ol>
                    <li>Custom API</li>
                    <li>External API</li>
                </ol>

                <h3>1. Custom API</h3>
                <p>
                    I built my own API and wrote my own custom logic for
                    creating, reading, updating content. The API is hosted here
                    on this domain and the different routes can be found here:{" "}
                    <Link
                        href="https://github.com/BestVersion7/trainingnext13/tree/main/app/api.
"
                        className="underline break-words"
                    >
                        https://github.com/BestVersion7/trainingnext13/tree/main/app/api.
                    </Link>{" "}
                    I decided to go with this approach rather than having the
                    API logic on the same domain is to take advantage of the
                    next 13 features of caching. Plus separating the front end
                    and back end code makes it easier for me to focus on
                    security. I have added middleware on the api that disallows
                    access to routes unless there is an authorization header.
                    For example, creating a new article or a new post.
                </p>
                <h3>2. External APIs</h3>
                <ol className="list-disc mx-8">
                    <li>SendGrid</li>
                    <li>GoogleMaps</li>
                    <li>Stripe</li>
                    <li>Cloudinary</li>
                </ol>
                <p>
                    SendGrid helps me with emails and creating subscribers. When
                    a user subscribes, I add them to a marketing list which is
                    saved in the SendGrid database and I can send an email to
                    all the subscribers on the list. Furthermore, on the contact
                    page, when a user sends me a message, I would receive it on
                    my email. It pairs well with nodemailer.
                </p>
                <p>
                    The GoogleMaps API is also on my contact page. This is an
                    important element to any website and shows where you are
                    located.
                </p>
                <p>
                    Third, I set up an account on stripe.com. It is a payment
                    integration API that allows me to receive donations on the
                    /support page. It is another important feature to have on a
                    blog for sponsors.
                </p>
                <p>
                    Lastly, I use cloudinary to save all my pictures and videos.
                    Cloudinary provides CDN for faster caching than saving it in
                    my local machine. Plus, they offer free limit every month
                    for image transformation such as sizing, cropping, etc.
                </p>
                <h2 className="h2article">Dashboard</h2>
                <p>
                    Since my website is built from scratch and using my own
                    database, it is critical to have a management system to be
                    able to perform basic CRUD operations. I built a dashboard
                    that allows me to do just that. On{" "}
                    <Link
                        className="break-words"
                        href="https://www.speedruntravel.com/dashboard"
                    >
                        https://www.speedruntravel.com/dashboard
                    </Link>
                    , you can see all my public and private articles and reels
                    and this content is not cached and run every time. On this
                    page, I am able to perform the basic CRUD operation. When
                    clicking on the {`"create"`} or {`"update"`} buttons, it
                    does not make an api call to {`"post"`} or {`"put"`} because
                    it is a public route and just for demo. Normally, I would
                    have a middleware file to check for authentication for{" "}
                    <b>/dashboard</b> but I wanted to share it so made it public
                    and disabled the features. The articles are written using
                    markdown format and the package react-markdown is helpful
                    for that.
                </p>
                <h2 className="h2article">Database And Storage</h2>
                <p>
                    The database I use to store the database is in AWS RDS
                    Postgres. I decided to use Postgres because SQL is easier to
                    manipulate as the quantity of data increases. {`It's`}{" "}
                    easier to make one change on a related table rather than
                    make change on every JSON object for MongoDB. I went with
                    AWS because it is the leader for Saas and I wanted to learn
                    more about it, not just RDS. They also have Docker, EC2
                    which I have previously used to deploy my API but I went
                    with Vercel because it is expensive to use these features
                    and not part of the free trial. I use prisma to make the
                    integration to Postgres. It saves me time writing SQL code
                    and has own visual server (prisma studio) that I can use to
                    see the different tables and make edits. However, when I
                    create a table I would command line into the AWS RDS. For
                    example
                </p>
                <pre className="bg-white overflow-scroll">{awsLine}</pre>
                <br />

                <pre className="bg-white overflow-scroll">{psqlLine}</pre>

                <h2 className="h2article">Tools:</h2>
                <p>
                    The code editor I use to write my code is Visual Studio
                    Code. It is the most popular visual environment. The
                    versioning software I use is Git. I decided to make
                    everything public to share what I have learned coding.
                    Previously, the code was in a private repo.
                </p>
                <h2 className="h2article">Additional:</h2>
                <p>
                    I use Google Analytics for tracking. It is important to be
                    able to see views, bounce rates, popular links, etc. Also,
                    keeping an audience is important for monetizing in the
                    future (optional) on GoogleAds. My site was rejected twice
                    because there is not enough content. :)
                </p>
            </div>
            <div className="m-4 h-24 flex items-center justify-center border border-black border-dashed text-emerald-400 font-black tracking-widest text-3xl underline">
                End
            </div>
        </main>
    );
}
