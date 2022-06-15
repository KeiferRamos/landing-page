import {
  infoIF,
  courseIF,
  userReviews,
  contacts,
  MessageFrom,
  socialMedias,
} from "../interfaces/interfaces";

export const course: courseIF[] = [
  {
    title: "Architecture",
    img: "https://media.istockphoto.com/photos/two-business-man-construction-site-engineer-engineering-tools-on-picture-id1331579408?k=20&m=1331579408&s=612x612&w=0&h=j_xrBn-BxKlSnn-0-PtHEzY1fPH-Fb7yS_hQ4YM_F_o=",
    details: [
      "the art or science of building specifically",
      "the art or practice of designing and building structures andespecially habitable ones.",
      "formation or construction resulting from or as if from a consciousact the architecture of the garden.",
    ],
    price: 29.99,
  },
  {
    title: "Entrepreneurship",
    img: "https://images.unsplash.com/photo-1604933762023-7213af7ff7a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    details: [
      "Entrepreneurship is the ability and readiness to develop, organize and run a business enterprise,",
      "along with any of its uncertainties in order to make a profit.",
      " The most prominent example of entrepreneurship is the starting of new businesses.",
    ],
    price: 10.99,
  },
  {
    title: "Computer Science",
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    details: [
      "study of computers and computing as well as their theoretical and practical applications.",
      "Computer science applies the principles of mathematics, engineering, and logic to a plethora of functions,",
      " including algorithm formulation, software and hardware development, and artificial intelligence.",
    ],
    price: 49.99,
  },
  {
    title: "Accounting",
    img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    details: [
      "Accounting is a term that describes the process of consolidating financial information to make it clear and understandable for all stakeholders and shareholders.",
      "The main goal of accounting is to record and report a company's financial transactions, financial performance, and cash flows.",
    ],
    price: 9.99,
  },
  {
    title: "Arts and Design",
    img: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    details: [
      "Learning through and about the arts enriches the experience of studying while at school as well as preparing students for life after school.",
      "Arts subjects encourage self-expression and creativity and can build confidence as well as a sense of individual identity.",
    ],
    price: 9.99,
  },
];

export const aboutUs: infoIF[] = [
  {
    title: "What are we?",
    details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In itaque
              aliquam veniam quod culpa necessitatibus cumque dolorum numquam,
              dolores voluptates aut error cum, facilis recusandae enim nulla?
              Ratione, culpa ipsum!Lorem ipsum dolor sit amet consectetur
              adipisicing elit. In itaque aliquam veniam quod culpa
              necessitatibus cumque dolorum numquam, dolores voluptates aut
              error cum, facilis recusandae enim nulla? Ratione, culpa
              ipsum!Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              itaque aliquam veniam quod culpa necessitatibus cumque dolorum
              numquam, dolores voluptates aut error cum, facilis recusandae enim
              nulla? Ratione, culpa ipsum!`,
  },
  {
    title: "What we can do?",
    details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In itaque
              aliquam veniam quod culpa necessitatibus cumque dolorum numquam,
              dolores voluptates aut error cum, facilis recusandae enim nulla?
              Ratione, culpa ipsum!Lorem ipsum dolor sit amet consectetur
              adipisicing elit. In itaque aliquam veniam quod culpa
              necessitatibus cumque dolorum numquam, dolores voluptates aut
              error cum, facilis recusandae enim nulla? Ratione, culpa
              ipsum!Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              itaque aliquam veniam quod culpa necessitatibus cumque dolorum
              numquam, dolores voluptates aut error cum, facilis recusandae enim
              nulla? Ratione, culpa ipsum!`,
  },
];

