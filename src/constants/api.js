export const abortController = new AbortController();
const KEY = "5ea81ad23851a633426eb802";
export const BASE_URL =
  "https://cors-anywhere.herokuapp.com/https://us-central1-noroff-final-exam.cloudfunctions.net/api/v1/";
export const headers = {
  "Content-Type": "application/json",
  key: KEY,
  signal: abortController.signal,
};
export const DELETE = "DELETE";
