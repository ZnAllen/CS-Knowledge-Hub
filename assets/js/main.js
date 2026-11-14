// Shared interactions for CS Knowledge Hub.
document.addEventListener("DOMContentLoaded", () => {
  const search = document.querySelector("[data-search]");
  const cards = [...document.querySelectorAll("[data-search-item]")];
  const result = document.querySelector("[data-search-result]");

  if (search && cards.length) {
    search.addEventListener("input", () => {
      const query = search.value.trim().toLocaleLowerCase();
      let visible = 0;
      cards.forEach((card) => {
        const matches = card.textContent.toLocaleLowerCase().includes(query);
        card.hidden = !matches;
        if (matches) visible += 1;
      });
      if (result) {
        result.textContent = query
          ? `找到 ${visible} 個符合的項目`
          : "輸入課程或關鍵字，快速尋找知識主題。";
      }
    });
  }

  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
});
