import "./style.css";
const mainImage = document.getElementById("mainImage");
const thumbs = document.querySelectorAll(".thumb");
const leftBtn = document.querySelector(".arrow.left");
const rightBtn = document.querySelector(".arrow.right");
const tableBody = document.getElementById("specTableBody");
const faqItems = document.querySelectorAll(".faq-item");
const faqList = document.getElementById("faqList");
const cardGrid = document.getElementById("cardGrid");
const cardsWrapper = document.getElementById("cardsWrapper");
const track = document.getElementById("testimonialTrack");
const stepper = document.getElementById("stepper");
const titleEl = document.getElementById("stepTitle");
const descEl = document.getElementById("stepDescription");
const pointsEl = document.getElementById("stepPoints");
const imageEl = document.getElementById("stepImage");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const resourcesBody = document.getElementById("resourcesBody");
const modal = document.getElementById("catalogModal");
const openBtn = document.querySelector(".download-btn");
const closeBtn = document.getElementById("closeModal");
const callbackModal = document.getElementById("callbackModal");
const ctaBtn = document.querySelector(".cta-btn");
const closeCallback = document.getElementById("closeCallback");
const container = document.querySelector(".main-slide");
const img = document.getElementById("mainImage");
const lens = document.querySelector(".zoom-lens");
const result = document.getElementById("zoomResult");

let currentIndex = 0;

function updateCarousel(index) {
  mainImage.src = images[index];

  thumbs.forEach((t) => t.classList.remove("active"));
  thumbs[index].classList.add("active");

  currentIndex = index;
}

thumbs.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    updateCarousel(index);
  });
});

rightBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel(currentIndex);
});

leftBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel(currentIndex);
});

specifications.forEach((spec) => {
  const row = document.createElement("tr");

  const parameterCell = document.createElement("td");
  parameterCell.textContent = spec.parameter;

  const valueCell = document.createElement("td");
  valueCell.textContent = spec.value;

  row.appendChild(parameterCell);
  row.appendChild(valueCell);

  tableBody.appendChild(row);
});

featuresData.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("feature-card");

  card.innerHTML = `
    <div class="icon">${item.icon}</div>
    <h4>${item.title}</h4>
    <p>${item.description}</p>
  `;

  cardGrid.appendChild(card);
});

// Render FAQs dynamically
faqData.forEach((faq) => {
  const item = document.createElement("div");

  item.className = "faq-item";

  item.innerHTML = `
    <div class="faq-question">
      ${faq.question}
      <span class="icon">⌄</span>
    </div>
    <div class="faq-answer">
      ${faq.answer}
    </div>
  `;

  faqList.appendChild(item);
});

// Accordion logic

faqList.addEventListener("click", (e) => {
  const question = e.target.closest(".faq-question");
  if (!question) return;

  const item = question.parentElement;
  const icon = question.querySelector(".icon");

  document.querySelectorAll(".faq-item").forEach((faq) => {
    if (faq !== item) {
      faq.classList.remove("active");
      faq.querySelector(".icon").textContent = "⌄";
    }
  });

  item.classList.toggle("active");

  icon.textContent = item.classList.contains("active") ? "⌃" : "⌄";
});

// Render Cards
applicationsData.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("app-card");

  card.innerHTML = `
    <img src="${item.image}" alt="${item.title}" />
    <div class="card-overlay">
      <h4>${item.title}</h4>
      <p>${item.description}</p>
    </div>
  `;

  cardsWrapper.appendChild(card);
});

// Scroll Buttons

