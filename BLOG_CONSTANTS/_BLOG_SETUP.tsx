import { LogoType, NavbarType } from "../src/shared/enums";
import { IAuthor, iNavSetup, iSEO } from "../src/shared/interfaces";
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin, AiFillInstagram, AiFillFacebook } from "react-icons/ai";

/**
 * EXAMPLE AUTHOR
 * 
 export const AUTHOR_NAME: IAuthor = {
    name: "Full Name",
    designation: "Work Designation",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    profilePic: "",
     social: [
        {
            icon: <AiFillGithub />,
            link: 'https://github.com/'
        },
        {
            icon: <AiFillLinkedin />,
            link: 'https://www.linkedin.com/'
        },
    ]
}
 */

// export const MAYUR: IAuthor = {
//     name: "Mayur Nalwala",
//     designation: "Software Engineer",
//     bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     profilePic: "",
//     social: [
//         {
//             icon: <AiFillGithub />,
//             link: 'https://github.com/nmayur'
//         },
//         {
//             icon: <AiFillLinkedin />,
//             link: 'https://www.linkedin.com/in/mayur-nalwala/'
//         },
//     ]
// }

// export const RUPALI: IAuthor = {
//     name: "Rupali Yadav",
//     designation: "IT Analyst",
//     bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     profilePic: "",
//     social: [
//         {
//             icon: <AiFillGithub />,
//             link: 'https://github.com/rupali-yadav'
//         },
//         {
//             icon: <AiFillLinkedin />,
//             link: 'https://www.linkedin.com/in/rupali-yadav-087bb4112/'
//         },
//     ]
// }

export const ASHWANI: IAuthor = {
    name: "Ashwani Rathee",
    designation: "Julia Enthusiast",
    bio: "GSOC'22, OSPP'22 with Julia",
    profilePic: "",
    social: [
        {
            icon: <AiFillGithub />,
            link: 'https://github.com/ashwani-rathee'
        },
        {
            icon: <AiFillLinkedin />,
            link: 'https://www.linkedin.com/in/ashwani-rathee-0b7594192/'
        },
    ]
}

// This can your company name / your name etc for SEO purposes
export const WEBSITE_NAME: string = '';
export const WEBSITE_URL: string = 'https://juliablog.web.app/';

/**
 * This is the main navigation setup.
 * This includes the main navbar and the side drawer.
 */
export const PRIMARY_NAV: iNavSetup = {
    type: NavbarType.DEFAULT,
    // max logo image height 40px
    // you can add logo light version if using image
    // logo: {
    //     type: LogoType.IMAGE,
    //     logo: '/images/logo.png',
    //     logoLight: '/images/logo-light.png'
    // },
    logo: {
        type: LogoType.TEXT,
        logo: 'Julia Blog',
    },
    // navLinks are the main navbar links that apper on top of every page
    navLinks: [
        {
            label: 'Home',
            path: '/'
        },
        {
            // for categories don't add path and add type: dropdown and pass path empty
            label: 'Blog',
            type: 'dropdown',
            path: ''
        },
        {
            label: 'About Us',
            path: '/about-us'
        },
        // {
        //     // to open a link in new tab pass newTab: true
        //     label: 'Support Us',
        //     path: 'https://www.buymeacoffee.com/ashwanirathee',
        //     newTab: true
        // },
        // {
        //     label: 'Github Repo',
        //     path: 'https://github.com/webexpe13/blog-template-using-nextjs-typescript-tailwindcss',
        //     newTab: true
        // },
        // {
        //     label: 'Contact Us',
        //     path: '/contact-us'
        // }
    ],
    // sideNavLinks are the links which appear when you open the side menu after clicking the burger menu icon.
    sideNavLinks: [
        {
            label: 'Home',
            path: '/'
        },
        {
            // for categories dont add path and add type: dropdown
            label: 'Blog',
            type: 'dropdown',
            path: ''
        },
        {
            label: 'About Us',
            path: '/about-us'
        },
        // {
        //     label: 'Support Us',
        //     path: 'https://www.buymeacoffee.com/webexpe13z',
        //     newTab: true
        // },
        // {
        //     label: 'Github Repo',
        //     path: 'https://github.com/webexpe13/blog-template-using-nextjs-typescript-tailwindcss',
        //     newTab: true
        // },
        // {
        //     label: 'Contact Us',
        //     path: '/contact-us'
        // }
    ],
    socials: [
        {
            link: 'https://www.linkedin.com/in/ashwani-rathee-0b7594192/',
            icon: <AiFillLinkedin />
        },
        {
            link: 'https://www.github.com/ashwani-rathee',
            icon: <AiFillGithub />
        },
        {
            link: 'https://twitter.com/ashwani-rathee',
            icon: <AiOutlineTwitter />
        },
    ]
}

export const DEFAULT_SEO: iSEO = {
    title: "Julia Blog",
    description: "A simple blog template using NextJS and Typescript.",
    keywords: "Blog, next js, template, next js blog, blog setup, typescript, nextjs typescript, react js blog template, responsive blog template",
    url: WEBSITE_URL,
    author: `${ASHWANI.name}`,
    twitterHandle: '@WebExpe',
    ogImage: '/public/images/og-image.jpg'
}