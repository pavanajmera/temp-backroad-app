import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";


export const pageLinks = [
    {id: 1, url: '#home', name: 'home'},
    {id: 2, url: '#about', name: 'about'},
    {id: 3, url: '#services', name: 'services'},
    {id: 4, url: '#tours', name: 'tours'}
]

export const socialLinks = [
    {id:1, url: 'https://www.twitter.com', icon: 'fab fa-facebook'},
    {id:2, url: 'https://www.twitter.com', icon: 'fab fa-twitter'},
    {id:3, url: 'https://www.twitter.com', icon: 'fab fa-squarespace'}
]

export const services = [
    {
        id:1, 
        icon: 'fas fa-wallet fa-fw',
        title: 'saving money',
        text: "Lorem ipsum dolor sit amet consectetur official."
    },
    {
        id:2, 
        icon: 'fas fa-tree fa-fw',
        title:'endless hiking',
        text: "Lorem ipsum dolor sit amet consectetur official."
    },
    {
        id:3,
        icon: 'fas fa-socks fa-fw',
        title:'amazing comfort',
        text: "Lorem ipsum dolor sit amet consectetur officia."
    }
]

export const tours = [
    {
        id: 1,
        image: tour1,
        date: "august 26th, 2020",
        title: "Tibet Adventure",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
        name:"fas fa-map",
        place:"china",
        days: "6 days",
        price: "from $21000"
    },
    {
        id: 2, 
        image: tour2,
        date: "october 1th, 2020",
        title: "best of java",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
        name:"fas fa-map",
        place:"indonesia",
        days: "11 days",
        price: "from $1400"
    },
    {
        id: 3,
        image: tour3,
        date: "september 15th, 2020",
        title: "explore hong kong",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
        name:"fas fa-map",
        place:"hong kong",
        days: "8 days",
        price: "from $5000"
    },
    {
        id: 4,
        image: tour4,
        date: "december 5th, 2019",
        title: "kenya highlights",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
        name:"fas fa-map",
        place:"kenya",
        days: "20 days",
        price: "from $3300"
    }
]