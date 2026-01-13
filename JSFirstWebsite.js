const images = [
  "pet1.jpg",
  "pet2.jpg",
  "pet3.jpg",
  "pet4.jpg",
  "pet5.jpg",
  "pet6.jpg",
  "pet7.jpg",
  "pet8.jpg",
  "pet9.jpg",
  "pet10.jpg",
  "https://zoo.kyiv.ua/wp-content/uploads/2021/08/lesnoj-kot.jpg",
  "https://barberpet.com.ua/ua/wp-content/uploads/sites/2/2021/10/what-to-expect-when-adopting-a-puppy-scaled.jpeg",
  "https://kyivlis.gov.ua/wp-content/uploads/2014/10/2dcc779f9a62.jpg",
  "https://senfil.net/uploads/posts/2015-08/1438437581_3.jpg",
  "https://eco.rayon.in.ua/storage/cache/images/upload/news/33/2023-05/05-1gsRAEJP/700x371-6454baf9c5871.webp",
  "https://dyvensvit.org/storage/media/articles/2019/09/1022234/50b925ebc047380d8813dde512b0bcad.jpg",
  "https://st3.depositphotos.com/3588977/19394/i/450/depositphotos_193945354-stock-photo-female-brown-bear-and-her.jpg",
  "https://media.istockphoto.com/id/1248258972/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B4%D0%B8%D0%BA%D0%B8%D0%B9-%D0%BA%D0%BE%D1%80%D0%B8%D1%87%D0%BD%D0%B5%D0%B2%D0%B8%D0%B9-%D0%B7%D0%B0%D1%94%D1%86%D1%8C-%D0%BD%D0%B0-%D0%BB%D1%83%D0%B7%D1%96.jpg?s=612x612&w=0&k=20&c=XGbIQEtSJcxpnJMvoJF-L2tEbMSlVK6AezYkkZtiqs4=",
  "https://blog.tetra.net/ru/ru/wp-content/uploads/2020/08/cherepahi-samye-rasprostranennye-v-akvariumistike-vodnye-reptilii.jpg",
  "https://davniyhalych.com.ua/wp-content/uploads/2025/09/delfyn.jpg",
  "https://ukr.media/static/ba/aimg/3/6/5/365604_1.jpg",
  "https://i.pinimg.com/236x/20/4b/e6/204be63448640f623b45668e4cfeba7b.jpg",
  "https://www.factday.net/media/tsikavi-fakty-pro-zmiy.webp",
  "https://agrodream.com.ua/wp-content/uploads/2024/10/de-zhive-tigr.jpg",
];

let index = 0;
let slideshowInterval;
let isRunning = true;

// Функція зміни фону
function changeBackground() {
  document.body.style.backgroundImage = `url('${images[index]}')`;
  index = (index + 1) % images.length;
}

// Старт слайдшоу
function startSlideshow() {
  slideshowInterval = setInterval(changeBackground, 5000);
  isRunning = true;
  document.body.style.backgroundImage = `url('${images[index]}')`;
}

// Зупинка слайдшоу
function stopSlideshow() {
  clearInterval(slideshowInterval);
  isRunning = false;
  document.body.style.backgroundImage = null;
}

// Кнопка пауза/продовжити
const btn = document.getElementById("toggleBtn");
btn.addEventListener("click", () => {
  if (isRunning) {
    stopSlideshow();
    btn.textContent = "Продовжити слайдшоу";
  } else {
    startSlideshow();
    btn.textContent = "Зупинити слайдшоу";
  }
});

// Встановлюємо початковий фон і запускаємо слайдшоу
changeBackground();
startSlideshow();