nextBtn.addEventListener("click", () => {
  cardsWrapper.scrollBy({ left: 320, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  cardsWrapper.scrollBy({ left: -320, behavior: "smooth" });
});

let currentStep = 0;
let currentSlide = 0;

/* Render Stepper */
stepsData.forEach((step, index) => {
  const btn = document.createElement("div");
  btn.classList.add("step");
  btn.textContent = step.tab;

  if (index === 0) btn.classList.add("active");

  btn.addEventListener("click", () => {
    currentStep = index;
    currentSlide = 0;
    updateContent();
    document
      .querySelectorAll(".step")
      .forEach((s) => s.classList.remove("active"));
    btn.classList.add("active");
  });

  stepper.appendChild(btn);
});

/* Update Content */
function updateContent() {
  const data = stepsData[currentStep];

  titleEl.textContent = data.title;
  descEl.textContent = data.description;

  pointsEl.innerHTML = "";
  data.points.forEach((point) => {
    const li = document.createElement("li");
    li.textContent = point;
    pointsEl.appendChild(li);
  });

  imageEl.src = data.images[currentSlide];
}

/* Next Slide */
function nextSlide() {
  const images = stepsData[currentStep].images;
  currentSlide = (currentSlide + 1) % images.length;
  imageEl.src = images[currentSlide];
}

/* Prev Slide */
function prevSlide() {
  const images = stepsData[currentStep].images;
  currentSlide = (currentSlide - 1 + images.length) % images.length;
  imageEl.src = images[currentSlide];
}

/* Arrow Events */
document.getElementById("nextSlide").addEventListener("click", nextSlide);
document.getElementById("prevSlide").addEventListener("click", prevSlide);

/* Click on Image = Next Slide */
imageEl.addEventListener("click", nextSlide);

updateContent();

// Duplicate data for seamless infinite scroll
const allReviews = [...reviews, ...reviews];

allReviews.forEach((review) => {
  const card = document.createElement("div");
  card.classList.add("testimonial-card");

  card.innerHTML = `
    <div class="quote-icon">“</div>
    <h4>${review.title}</h4>
    <p>${review.content}</p>
    <div class="user">
      <div class="avatar"></div>
      <div class="user-info">
        <strong>${review.name}</strong><br/>
        ${review.role}
      </div>
    </div>
  `;

  track.appendChild(card);
});

const portfolioGrid = document.getElementById("portfolioGrid");

portfolioData.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("portfolio-card");

  card.innerHTML = card.innerHTML = `
  <h4>${item.title}</h4>
  <p>${item.description}</p>

  <div class="card-bottom">
    <img src="${item.image}" alt="${item.title}" />
    <button class="learn-btn">Learn More</button>
  </div>
  `;

  portfolioGrid.appendChild(card);
});

resourcesData.forEach((resource) => {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${resource.title}</td>
    <td class="download-cell">
      <a href="${resource.link}" class="download-btn">
        Download PDF
        <span class="download-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 16L4 17C4 18.6569 5.34315 20 7 20L17 20C18.6569 20 20 18.6569 20 17L20 16M16 12L12 16M12 16L8 12M12 16L12 4" stroke="#2B3990" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>
      </a>
    </td>
  `;

  resourcesBody.appendChild(row);
});

openBtn.addEventListener("click", () => {
  modal.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

ctaBtn.addEventListener("click", () => {
  callbackModal.classList.add("active");
});

closeCallback.addEventListener("click", () => {
  callbackModal.classList.remove("active");
});

container.addEventListener("mouseenter", () => {
  lens.style.display = "block";
  result.style.display = "block";

  result.style.backgroundImage = `url(${img.src})`;
});

container.addEventListener("mouseleave", () => {
  lens.style.display = "none";
  result.style.display = "none";
});

container.addEventListener("mousemove", moveLens);

function moveLens(e) {
  const rect = img.getBoundingClientRect();

  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;

  x = x - lens.offsetWidth / 2;
  y = y - lens.offsetHeight / 2;

  if (x < 0) x = 0;
  if (y < 0) y = 0;

  if (x > img.width - lens.offsetWidth) x = img.width - lens.offsetWidth;

  if (y > img.height - lens.offsetHeight) y = img.height - lens.offsetHeight;

  lens.style.left = x + "px";
  lens.style.top = y + "px";

  const zoom = 2;

  result.style.backgroundSize =
    img.width * zoom + "px " + img.height * zoom + "px";

  result.style.backgroundPosition = "-" + x * zoom + "px -" + y * zoom + "px";
}
