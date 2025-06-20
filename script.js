let profiles = [
  {
    name: "Jess",
    age: 29,
    prompt: "Two truths and a lie: I ran a marathon, I met Drake, I hate pizza.",
    photo: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Aiden",
    age: 32,
    prompt: "Ask me about my dog and you'll win my heart.",
    photo: "https://randomuser.me/api/portraits/men/33.jpg"
  },
  {
    name: "Maya",
    age: 26,
    prompt: "I’ve been skydiving twice and survived both.",
    photo: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];


let current = 0;

function showProfile() {
  const card = document.getElementById("profile-card");
  const profile = profiles[current];
  if (!profile) {
    card.innerHTML = `<p>No more profiles! 🚀</p>`;
    return;
  }

  card.innerHTML = `
    <img class="profile-pic" src="${profile.photo}" alt="${profile.name}" />
    <h2>${profile.name}, ${profile.age}</h2>
    <p>${profile.prompt}</p>
  `;
}

function animateAndNext(type) {
  const card = document.getElementById("profile-card");
  card.classList.remove("walk-animation", "talk-animation");
  void card.offsetWidth;

  if (type === "walk") {
    card.classList.add("walk-animation");
  } else {
    card.classList.add("talk-animation");
  }

  setTimeout(() => {
    current++;
    showProfile();
  }, 500);
}

document.getElementById("like").onclick = () => {
  animateAndNext("talk");
};

document.getElementById("pass").onclick = () => {
  animateAndNext("walk");
};

showProfile();
let startX = 0;

document.addEventListener("touchstart", (e) => {
  startX = e.changedTouches[0].screenX;
});

document.addEventListener("touchend", (e) => {
  let endX = e.changedTouches[0].screenX;
  if (endX - startX > 50) {
    // Swipe Right = Talk
    animateAndNext("talk");
  } else if (startX - endX > 50) {
    // Swipe Left = Walk
    animateAndNext("walk");
  }
});

