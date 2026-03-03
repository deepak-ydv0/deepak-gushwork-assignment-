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

const specifications = [
  {
    parameter: "Pipe Diameter Range",
    value: '20mm to 1600mm (3/4" to 63")',
  },
  {
    parameter: "Pressure Ratings",
    value: "PN 2.5, PN 4, PN 6, PN 8, PN 10, PN 12.5, PN 16",
  },
  {
    parameter: "Standard Dimension Ratio",
    value: "SDR 33, SDR 26, SDR 21, SDR 17, SDR 13.6, SDR 11",
  },
  {
    parameter: "Operating Temperature",
    value: "-40°C to +80°C (-40°F to +176°F)",
  },
  {
    parameter: "Service Life",
    value: "50+ Years (at 20°C, PN 10)",
  },
  {
    parameter: "Material Density",
    value: "0.95 - 0.96 g/cm³",
  },
  {
    parameter: "Certification Standards",
    value: "IS 5984, ISO 4427, ASTM D3035",
  },
  {
    parameter: "Joint Type",
    value: "Butt Fusion, Electrofusion, Mechanical",
  },
  {
    parameter: "Coil Lengths",
    value: "Up to 500mm (for smaller diameters)",
  },
  {
    parameter: "Country of Origin",
    value: "🇮🇳 India",
  },
];

const tableBody = document.getElementById("specTableBody");

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

