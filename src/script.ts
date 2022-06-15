import {
  displayContacts,
  displayCourse,
  displayInfo,
  displayMessageFrom,
  displayReviews,
  displaySelection,
  displaySocialMedias,
} from "./classes/content.js";
import {
  course,
  aboutUs,
  MissionAndVission,
  Reviews,
  contactUs,
  courseList,
  yearList,
  messageFromtheFounder,
  SocialMedias,
} from "./data/data.js";
import { userInfo, userReviews } from "./interfaces/interfaces.js";

const toggleNavbar = document.querySelector(".toggle-navbar") as HTMLDivElement;
const links = document.querySelector(".links") as HTMLDivElement;
const navlink = document.querySelectorAll("a") as NodeListOf<HTMLAnchorElement>;

const courseCont = document.querySelector(".courses") as HTMLDivElement;
const aboutUsCont = document.querySelector(
  ".about-us-info > div"
) as HTMLDivElement;
const moreInfoCont = document.querySelector(".more-info") as HTMLDivElement;
const applyCont = document.querySelector(".apply-form") as HTMLElement;
const messageCont = document.querySelector(".founder-message") as HTMLElement;
const modalCont = document.querySelectorAll(
  ".modal"
) as NodeListOf<HTMLElement>;
const reviewsCont = document.querySelector(
  ".reviews-container"
) as HTMLDivElement;
const allReviewsMainCont = document.querySelector(
  ".reviews-section"
) as HTMLDivElement;
const contactsCont = document.querySelector(".contacts") as HTMLDivElement;
const allReviewsCont = document.querySelector(".all-reviews") as HTMLDivElement;
const courseSelectionCont = document.getElementById(
  "course"
) as HTMLSelectElement;
const socialMediasCont = document.querySelector(
  ".social-medias"
) as HTMLDivElement;

const ratingsSelections = document.querySelectorAll(
  ".rating"
) as NodeListOf<HTMLSpanElement>;

const submitbtn = document.getElementById("submit-btn") as HTMLButtonElement;
const closebtn = document.getElementById("close-btn") as HTMLButtonElement;
const allReviewbtn = document.querySelector(
  ".all-reviews-btn"
) as HTMLButtonElement;

const formMessage = document.getElementById("message") as HTMLSpanElement;
const firstnameEl = document.getElementById("firstname") as HTMLInputElement;
const emailEl = document.getElementById("email") as HTMLInputElement;
const lastnameEl = document.getElementById("lastname") as HTMLInputElement;
const courseEl = document.getElementById("course") as HTMLSelectElement;
const yearEl = document.getElementById("year") as HTMLSelectElement;

let userInfo: userInfo = {
  firstname: "",
  lastname: "",
  email: "",
  course: "",
  year: "",
};

let screenWidth: number = window.innerWidth;
let timer: number;

navlink.forEach((link) => {
  link.addEventListener("click", (e: Event) => {
    e.preventDefault();
    const id: string = (e.target as HTMLElement).getAttribute("href")!.slice(1);
    const element = document.getElementById(id) as HTMLElement;

    window.scrollTo({
      left: 0,
      top: element.offsetTop - 100,
    });

    links.classList.remove("show-links");
  });
});

ratingsSelections.forEach((option) => {
  option.addEventListener("click", (e: Event) => {
    const selected: string = (e.target as HTMLElement).id;
    if (selected == "all") {
      filterReviews(Reviews);
    } else {
      const filteredReviews = Reviews.filter(
        ({ ratings }) => ratings == parseInt(selected)
      );
      filterReviews(filteredReviews);
    }
  });
});

toggleNavbar.addEventListener("click", () => {
  if (links.classList.contains("show-links")) {
    links.classList.remove("show-links");
  } else {
    links.classList.add("show-links");
  }
});

allReviewbtn.addEventListener("click", () => {
  allReviewsMainCont.classList.add("show-modal");
});

submitbtn.addEventListener("click", (e: Event) => {
  e.preventDefault();
  const fname = firstnameEl.value;
  const lname = lastnameEl.value;
  const email = emailEl.value;
  const course = courseList[courseEl.selectedIndex];
  const year = yearList[yearEl.selectedIndex];

  if (fname && lname && email && course && year) {
    userInfo.firstname = fname;
    userInfo.lastname = lname;
    userInfo.email = email;
    userInfo.course = course;
    userInfo.year = year;
    formMessage.textContent = "Thank you for applying!";
  } else {
    formMessage.textContent = "all fields are required!";
  }

  clearTimeout(timer);
  timer = window.setTimeout(() => {
    formMessage.textContent = "";
  }, 1300);
});

closebtn.addEventListener("click", () => {
  applyCont.classList.remove("show-modal");
});

modalCont.forEach((modal) => {
  modal.addEventListener("click", (e: Event) => {
    const classname = (e.target as HTMLElement).className;
    if (classname.includes("modal")) {
      if (classname.includes("reviews-section")) {
        allReviewsMainCont.classList.remove("show-modal");
      } else {
        applyCont.classList.remove("show-modal");
      }
    }
  });
});

window.addEventListener("resize", () => checkScreenWidth());

window.addEventListener("DOMContentLoaded", () => {
  const displayCourseContent = new displayCourse(course);
  displayCourseContent.format(courseCont);

  const applybtns = document.querySelectorAll(
    "#apply-btn"
  ) as NodeListOf<HTMLButtonElement>;

  applybtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const applyCont = document.querySelector(".apply-form") as HTMLElement;
      applyCont.classList.add("show-modal");
    });
  });

  const displayAboutUsContent = new displayInfo(aboutUs);
  displayAboutUsContent.format(aboutUsCont);

  const displayMoreInfoContent = new displayInfo(MissionAndVission);
  displayMoreInfoContent.format(moreInfoCont);

  const goodReviews = Reviews.filter(({ ratings }) => ratings == 5);
  const displayGoodReviewsContent = new displayReviews(goodReviews);
  displayGoodReviewsContent.format(reviewsCont);

  const displayContactsContent = new displayContacts(contactUs);
  displayContactsContent.format(contactsCont);

  const displayMessageContent = new displayMessageFrom(messageFromtheFounder);
  displayMessageContent.format(messageCont);

  const displaySocialMediaContent = new displaySocialMedias(SocialMedias);
  displaySocialMediaContent.format(socialMediasCont);

  const displayCourseSelectionContent = new displaySelection(courseList);
  displayCourseSelectionContent.format(courseSelectionCont);

  filterReviews(Reviews);

  checkScreenWidth();
});

window.addEventListener("click", (e: Event) => {
  const classname = (e.target as HTMLElement).className;
  if (classname == "fa-solid fa-bars") {
    return;
  } else if (classname != "link" && links.classList.contains("show-links")) {
    links.classList.remove("show-links");
  }
});

function checkScreenWidth() {
  screenWidth = window.innerWidth;
  if (screenWidth <= 700) {
    toggleNavbar.classList.add("show-navbar");
  } else {
    toggleNavbar.classList.remove("show-navbar");
  }
}

function filterReviews(reviews: userReviews[]) {
  const displayAllReviewsContent = new displayReviews(reviews);
  displayAllReviewsContent.format(allReviewsCont);
}
