let profiles = [
  {
    name: "Jess",
    age: 29,
    prompt: "Two truths and a lie: I ran a marathon, I met Drake, I hate pizza.",
    photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Aiden",
    age: 32,
    prompt: "Ask me about my dog and you'll win my heart.",
    photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Maya",
    age: 26,
    prompt: "I’ve been skydiving twice and survived both.",
    photo: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=600&q=80"
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

