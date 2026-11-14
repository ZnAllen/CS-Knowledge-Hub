# CS Knowledge Hub

**AI-guided Computer Science Knowledge Base**

CS Knowledge Hub 是一個以繁體中文為主的資工知識網站，使用一致的文章模板與深色科技風格，整理不同課程的重要概念。

## 初期分類
- Computer Architecture：MIPS、CPU、Pipeline
- Operating Systems：Process、Thread、Scheduling
- Programming Languages：Scheme、Scope、Recursion
- Artificial Intelligence：RAG、AI Agent、Reflection

## 專案特色
- `AGENTS.md` 定義 AI 新增、修改與維護網站的規則。
- `content/` 保存 Markdown 知識來源。
- `pages/` 保存可直接瀏覽的 HTML 頁面。
- 共用 CSS 與 JavaScript，維持一致的介面與操作方式。
- 純靜態網站，可部署至 GitHub Pages，不需要後端或 API Key。

## 本機預覽
在專案根目錄執行：

```bash
python -m http.server 8000
```

接著瀏覽 `http://localhost:8000`。

## 部署至 GitHub Pages
1. 將整個專案推送至 GitHub Repository。
2. 開啟 Repository 的 **Settings → Pages**。
3. 在 **Build and deployment** 選擇 **Deploy from a branch**。
4. Branch 選擇 `main`，資料夾選擇 `/ (root)`，按下 Save。
5. 等待部署完成，使用 Pages 顯示的網址瀏覽。

## 如何新增知識文章
1. 閱讀根目錄的 `AGENTS.md`。
2. 在正確的 `content/<category>/` 新增 Markdown 原始筆記。
3. 在對應的 `pages/<category>/` 新增 HTML 頁面。
4. 遵守 `AGENTS.md` 的 Article Template。
5. 更新該分類的 `index.html` 與首頁文章索引。
6. 檢查所有連結、路徑與手機版版面。

## AI 開發指令範例
> 請先閱讀 AGENTS.md，依照專案既有規則，在 Operating Systems 分類新增 Process Scheduling 文章。請同時建立 Markdown 原始內容與 HTML 頁面，更新分類索引和首頁搜尋資料，並檢查所有相對路徑。

## 專案結構
```text
AGENTS.md
README.md
index.html
assets/css/style.css
assets/js/main.js
pages/
content/
```

## License
課程作業與個人學習用途。
