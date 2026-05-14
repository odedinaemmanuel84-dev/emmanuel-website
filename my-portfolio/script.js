// Loading Screen
window.addEventListener("load", () => {
  document.querySelector(".loader").style.display = "none";
});

// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar a");

// Open Menu
menuBtn.onclick = () => {
  navbar.classList.toggle("active");
};

// Close Menu Automatically After Clicking Link
navLinks.forEach(link => {

  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });

});

// Typing Effect
const typing = document.querySelector(".typing");

const words = [
  "Full Stack Developer",
  "Frontend Designer",
  "UI/UX Creator",
  "Freelance Web Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

  const currentWord = words[wordIndex];

  if(!deleting){
    typing.textContent = currentWord.substring(0, charIndex++);
  }else{
    typing.textContent = currentWord.substring(0, charIndex--);
  }

  let speed = deleting ? 60 : 120;

  if(charIndex === currentWord.length + 1){
    deleting = true;
    speed = 1000;
  }

  if(charIndex === 0){
    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

  reveals.forEach(reveal => {

    const windowHeight = window.innerHeight;
    const revealTop = reveal.getBoundingClientRect().top;

    if(revealTop < windowHeight - 100){
      reveal.classList.add("active");
    }

  });

});

// Dark Mode Toggle
const themeToggle = document.querySelector(".theme-toggle");

themeToggle.onclick = () => {
  document.body.classList.toggle("light-mode");
};

// Three.js Background
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth/window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  alpha:true
});

renderer.setSize(window.innerWidth, window.innerHeight);

document.getElementById("particles-js")
.appendChild(renderer.domElement);

const geometry = new THREE.TorusKnotGeometry(10,3,100,16);

const material = new THREE.MeshBasicMaterial({
  color:0x00f7ff,
  wireframe:true
});

const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

camera.position.z = 30;

function animate(){

  requestAnimationFrame(animate);

  torus.rotation.x += 0.003;
  torus.rotation.y += 0.005;

  renderer.render(scene,camera);
}

animate();

window.addEventListener("resize", () => {

  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth,window.innerHeight);

});

// Contact Form Success Message
const contactForm = document.getElementById("contactForm");
const formMessage = document.querySelector(".form-message");

contactForm.addEventListener("submit", async (e) => {

  e.preventDefault();

  const formData = new FormData(contactForm);

  const response = await fetch(contactForm.action, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json"
    }
  });

  if(response.ok){

    formMessage.innerHTML =
    "✅ Message sent successfully!";

    contactForm.reset();

  }else{

    formMessage.innerHTML =
    "❌ Something went wrong. Try again.";

  }

// Auto Clear Form After Submit

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", async function(e){

  e.preventDefault();

  const formData = new FormData(contactForm);

  const response = await fetch(contactForm.action,{
    method:"POST",
    body:formData,
    headers:{
      'Accept':'application/json'
    }
  });

  if(response.ok){

    alert("Message sent successfully!");

    contactForm.reset();

  }else{

    alert("Something went wrong!");

  }

});