const settingIcon = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29 15H26.9538C26.8413 13.75 26.514 12.5287 25.9862 11.39L27.7588 10.3663C27.9885 10.2336 28.1561 10.0152 28.2248 9.75898C28.2935 9.50276 28.2576 9.22974 28.125 9C27.9924 8.77026 27.7739 8.6026 27.5177 8.53392C27.2615 8.46523 26.9885 8.50114 26.7588 8.63375L24.9837 9.65875C24.2586 8.63487 23.3651 7.74137 22.3412 7.01625L23.3662 5.24125C23.4989 5.01151 23.5348 4.73849 23.4661 4.48227C23.3974 4.22605 23.2297 4.00761 23 3.875C22.7703 3.74239 22.4972 3.70648 22.241 3.77517C21.9848 3.84385 21.7664 4.01151 21.6338 4.24125L20.61 6.01375C19.4713 5.48598 18.25 5.15868 17 5.04625V3C17 2.73478 16.8946 2.48043 16.7071 2.29289C16.5196 2.10536 16.2652 2 16 2C15.7348 2 15.4804 2.10536 15.2929 2.29289C15.1054 2.48043 15 2.73478 15 3V5.04625C13.75 5.15868 12.5287 5.48598 11.39 6.01375L10.3663 4.24125C10.3006 4.12749 10.2132 4.02778 10.109 3.94781C10.0048 3.86784 9.88585 3.80917 9.75898 3.77517C9.63211 3.74116 9.49978 3.73247 9.36956 3.7496C9.23933 3.76673 9.11376 3.80934 9 3.875C8.77026 4.00761 8.6026 4.22605 8.53392 4.48227C8.46523 4.73849 8.50114 5.01151 8.63375 5.24125L9.65875 7.01625C8.63487 7.74137 7.74137 8.63487 7.01625 9.65875L5.24125 8.63375C5.01151 8.50114 4.73849 8.46523 4.48227 8.53392C4.22605 8.6026 4.00761 8.77026 3.875 9C3.74239 9.22974 3.70648 9.50276 3.77517 9.75898C3.84385 10.0152 4.01151 10.2336 4.24125 10.3663L6.01375 11.39C5.48598 12.5287 5.15868 13.75 5.04625 15H3C2.73478 15 2.48043 15.1054 2.29289 15.2929C2.10536 15.4804 2 15.7348 2 16C2 16.2652 2.10536 16.5196 2.29289 16.7071C2.48043 16.8946 2.73478 17 3 17H5.04625C5.15868 18.25 5.48598 19.4713 6.01375 20.61L4.24125 21.6338C4.0505 21.7438 3.90139 21.9137 3.81707 22.1171C3.73275 22.3205 3.71794 22.5461 3.77493 22.7588C3.83191 22.9715 3.95752 23.1594 4.13224 23.2935C4.30697 23.4275 4.52104 23.5001 4.74125 23.5C4.91683 23.5005 5.08939 23.4544 5.24125 23.3662L7.01625 22.3412C7.74137 23.3651 8.63487 24.2586 9.65875 24.9837L8.63375 26.7588C8.50114 26.9885 8.46523 27.2615 8.53392 27.5177C8.6026 27.7739 8.77026 27.9924 9 28.125C9.22974 28.2576 9.50276 28.2935 9.75898 28.2248C10.0152 28.1561 10.2336 27.9885 10.3663 27.7588L11.39 25.9862C12.5287 26.514 13.75 26.8413 15 26.9538V29C15 29.2652 15.1054 29.5196 15.2929 29.7071C15.4804 29.8946 15.7348 30 16 30C16.2652 30 16.5196 29.8946 16.7071 29.7071C16.8946 29.5196 17 29.2652 17 29V26.9538C18.25 26.8413 19.4713 26.514 20.61 25.9862L21.6338 27.7588C21.7664 27.9885 21.9848 28.1561 22.241 28.2248C22.4972 28.2935 22.7703 28.2576 23 28.125C23.2297 27.9924 23.3974 27.774 23.4661 27.5177C23.5348 27.2615 23.4989 26.9885 23.3662 26.7588L22.3412 24.9837C23.3651 24.2586 24.2586 23.3651 24.9837 22.3412L26.7588 23.3662C26.8725 23.4319 26.9981 23.4746 27.1283 23.4917C27.2585 23.5089 27.3909 23.5002 27.5177 23.4662C27.6446 23.4321 27.7636 23.3735 27.8677 23.2935C27.9719 23.2135 28.0594 23.1138 28.125 23C28.2578 22.7704 28.2939 22.4975 28.2254 22.2413C28.157 21.9851 27.9896 21.7665 27.76 21.6338L25.9875 20.61C26.5148 19.4712 26.8417 18.25 26.9538 17H29C29.2652 17 29.5196 16.8946 29.7071 16.7071C29.8946 16.5196 30 16.2652 30 16C30 15.7348 29.8946 15.4804 29.7071 15.2929C29.5196 15.1054 29.2652 15 29 15ZM16 7C18.2129 7.00263 20.3474 7.81952 21.9966 9.29493C23.6458 10.7703 24.6944 12.8011 24.9425 15H16.5775L12.395 7.75625C13.5312 7.25687 14.7589 6.99933 16 7ZM7 16C7.00076 14.5902 7.33271 13.2003 7.96909 11.9423C8.60547 10.6843 9.52849 9.59339 10.6637 8.7575L14.845 16L10.6637 23.2425C9.52849 22.4066 8.60547 21.3157 7.96909 20.0577C7.33271 18.7997 7.00076 17.4098 7 16ZM16 25C14.7593 25.0026 13.5317 24.7472 12.395 24.25L16.5775 17H24.9425C24.6944 19.1989 23.6458 21.2297 21.9966 22.7051C20.3474 24.1805 18.2129 24.9974 16 25Z" fill="#2B3990"/>
</svg>
`;

const featuresData = [
  {
    icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27 8H22C22 6.4087 21.3679 4.88258 20.2426 3.75736C19.1174 2.63214 17.5913 2 16 2C14.4087 2 12.8826 2.63214 11.7574 3.75736C10.6321 4.88258 10 6.4087 10 8H5C4.46957 8 3.96086 8.21071 3.58579 8.58579C3.21071 8.96086 3 9.46957 3 10V25C3 25.5304 3.21071 26.0391 3.58579 26.4142C3.96086 26.7893 4.46957 27 5 27H27C27.5304 27 28.0391 26.7893 28.4142 26.4142C28.7893 26.0391 29 25.5304 29 25V10C29 9.46957 28.7893 8.96086 28.4142 8.58579C28.0391 8.21071 27.5304 8 27 8ZM16 4C17.0609 4 18.0783 4.42143 18.8284 5.17157C19.5786 5.92172 20 6.93913 20 8H12C12 6.93913 12.4214 5.92172 13.1716 5.17157C13.9217 4.42143 14.9391 4 16 4ZM27 25H5V10H10V12C10 12.2652 10.1054 12.5196 10.2929 12.7071C10.4804 12.8946 10.7348 13 11 13C11.2652 13 11.5196 12.8946 11.7071 12.7071C11.8946 12.5196 12 12.2652 12 12V10H20V12C20 12.2652 20.1054 12.5196 20.2929 12.7071C20.4804 12.8946 20.7348 13 21 13C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12V10H27V25Z" fill="#2B3990"/>
</svg>
`,
    title: "Superior Chemical Resistance",
    description:
      "HDPE pipes resist a wide range of chemicals, acids, and alkalis. Unlike metal pipes, they won’t corrode, rust, or scale.",
  },
  {
    icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.7075 8.29247C23.8005 8.38534 23.8742 8.49563 23.9245 8.61703C23.9749 8.73843 24.0008 8.86855 24.0008 8.99997C24.0008 9.13139 23.9749 9.26151 23.9245 9.38291C23.8742 9.50431 23.8005 9.6146 23.7075 9.70747L21.7075 11.7075C21.5198 11.8951 21.2653 12.0005 21 12.0005C20.7346 12.0005 20.4801 11.8951 20.2925 11.7075C20.1048 11.5198 19.9994 11.2653 19.9994 11C19.9994 10.7346 20.1048 10.4801 20.2925 10.2925L22.2925 8.29247C22.3853 8.19949 22.4956 8.12573 22.617 8.07541C22.7384 8.02509 22.8686 7.99918 23 7.99918C23.1314 7.99918 23.2615 8.02509 23.3829 8.07541C23.5043 8.12573 23.6146 8.19949 23.7075 8.29247ZM28 8.99997C28.0018 9.65682 27.8733 10.3075 27.6218 10.9143C27.3703 11.5211 27.0009 12.072 26.535 12.535L23.535 15.535C23.3889 15.6812 23.2011 15.7786 22.9975 15.8137C16.5612 16.9187 5.81498 27.5987 5.70748 27.7075C5.51984 27.8949 5.26541 28.0002 5.00016 28.0001C4.73491 28 4.48058 27.8945 4.2931 27.7068C4.10563 27.5192 4.00037 27.2648 4.00049 26.9995C4.00061 26.7343 4.10609 26.4799 4.29373 26.2925C4.49998 26.0912 15.0862 15.41 16.1862 8.99997C16.2214 8.7963 16.3187 8.60853 16.465 8.46247L19.465 5.46247C20.1644 4.76327 21.0554 4.28719 22.0254 4.09443C22.9954 3.90167 24.0008 4.0009 24.9144 4.37956C25.828 4.75822 26.6088 5.3993 27.158 6.22174C27.7073 7.04417 28.0003 8.01101 28 8.99997ZM26 8.99997C26.0014 8.40555 25.8263 7.8241 25.4967 7.3294C25.1672 6.8347 24.6981 6.44904 24.149 6.22137C23.5999 5.9937 22.9956 5.93428 22.4127 6.05064C21.8298 6.16701 21.2946 6.45392 20.875 6.87497L18.0962 9.66122C17.545 12.305 15.7337 15.435 13.66 18.34C16.565 16.2662 19.695 14.455 22.3387 13.9037L25.125 11.125C25.4042 10.8463 25.6253 10.5149 25.7755 10.1502C25.9257 9.7854 26.002 9.39445 26 8.99997Z" fill="#2B3990"/>
</svg>
`,
    title: "Exceptional Flexibility & Durability",
    description:
      "HDPE pipes resist a wide range of chemicals, acids, and alkalis. Unlike metal pipes, they won’t corrode, rust, or scale.",
  },
  {
    icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.96 8.26877L16.96 2.25002C16.6661 2.08763 16.3358 2.00244 16 2.00244C15.6642 2.00244 15.3339 2.08763 15.04 2.25002L4.04 8.27127C3.72586 8.44315 3.46363 8.69622 3.28069 9.00405C3.09775 9.31188 3.00081 9.66319 3 10.0213V21.9763C3.00081 22.3344 3.09775 22.6857 3.28069 22.9935C3.46363 23.3013 3.72586 23.5544 4.04 23.7263L15.04 29.7475C15.3339 29.9099 15.6642 29.9951 16 29.9951C16.3358 29.9951 16.6661 29.9099 16.96 29.7475L27.96 23.7263C28.2741 23.5544 28.5364 23.3013 28.7193 22.9935C28.9023 22.6857 28.9992 22.3344 29 21.9763V10.0225C28.9999 9.6638 28.9032 9.31172 28.7203 9.00317C28.5373 8.69462 28.2747 8.44096 27.96 8.26877ZM16 4.00002L26.0425 9.50002L22.3213 11.5375L12.2775 6.03752L16 4.00002ZM16 15L5.9575 9.50002L10.195 7.18002L20.2375 12.68L16 15ZM5 11.25L15 16.7225V27.4463L5 21.9775V11.25ZM27 21.9725L17 27.4463V16.7275L21 14.5388V19C21 19.2652 21.1054 19.5196 21.2929 19.7071C21.4804 19.8947 21.7348 20 22 20C22.2652 20 22.5196 19.8947 22.7071 19.7071C22.8946 19.5196 23 19.2652 23 19V13.4438L27 11.25V21.9713V21.9725Z" fill="#2B3990"/>
</svg>
`,
    title: "Leak-Proof Fusion Welding",
    description:
      "HDPE pipes resist a wide range of chemicals, acids, and alkalis. Unlike metal pipes, they won’t corrode, rust, or scale.",
  },
  {
    icon: settingIcon,
    title: "Cost-Effective Long-Term Solution",
    description:
      "HDPE pipes resist a wide range of chemicals, acids, and alkalis. Unlike metal pipes, they won’t corrode, rust, or scale.",
  },
  {
    icon: settingIcon,
    title: "Environmentally Sustainable",
    description:
      "HDPE pipes resist a wide range of chemicals, acids, and alkalis. Unlike metal pipes, they won’t corrode, rust, or scale.",
  },
  {
    icon: settingIcon,
    title: "Certified Quality Assurance",
    description:
      "HDPE pipes resist a wide range of chemicals, acids, and alkalis. Unlike metal pipes, they won’t corrode, rust, or scale.",
  },
];

