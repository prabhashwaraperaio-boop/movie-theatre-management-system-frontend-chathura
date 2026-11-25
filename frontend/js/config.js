
/**
 * CineLux — Central Application Configuration.
 *
 * API Base URL:
 *
 * 1. Local development using Live Server:
 *    Connects to the backend on localhost:4000.
 *
 * 2. Local development using Express:
 *    Uses relative URLs.
 *
 * 3. Production hosting (Render):
 *    Uses relative URLs so frontend and backend
 *    communicate through the same domain.
 */

// Detect local development environment
const LOCAL_HOSTS = new Set([
  "localhost",
  "127.0.0.1",
  "[::1]",
]);

const isFileProtocol =
  window.location.protocol === "file:";

const isLocalHost =
  LOCAL_HOSTS.has(window.location.hostname);

const isLocalFrontendServer =
  isLocalHost && window.location.port !== "4000";

// Central API Base URL
export const API_BASE_URL = isFileProtocol
  ? "http://localhost:4000"
  : isLocalFrontendServer
    ? `${window.location.protocol}//${window.location.hostname}:4000`
    : "";

// Application Information
export const APP_NAME = "CineLux";
export const SITE_NAME = "CineLux";
export const APP_TAGLINE = "Premium Cinema Experience";
export const CURRENCY = "USD";

// Application Rules
export const RULES = {
  MOVIES_MAX_LIMIT: 50,
  MAX_SEATS_PER_BOOKING: 8,
  HOLD_MINUTES: 10,
};

// Application Pages
export const PAGES = {
  home: "index.html",
  movies: "movies.html",
  movieDetails: "movie-details.html",
  seatSelection: "seat-selection.html",
  checkout: "checkout.html",
  bookingDetails: "booking-details.html",
  myBookings: "my-bookings.html",
  login: "login.html",
  register: "register.html",
  account: "account.html",

  adminDashboard: "admin/dashboard.html",
  adminMovies: "admin/movies.html",
  adminScreens: "admin/screens.html",
  adminShowtimes: "admin/showtimes.html",

  staffLookup: "staff/booking-lookup.html",
};
