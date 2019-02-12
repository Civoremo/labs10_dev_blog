"use strict";

// removed id below until i find more info
// googleAnalyticsId: "UA-73379983-2",

module.exports = {
    url: "https://lumen.netlify.com",
    title: "Blog by Nedim Omerovic",
    subtitle: "Code | Create | Contribute",
    copyright: "© All rights reserved.",
    disqusShortname: "",
    postsPerPage: 4,
    googleAnalyticsId: "",
    plugins: [`gatsby-plugin-netlify-cms`],
    menu: [
        {
            label: "Articles",
            path: "/",
        },
        {
            label: "About me",
            path: "/pages/about",
        },
        {
            label: "Contact me",
            path: "/pages/contacts",
        },
    ],
    author: {
        name: "Nedim Omerovic",
        photo: "/myPhoto.png",
        bio: "Fullstack Web Developer",
        contacts: {
            email: "civoremon@gmail.com",
            twitter: "#",
            telegram: "#",
            github: "Civoremo",
            rss: "#",
            vkontakte: "#",
        },
    },
};