export const MissionAndVission: infoIF[] = [
  {
    title: "Our Mission",
    details: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, fuga? 
    Sunt doloribus quaerat corporis illo sed voluptatibus beatae aperiam obcaecati?`,
  },
  {
    title: "Our Vision",
    details: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, praesentium aliquam adipisci eius impedit, corrupti accusantium reprehenderit labore, dicta provident tempora quos expedita mollitia nulla nihil? Aliquid quidem natus cupiditate?`,
  },
  {
    title: "Our Goal",
    details: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, fuga? Sunt doloribus quaerat corporis illo sed voluptatibus beatae aperiam obcaecati?`,
  },
];

export const Reviews: userReviews[] = [
  {
    userImg:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    username: "Christine Doe",
    ratings: 5,
    comments: `Lorem ipsum, dolor sit amet
    consectetur adipisicing elit. Eligendi cupiditate dolorem eius nihil
    recusandae deleniti explicabo incidunt dignissimos! Atque, unde.`,
  },
  {
    userImg:
      "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1506&q=80",
    username: "Allen Doe",
    ratings: 5,
    comments: `Lorem ipsum, dolor sit amet
    consectetur adipisicing elit. Eligendi cupiditate dolorem eius nihil
    recusandae deleniti explicabo incidunt dignissimos! Atque, unde.`,
  },
  {
    userImg:
      "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
    username: "Chloe Santos",
    ratings: 5,
    comments: `Lorem ipsum, dolor sit amet
    consectetur adipisicing elit. Eligendi cupiditate dolorem eius nihil
    recusandae deleniti explicabo incidunt dignissimos! Atque, unde.`,
  },
  {
    userImg:
      "https://images.unsplash.com/photo-1534184241306-2d7eb0ddbbde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
    username: "Alex Zandra",
    ratings: 3,
    comments: `Lorem ipsum, dolor sit amet
    consectetur adipisicing elit. Eligendi cupiditate dolorem eius nihil
    recusandae deleniti explicabo incidunt dignissimos! Atque, unde.`,
  },
  {
    userImg:
      "https://images.unsplash.com/photo-1484684096794-03e03b5e713e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    username: "Christopher Luther",
    ratings: 1,
    comments: `Lorem ipsum, dolor sit amet
    consectetur adipisicing elit. Eligendi cupiditate dolorem eius nihil
    recusandae deleniti explicabo incidunt dignissimos! Atque, unde.`,
  },
  {
    userImg:
      "https://images.unsplash.com/photo-1519625594242-7db544018926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    username: "Mia Santiago",
    ratings: 3,
    comments: `Lorem ipsum, dolor sit amet
    consectetur adipisicing elit. Eligendi cupiditate dolorem eius nihil
    recusandae deleniti explicabo incidunt dignissimos! Atque, unde.`,
  },
  {
    userImg:
      "https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=894&q=80",
    username: "Garen Maguire",
    ratings: 2,
    comments: `Lorem ipsum, dolor sit amet
    consectetur adipisicing elit. Eligendi cupiditate dolorem eius nihil
    recusandae deleniti explicabo incidunt dignissimos! Atque, unde.`,
  },
  {
    userImg:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    username: "John Smilga",
    ratings: 4,
    comments: `Lorem ipsum, dolor sit amet
    consectetur adipisicing elit. Eligendi cupiditate dolorem eius nihil
    recusandae deleniti explicabo incidunt dignissimos! Atque, unde.`,
  },
  {
    userImg:
      "https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    username: "John Miles",
    ratings: 4,
    comments: `Lorem ipsum, dolor sit amet
    consectetur adipisicing elit. Eligendi cupiditate dolorem eius nihil
    recusandae deleniti explicabo incidunt dignissimos! Atque, unde.`,
  },
  {
    userImg:
      "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    username: "Willie Ong",
    ratings: 1,
    comments: `Lorem ipsum, dolor sit amet
    consectetur adipisicing elit. Eligendi cupiditate dolorem eius nihil
    recusandae deleniti explicabo incidunt dignissimos! Atque, unde.`,
  },
  {
    userImg:
      "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    username: "Karen Davilla",
    ratings: 3,
    comments: `Lorem ipsum, dolor sit amet
    consectetur adipisicing elit. Eligendi cupiditate dolorem eius nihil
    recusandae deleniti explicabo incidunt dignissimos! Atque, unde.`,
  },
];

export const contactUs: contacts[] = [
  { info: "0912-345-7734", icon: `<i class="fa-solid fa-phone"></i>` },
  {
    info: "123 Main Street, New York, NY 10030",
    icon: `<i class="fa-solid fa-location-dot"></i>`,
  },
  {
    info: "TheAcademy@gmail.com",
    icon: `<i class="fa-solid fa-envelope"></i>`,
  },
];

export const courseList: string[] = [
  "Computer Science",
  "Accounting",
  "Arts and Design",
  "Entrepreneurship",
  "Architecture",
];

export const yearList: string[] = [
  "1st Year",
  "1nd Year",
  "3rd Year",
  "4th Year",
];

export const messageFromtheFounder: MessageFrom = {
  messageFrom: "Founder",
  messengerImg:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  messages: [
    ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
      accusamus ipsa. Cupiditate rem necessitatibus iure facere sequi, a cum
      fugiat exercitationem vero tempora consectetur ratione! Esse
      aspernatur eum saepe quas?`,
    ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum cumque
      eveniet harum dolorum placeat unde temporibus at aliquam cupiditate
      facere explicabo fuga impedit aspernatur numquam ea mollitia quisquam,
      esse, consequuntur consequatur. Voluptatibus, hic laboriosam
      distinctio accusantium repellat eligendi blanditiis, voluptate ut
      molestias vero deserunt eius obcaecati quibusdam vitae sunt quos!`,
  ],
};

export const SocialMedias: socialMedias[] = [
  { path: "#", icon: `<i class="fa-brands fa-youtube"></i>` },
  {
    path: "#",
    icon: `<i class="fa-brands fa-facebook-square"></i>`,
  },
  {
    path: "#",
    icon: `<i class="fa-brands fa-twitter"></i>`,
  },
  {
    path: "#",
    icon: `<i class="fa-brands fa-pinterest"></i>`,
  },
  {
    path: "#",
    icon: `<i class="fa-brands fa-github"></i>`,
  },
  {
    path: "#",
    icon: `<i class="fa-brands fa-instagram"></i>`,
  },
];
