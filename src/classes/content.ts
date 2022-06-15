import {
  infoIF,
  courseIF,
  hasFormatter,
  userReviews,
  contacts,
  MessageFrom,
  socialMedias,
} from "../interfaces/interfaces.js";

class displayCourse implements hasFormatter {
  constructor(private course: courseIF[]) {}

  format(div: HTMLDivElement) {
    const content = this.course.map(({ title, img, price, details }) => {
      return `
            <div>
                <img src=${img} alt="course-image"/>
                <h2>${title}</h2>
                <ul>
                    ${this.displayDetails(details)}
                </ul>
                <div>
                    <p>Price: <span>$${price} per month</span></p>
                    <button id="apply-btn" class="btn">Apply now</button>
                </div>
            </div>`;
    });

    div.innerHTML = content.join("");
  }

  displayDetails(details: string[]) {
    return details.map((detail) => `<li>${detail}</li>`).join("");
  }
}

class displayInfo implements hasFormatter {
  constructor(private info: infoIF[]) {}

  format(div: HTMLDivElement) {
    const content = this.info.map(({ title, details }) => {
      return `
        <div>
          <h3>${title}</h3>
          <p>${details}</p>
        </div>`;
    });

    div.innerHTML = content.join("");
  }
}

class displayReviews implements hasFormatter {
  constructor(private reviews: userReviews[]) {}

  format(div: HTMLDivElement) {
    const content = this.reviews.map((review) => {
      const { userImg, username, comments, ratings } = review;
      return `
        <div class="review">
          <div class="profile">
            <img src=${userImg} alt="user-profile"/>
          </div>
          <h2 class="reviewer-name">${username}</h2>
          <p class="comment">
            <i class="fa-solid fa-quote-left"></i>
            ${comments}
            <i class="fa-solid fa-quote-right"></i>
          </p>
          <div class="ratings">
            ${this.displayRatings(ratings)}
          </div>
        </div>`;
    });

    div.innerHTML = content.join("");
  }

  displayRatings(rate: number): string {
    const rateCount: number[] = [];

    for (var i = 1; i <= rate; i++) {
      rateCount.push(i);
    }

    const ratings = Array.from(rateCount).map(() => {
      return `<i class="fa-solid fa-star"></i>`;
    });

    return ratings.join("");
  }
}

class displayContacts implements hasFormatter {
  constructor(private contacts: contacts[]) {}

  format(div: InnerHTML) {
    const content = this.contacts.map(({ icon, info }) => {
      return `
        <div>
          ${icon}
          <p>${info}</p>
        </div>`;
    });

    div.innerHTML = content.join("");
  }
}

class displayMessageFrom implements hasFormatter {
  constructor(private message: MessageFrom) {}

  format(div: HTMLElement) {
    const { messages, messengerImg, messageFrom } = this.message;
    div.innerHTML = `
      <div class="founder-img">
        <img src=${messengerImg} alt="messenger-img" />
        </div>
        <div class="message">
          <h1 class="header">Message From the ${messageFrom}</h1>
          ${messages.map((message) => `<p>${message}</p>`).join("")}
      </div>`;
  }
}

class displaySocialMedias implements hasFormatter {
  constructor(private socialMedias: socialMedias[]) {}

  format(div: HTMLDivElement) {
    const content = this.socialMedias.map(({ icon, path }) => {
      return `
        <a href=${path} target="_blank">
          ${icon}
        </a>`;
    });

    div.innerHTML = content.join("");
  }
}

class displaySelection {
  constructor(private socialMedias: string[]) {}

  format(Select: HTMLSelectElement) {
    Select.innerHTML = this.socialMedias
      .map((option) => `<option value=${option}>${option}</option>`)
      .join("");
  }
}

export {
  displayCourse,
  displayInfo,
  displayReviews,
  displayContacts,
  displayMessageFrom,
  displaySocialMedias,
  displaySelection,
};
