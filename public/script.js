import { displayContacts, displayCourse, displayInfo, displayMessageFrom, displayReviews, displaySelection, displaySocialMedias, } from "./classes/content.js";
import { course, aboutUs, MissionAndVission, Reviews, contactUs, courseList, yearList, messageFromtheFounder, SocialMedias, } from "./data/data.js";
const toggleNavbar = document.querySelector(".toggle-navbar");
const links = document.querySelector(".links");
const navlink = document.querySelectorAll("a");
const courseCont = document.querySelector(".courses");
const aboutUsCont = document.querySelector(".about-us-info > div");
const moreInfoCont = document.querySelector(".more-info");
const applyCont = document.querySelector(".apply-form");
const messageCont = document.querySelector(".founder-message");
const modalCont = document.querySelectorAll(".modal");
const reviewsCont = document.querySelector(".reviews-container");
const allReviewsMainCont = document.querySelector(".reviews-section");
const contactsCont = document.querySelector(".contacts");
const allReviewsCont = document.querySelector(".all-reviews");
const courseSelectionCont = document.getElementById("course");
const socialMediasCont = document.querySelector(".social-medias");
const ratingsSelections = document.querySelectorAll(".rating");
const submitbtn = document.getElementById("submit-btn");
const closebtn = document.getElementById("close-btn");
const allReviewbtn = document.querySelector(".all-reviews-btn");
const formMessage = document.getElementById("message");
const firstnameEl = document.getElementById("firstname");
const emailEl = document.getElementById("email");
const lastnameEl = document.getElementById("lastname");
const courseEl = document.getElementById("course");
const yearEl = document.getElementById("year");
let userInfo = {
    firstname: "",
    lastname: "",
    email: "",
    course: "",
    year: "",
};
let screenWidth = window.innerWidth;
let timer;
navlink.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const id = e.target.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        window.scrollTo({
            left: 0,
            top: element.offsetTop - 100,
        });
        links.classList.remove("show-links");
    });
});
ratingsSelections.forEach((option) => {
    option.addEventListener("click", (e) => {
        const selected = e.target.id;
        if (selected == "all") {
            filterReviews(Reviews);
        }
        else {
            const filteredReviews = Reviews.filter(({ ratings }) => ratings == parseInt(selected));
            filterReviews(filteredReviews);
        }
    });
});
toggleNavbar.addEventListener("click", () => {
    if (links.classList.contains("show-links")) {
        links.classList.remove("show-links");
    }
    else {
        links.classList.add("show-links");
    }
});
allReviewbtn.addEventListener("click", () => {
    allReviewsMainCont.classList.add("show-modal");
});
submitbtn.addEventListener("click", (e) => {
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
    }
    else {
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
    modal.addEventListener("click", (e) => {
        const classname = e.target.className;
        if (classname.includes("modal")) {
            if (classname.includes("reviews-section")) {
                allReviewsMainCont.classList.remove("show-modal");
            }
            else {
                applyCont.classList.remove("show-modal");
            }
        }
    });
});
window.addEventListener("resize", () => checkScreenWidth());
window.addEventListener("DOMContentLoaded", () => {
    const displayCourseContent = new displayCourse(course);
    displayCourseContent.format(courseCont);
    const applybtns = document.querySelectorAll("#apply-btn");
    applybtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const applyCont = document.querySelector(".apply-form");
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
window.addEventListener("click", (e) => {
    const classname = e.target.className;
    if (classname == "fa-solid fa-bars") {
        return;
    }
    else if (classname != "link" && links.classList.contains("show-links")) {
        links.classList.remove("show-links");
    }
});
function checkScreenWidth() {
    screenWidth = window.innerWidth;
    if (screenWidth <= 700) {
        toggleNavbar.classList.add("show-navbar");
    }
    else {
        toggleNavbar.classList.remove("show-navbar");
    }
}
function filterReviews(reviews) {
    const displayAllReviewsContent = new displayReviews(reviews);
    displayAllReviewsContent.format(allReviewsCont);
}
