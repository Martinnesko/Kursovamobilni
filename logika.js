const news = [
  { title: "Левски победи ЦСКА", content: "Подробности за мача..." },
  { title: "Барселона спечели", content: "Анализ на срещата..." }
];

function loadHome() {
  const container = document.getElementById("news-container");
  container.innerHTML = "";

  news.forEach(n => {
    container.innerHTML += `
      <div class="news">
        <h3>${n.title}</h3>
        <p>${n.content}</p>
      </div>
    `;
  });
}

function loadCategories() {
  document.getElementById("news-container").innerHTML =
    "<h2>Категории: БГ футбол, Световен футбол</h2>";
}

function loadLive() {
  document.getElementById("news-container").innerHTML =
    "<h2>Live резултати (пример)</h2>";
}

loadHome();
