export interface courseIF {
  title: string;
  img: string;
  details: string[];
  price: number;
}

export interface infoIF {
  title: string;
  details: string;
}

export interface hasFormatter {
  format: (div: HTMLDivElement) => void;
}

export interface userReviews {
  userImg: string;
  username: string;
  comments: string;
  ratings: number;
}

export interface contacts {
  info: string;
  icon: string;
}

export interface userInfo {
  firstname: string;
  lastname: string;
  email: string;
  course: string;
  year: string;
}

export interface MessageFrom {
  messageFrom: string;
  messengerImg: string;
  messages: string[];
}

export interface socialMedias {
  path: string;
  icon: string;
}
