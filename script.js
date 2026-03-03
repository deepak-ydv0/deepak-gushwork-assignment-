const mainImage = document.getElementById("mainImage");
const thumbs = document.querySelectorAll(".thumb");
const leftBtn = document.querySelector(".arrow.left");
const rightBtn = document.querySelector(".arrow.right");

let currentIndex = 0;

const images = [
  "https://picsum.photos/id/1011/900/500",
  "https://picsum.photos/id/1015/900/500",
  "https://picsum.photos/id/1016/900/500",
  "https://picsum.photos/id/1018/900/500",
];

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