const cardGrid = document.getElementById("cardGrid");

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

const faqData = [
  {
    question: "What is the purpose of a laser cutter for sheet metal?",
    answer:
      "It is designed to cut various types of sheet metal with precision, allowing for intricate designs and shapes essential in manufacturing processes.",
  },
  {
    question:
      "What are the benefits of using aluminum tubing in manufacturing?",
    answer:
      "Aluminum tubing offers lightweight strength, corrosion resistance, and flexibility across industries.",
  },
  {
    question: "How is aluminum tubing produced?",
    answer:
      "It is typically manufactured using extrusion or drawing processes depending on application requirements.",
  },
  {
    question: "What are the common applications of aluminum tubing?",
    answer:
      "It is used in construction, automotive, aerospace, furniture, and industrial equipment.",
  },
  {
    question: "Can aluminum tubing be customized?",
    answer:
      "Yes, aluminum tubing can be customized in size, thickness, finish, and shape.",
  },
];

const faqList = document.getElementById("faqList");

// Render FAQs dynamically
faqData.forEach((item, index) => {
  const faqItem = document.createElement("div");
  faqItem.classList.add("faq-item");

  if (index === 0) faqItem.classList.add("active"); // First open by default

  faqItem.innerHTML = `
    <div class="faq-question">
      ${item.question}
      <span class="icon">${index === 0 ? "⌃" : "⌄"}</span>
    </div>
    <div class="faq-answer">
      ${item.answer}
    </div>
  `;

  faqList.appendChild(faqItem);
});

