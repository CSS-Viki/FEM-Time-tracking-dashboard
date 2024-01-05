document.addEventListener("DOMContentLoaded", function() {
  const workEl = document.querySelector(".card-work");
  const playEl = document.querySelector(".card-play");
  const studyEl = document.querySelector(".card-study");
  const exerciseEl = document.querySelector(".card-exercise");
  const socialEl = document.querySelector(".card-social");
  const selfCareEl = document.querySelector(".card-self-care");

  workEl.addEventListener("mouseover", (e) => {
    console.log(e.target.textContent);
  });

  async function inputJsonData() {
    try {
      const response = await fetch("./data.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        const data = await response.json();
        console.log(data[1].title);
        workEl.textContent = data[0].title;
        playEl.textContent = data[1].title;
        studyEl.textContent = data[2].title;
        exerciseEl.textContent = data[3].title;
        socialEl.textContent = data[4].title;
        selfCareEl.textContent = data[5].title;
      }
    } catch (error) {
      console.warn(error);
    }
  }

  inputJsonData();
});
