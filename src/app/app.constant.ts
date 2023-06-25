export const GlobalComponent = {
  // API_URL_LOCAL: "http://localhost:3000/api/",
  API_URL_LOCAL: "https://portal.u-link.asia/api",
  // API_URL_LOCAL: "https://salonspa.mom/api/",
  // API_URL_LOCAL: "https://salonspa.onrender.com/api/",
  // API_URL_LOCAL: "http://54.252.69.198:3000/api/",
  // API_URL_LOCAL: "http://123.25.20.210:3000/api/",
  // SOCKET_ENDPOINT: "http://localhost:3000",
  SOCKET_ENDPOINT: "https://salonspa.click",
  // SOCKET_ENDPOINT: "https://salonspa.mom",
  // SOCKET_ENDPOINT: "https://salonspa.onrender.com",
  // SOCKET_ENDPOINT: "http://54.252.69.198:3000",
  // SOCKET_ENDPOINT: "http://123.25.20.210:3000",
  SOCKET_ROOM_ID: "SOCKET_ROOM_ID",
  SOCKET_ROOM_ID_NOTIFY: "ROOM_ID_NOTIFY",
  SOCKET_MESSAGE: "MESSAGE",
  SOCKET_BOOKING: "BOOKING",
  PAYMENT_SUCCESS: "PAYMENT_SUCCESS",
  ACESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  CUSTOMER_KEY: "currentUser",
  ITEMS_PER_PAGE: 7,
  MAX_FILE_SIZE: 5,
  CARD_LOCAL_STORAGE: "card",
  DISCOUNT_LOCAL_STORAGE: "discount",
  PERCENT_LOCAL_STORAGE: "percent",
  PUBLIC_KEY: "PUBLIC_KEY",
  ID_BOOKING: "ID_BOOKING",
  SOCKET_ADMIN: "SOCKET_ADMIN",
};

export const FilterAll = {
  page: 1,
  size: 1000,
};

export interface Filter {
  page?: number;
  size?: number;
  search?: string;
  start?: string;
  end?: string;
  status?: String;
  bookingId?: string;
  event?: string;
}

export enum Gender {
  Male = "Male",
  Female = "Female",
}

export enum ColorClass {
  primary = "badge-soft-primary",
  success = "badge-soft-success",
  danger = "badge-soft-danger",
  warning = "badge-soft-warning",
}

export enum UserStatus {
  Activated = "Activated",
  PendingVerify = "PendingVerify",
  Deactivated = "Deactivated",
}

export enum TypePayment {
  DIRECT_CASH = "direct-cash",
  CARD_CREDIT = "card-credit",
  ONLINE_PAYMNET = "online-payment",
}

export enum RoleSpa {
  ROLE_ADMIN = "ADMIN",
  ROLE_MANAGER = "MGMT",
  ROLE_EMPLOYEE = "EMP",
  ROLE_USER = "USER",
}

export enum TypeNotify {
  PAYMENT = "PAYMENT",
  BOOKING = "BOOKING",
  USER = "USER",
  CHAT = "CHAT",
}