// Accordion logic
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    faqItems.forEach((i) => {
      if (i !== item) {
        i.classList.remove("active");
        i.querySelector(".icon").textContent = "⌄";
      }
    });

    item.classList.toggle("active");

    const icon = item.querySelector(".icon");
    icon.textContent = item.classList.contains("active") ? "⌃" : "⌄";
  });
});

const applicationsData = [
  {
    title: "Fishnet Manufacturing",
    description:
      "High-performance twisting solutions for packaging yarn, strapping materials, and reinforcement threads used in modern packaging applications.",
    image: "https://picsum.photos/id/1011/600/800",
  },
  {
    title: "Industrial Packaging",
    description:
      "Advanced engineering for heavy-duty packaging and industrial-grade textile production.",
    image: "https://picsum.photos/id/1015/600/800",
  },
  {
    title: "Textile Machinery",
    description:
      "Precision-built components delivering unmatched efficiency and durability.",
    image: "https://picsum.photos/id/1016/600/800",
  },
  {
    title: "Agricultural Nets",
    description: "Reliable machinery for modern agricultural net production.",
    image: "https://picsum.photos/id/1018/600/800",
  },
  {
    title: "Strapping Solutions",
    description:
      "High-speed machinery engineered for modern strapping materials.",
    image: "https://picsum.photos/id/1020/600/800",
  },
];

