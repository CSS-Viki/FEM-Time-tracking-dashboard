const workEl = document.querySelector(".card-work");
const playEl = document.querySelector(".card-play");
const studyEl = document.querySelector(".card-study");
const exerciseEl = document.querySelector(".card-exercise");
const socialEl = document.querySelector(".card-social");
const selfCareEl = document.querySelector(".card-self-care");

const dailyTracking = document.querySelector(".tracking-periods p:first-child");
const weeklyTracking = document.querySelector(
  ".tracking-periods p:nth-child(2)"
);
const monthlyTracking = document.querySelector(
  ".tracking-periods p:last-child"
);

// Function to update UI based on the selected timeframe
function updateUI(data, timeframe) {
  workEl.textContent = data[0].title;
  playEl.textContent = data[1].title;
  studyEl.textContent = data[2].title;
  exerciseEl.textContent = data[3].title;
  socialEl.textContent = data[4].title;
  selfCareEl.textContent = data[5].title;

  document.querySelector(".work .tracked-time").textContent =
    data[0].timeframes[timeframe].current + "hrs";
  document.querySelector(".work .weekly-tracked-time-previous").textContent =
    data[0].timeframes[timeframe].previous + "hrs";

  document.querySelector(".play .tracked-time").textContent =
    data[1].timeframes[timeframe].current + "hrs";
  document.querySelector(".play .weekly-tracked-time-previous").textContent =
    data[1].timeframes[timeframe].previous + "hrs";

  document.querySelector(".study .tracked-time").textContent =
    data[2].timeframes[timeframe].current + "hrs";
  document.querySelector(".study .weekly-tracked-time-previous").textContent =
    data[2].timeframes[timeframe].previous + "hrs";

  document.querySelector(".exercise .tracked-time").textContent =
    data[3].timeframes[timeframe].current + "hrs";
  document.querySelector(
    ".exercise .weekly-tracked-time-previous"
  ).textContent = data[3].timeframes[timeframe].previous + "hrs";

  document.querySelector(".social .tracked-time").textContent =
    data[4].timeframes[timeframe].current + "hrs";
  document.querySelector(".social .weekly-tracked-time-previous").textContent =
    data[4].timeframes[timeframe].previous + "hrs";

  document.querySelector(".self-care .tracked-time").textContent =
    data[5].timeframes[timeframe].current + "hrs";
  document.querySelector(
    ".self-care .weekly-tracked-time-previous"
  ).textContent = data[5].timeframes[timeframe].previous + "hrs";

  // Set the "active" class to the selected timeframe
  const period = document.querySelectorAll(".tracking-periods p");
  period.forEach((periodTime) => {
    periodTime.classList.remove("active");
  });
  document
    .querySelector(`.tracking-periods p[data-timeframe="${timeframe}"]`)
    .classList.add("active");
}

async function inputJsonData() {
  try {
    const response = await fetch("./data.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      const data = await response.json();
      return data; // Return the data
    }
  } catch (error) {
    console.warn(error);
  }
}

//When the page loads, the weekly tracking times are displayed
document.addEventListener("DOMContentLoaded", async () => {
  const data = await inputJsonData(); // Wait for the data
  updateUI(data, "weekly"); // Call updateUI with the data

  // Set up event listeners for different timeframes
  dailyTracking.addEventListener("click", () => updateUI(data, "daily"));
  weeklyTracking.addEventListener("click", () => updateUI(data, "weekly"));
  monthlyTracking.addEventListener("click", () => updateUI(data, "monthly"));
});