const cardsWrapper = document.getElementById("cardsWrapper");

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
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

nextBtn.addEventListener("click", () => {
  cardsWrapper.scrollBy({ left: 320, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  cardsWrapper.scrollBy({ left: -320, behavior: "smooth" });
});

const stepsData = [
  {
    tab: "Raw Material",
    title: "High-Grade Raw Material Selection",
    description:
      "Vacuum sizing tanks ensure precise outer diameter and wall thickness uniformity.",
    points: ["PE100 grade material", "Optimal molecular weight distribution"],
    images: [
      "https://picsum.photos/id/1011/800/500",
      "https://picsum.photos/id/1015/800/500",
    ],
  },
  {
    tab: "Extrusion",
    title: "Precision Extrusion Process",
    description:
      "Advanced extrusion lines maintain consistent melt flow and dimensional accuracy.",
    points: ["High precision screw design", "Temperature controlled zones"],
    images: [
      "https://picsum.photos/id/1016/800/500",
      "https://picsum.photos/id/1018/800/500",
    ],
  },
  {
    tab: "Cooling",
    title: "Efficient Cooling System",
    description:
      "Uniform cooling ensures structural stability and dimensional consistency.",
    points: ["Water bath cooling", "Vacuum calibration tanks"],
    images: [
      "https://picsum.photos/id/1020/800/500",
      "https://picsum.photos/id/1024/800/500",
    ],
  },

  {
    tab: "Sizing",
    title: "Precision Sizing Process",
    description:
      "Vacuum sizing tanks ensure precise outer diameter and wall thickness uniformity.",
    points: ["PE100 grade material", "Optimal molecular weight distribution"],
    images: [
      "https://picsum.photos/id/1011/800/500",
      "https://picsum.photos/id/1015/800/500",
    ],
  },
  {
    tab: "Quality Control",
    title: "Rigorous Quality Control",
    description:
      "Advanced testing and inspection ensure every product meets the highest standards.",
    points: ["Dimensional accuracy checks", "Material strength testing"],
    images: [
      "https://picsum.photos/id/1016/800/500",
      "https://picsum.photos/id/1018/800/500",
    ],
  },
  {
    tab: "Marking",
    title: "Precision Marking System",
    description:
      "Advanced marking systems ensure clear identification and traceability.",
    points: ["High-resolution printing", "Durability and visibility"],
    images: [
      "https://picsum.photos/id/1020/800/500",
      "https://picsum.photos/id/1024/800/500",
    ],
  },
  {
    tab: "Cutting",
    title: "Precision Cutting Process",
    description:
      "Advanced cutting systems ensure precise length and clean edges.",
    points: ["High-precision cutting blades", "Automated length control"],
    images: [
      "https://picsum.photos/id/1011/800/500",
      "https://picsum.photos/id/1015/800/500",
    ],
  },
  {
    tab: "Packaging",
    title: "Rigorous Packaging Process",
    description:
      "Careful packaging ensures safe delivery and maintains product integrity.",
    points: ["Durable packaging materials", "Secure sealing and labeling"],
    images: [
      "https://picsum.photos/id/1016/800/500",
      "https://picsum.photos/id/1018/800/500",
    ],
  },
];

const stepper = document.getElementById("stepper");
const titleEl = document.getElementById("stepTitle");
const descEl = document.getElementById("stepDescription");
const pointsEl = document.getElementById("stepPoints");
const imageEl = document.getElementById("stepImage");

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

const reviews = [
  {
    title: "Revolutionized our FIBC production efficiency",
    content:
      "The industrial Twister machines have optimized our FIBC production efficiency. Precision engineering delivers consistent yarn strength.",
    name: "Johann Mueller",
    role: "Production Director",
  },
  {
    title: "Excellent support for specialized applications",
    content:
      "The durability and performance of Meera's machinery equipment has significantly improved our marine product quality.",
    name: "Carlos Mendoza",
    role: "Operations Manager",
  },
  {
    title: "Excellent support for specialized applications",
    content:
      "The durability and performance of Meera's machinery equipment has significantly improved our marine product quality.",
    name: "Carlos Mendoza",
    role: "Operations Manager",
  },
  {
    title: "Provides the exact specifications we need",
    content:
      "For our technical textile applications, Meera delivered precise machines matching exact requirements.",
    name: "Rajesh Kumar",
    role: "Manufacturing Head",
  },
];

const track = document.getElementById("testimonialTrack");

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
