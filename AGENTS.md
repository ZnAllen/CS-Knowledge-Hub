
# AGENTS.md — CS Knowledge Hub 開發規範

## 1. 專案介紹（Project Overview）

本專案名稱為 CS Knowledge Hub，是一個以資工（Computer Science）知識整理為核心的知識庫網站。

主要目的是將不同資工課程的知識、技術概念與學習筆記整理成具有一致格式的網頁，讓使用者能夠透過分類與搜尋，快速找到需要的學習內容。

本網站也希望透過 AI 輔助開發，建立一套可重複使用的網站製作規則。未來當需要新增課程、知識文章或頁面時，AI 必須遵守本文件所定義的規範。

### 初期知識分類

網站初期分成四大類：

1. Computer Architecture（計算機組織）
   - MIPS
   - CPU
   - Pipeline
   - Memory

2. Operating Systems（作業系統）
   - Process
   - Thread
   - CPU Scheduling
   - Critical Section

3. Programming Languages（程式語言）
   - Scheme
   - Lexical Scope
   - Dynamic Scope
   - Recursion

4. Artificial Intelligence（人工智慧）
   - RAG
   - AI Agent
   - Reflection
   - Planning
   - Tool Calling

未來可以依照需求增加文章，但新增主要分類前必須先確認，不可自行改變網站原有的分類架構。

---

## 2. 語言規範（Language Guidelines）

1. 網站主要使用繁體中文。
2. 技術專有名詞保留英文，例如 Process、Thread、Memory。
3. 第一次出現的重要專有名詞，應提供中文名稱及英文原文。
4. 使用台灣常見的中文用語，避免簡體中文。
5. 內容應簡潔、清楚，避免過度冗長的敘述。
6. 技術概念應盡量搭配實際例子。
7. 不可捏造技術資訊、研究結果或參考資料。
8. 如果資訊不確定，必須明確標示，不可將推測當成事實。

---

## 3. 網站視覺規範（Design Guidelines）

整個網站採用 Dark Tech 深色科技風格。

### 色彩規範

- 背景：深藍黑色。
- 卡片：深藍灰色。
- 主要文字：白色或淺灰色。
- 次要文字：灰藍色。
- 強調色：青綠色。
- 輔助強調色：淡藍色。
- 邊框：低對比度的深藍灰色。

所有頁面必須優先使用共用 CSS 中已定義的顏色變數，不可任意創造不同的配色系統。

### 版面規範

1. 使用簡潔、現代化的科技風格。
2. 所有頁面必須維持一致的導覽列。
3. 所有頁面必須維持一致的字體與標題層級。
4. 卡片使用圓角設計。
5. 內容必須具有足夠的留白。
6. 避免過多動畫與裝飾效果。
7. 必須支援桌面及手機瀏覽。
8. 不可因新增頁面而破壞原有版面。

### UI 設計原則

- 首頁以知識分類為主要入口。
- 分類頁以文章列表為主要內容。
- 文章頁以閱讀體驗為優先。
- 導覽方式必須清楚。
- 搜尋功能必須容易使用。
- 所有互動元件都應具有適當的操作回饋。

---

## 4. 專案資料夾結構（Project Structure）

專案使用以下資料夾架構：

```text
CS-Knowledge-Hub/
│
├── AGENTS.md
├── README.md
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   └── main.js
│   │
│   └── images/
│
├── pages/
│   ├── computer-architecture/
│   │   ├── index.html
│   │   └── articles...
│   │
│   ├── operating-systems/
│   │   ├── index.html
│   │   └── articles...
│   │
│   ├── programming-languages/
│   │   ├── index.html
│   │   └── articles...
│   │
│   └── artificial-intelligence/
│       ├── index.html
│       └── articles...
│
└── content/
    ├── computer-architecture/
    ├── operating-systems/
    ├── programming-languages/
    └── artificial-intelligence/
```

### 各資料夾用途

- AGENTS.md：
  定義 AI 開發規則，AI 修改專案前必須先閱讀。

- README.md：
  說明專案目的、使用方式、檔案結構及部署流程。

- index.html：
  網站首頁，負責呈現知識分類及搜尋入口。

- assets/css/：
  存放所有共用 CSS 樣式。

- assets/js/：
  存放網站共用 JavaScript 功能。

- assets/images/：
  存放網站使用的圖片。

- pages/：
  存放實際提供使用者瀏覽的 HTML 頁面。

- content/：
  存放知識文章的 Markdown 原始內容。

HTML 與 Markdown 應該保持內容一致。

---

## 5. 檔案命名規範（Naming Convention）

1. 所有檔案及資料夾使用英文小寫。
2. 單字之間使用連字號（-）。
3. 不可使用空白或特殊符號作為檔名。
4. 文章 HTML 與 Markdown 檔案必須使用相同名稱。

例如：

正確：

- mips-basics.html
- mips-basics.md
- process-scheduling.html
- process-scheduling.md
- critical-section.html
- critical-section.md

錯誤：

- MIPS Basics.html
- Process_Scheduling.md
- 文章一.html

---

## 6. 網站頁面規範（Page Structure）

### 6.1 首頁（Home Page）

首頁必須包含：

1. 網站名稱及 Logo。
2. 主要導覽列。
3. 網站簡介。
4. 四大知識分類。
5. 搜尋功能。
6. Footer。

首頁應以分類導覽為主要目的，不需要放入大量文章內容。

### 6.2 分類頁（Category Page）

每個分類都必須包含：

1. 返回首頁的連結。
2. 分類名稱。
3. 分類簡介。
4. 文章列表。
5. 文章標題與簡短介紹。
6. Footer。

新增文章後，必須同步更新對應分類的文章列表。

### 6.3 文章頁（Article Page）

所有知識文章必須使用一致的內容架構。

文章應依照以下順序編排：

1. Breadcrumb（麵包屑導覽）
2. Title（文章標題）
3. Description（文章簡介）
4. Learning Objectives（學習目標）
5. Introduction（主題介紹）
6. Key Concepts（核心概念）
7. How It Works（運作原理）
8. Example（實際範例）
9. FAQ（常見問題）
10. Related Topics（相關主題）

如果某個章節不適合特定主題，可以合理調整，但不可留下空白標題。

---

## 7. 知識文章內容規範（Content Guidelines）

每篇文章都必須具有以下特性：

### 基本要求

- 內容必須與文章標題相關。
- 使用繁體中文解釋。
- 保留必要的英文專有名詞。
- 重要概念必須提供解釋。
- 適當使用標題、列表及表格。
- 避免整篇文章只有大量文字。
- 適合初學者閱讀。

### 程式碼範例

如果文章涉及程式設計：

1. 必須使用適當的程式碼區塊。
2. 必須標示程式語言。
3. 程式碼應具有基本可讀性。
4. 必要時應解釋程式碼的執行結果。
5. 不可提供無法理解或與文章無關的程式碼。

### 數學公式

如果文章涉及數學或工程計算：

1. 使用 LaTeX 表示數學公式。
2. 重要變數必須解釋。
3. 必要時提供計算步驟。
4. 公式不可只呈現結果而沒有說明。

### 參考資料

如果使用外部資料：

- 必須提供可追溯的來源。
- 不可虛構參考資料。
- 盡可能優先使用官方文件、教科書或可信賴的技術資料。

---

## 8. AI 開發規則（AI Development Rules）

這是本專案最重要的規範。

AI 在執行任何開發任務前，都必須先閱讀本文件。

### 8.1 修改既有頁面

當 AI 需要修改既有頁面時：

1. 先閱讀原本的 HTML。
2. 檢查相關 CSS 與 JavaScript。
3. 理解原有頁面結構。
4. 保留原有設計風格。
5. 不可任意刪除原有功能。
6. 不可影響其他頁面的正常運作。

### 8.2 新增知識文章

當 AI 需要新增一篇文章時，必須依照以下流程：

第一步：確認文章所屬分類。

第二步：在 content/ 對應資料夾建立 Markdown 檔案。

第三步：在 pages/ 對應資料夾建立 HTML 頁面。

第四步：按照 Article Page 的規範撰寫內容。

第五步：更新該分類的 index.html。

第六步：如果首頁有文章搜尋或索引資料，也必須同步更新。

第七步：檢查所有連結與檔案路徑。

第八步：確認新增頁面符合原本的視覺風格。

### 8.3 新增知識分類

如果需要新增一個主要分類：

1. 必須先取得使用者同意。
2. 建立對應的 pages 資料夾。
3. 建立對應的 content 資料夾。
4. 建立分類首頁。
5. 更新網站首頁的分類入口。
6. 更新 README.md。
7. 必要時同步更新本文件的分類規範。

不可自行刪除或重新命名原有四大分類。

### 8.4 修改共用 CSS 或 JavaScript

1. 優先修改共用檔案。
2. 不可為單一頁面重複建立相同樣式。
3. 不可任意引入大型外部套件。
4. 修改後必須檢查其他頁面。
5. 必須維持桌面及手機版的正常顯示。

---

## 9. GitHub Pages 部署規範

本專案使用 GitHub Pages 作為公開網站平台。

因此：

1. 網站必須使用靜態 HTML、CSS、JavaScript。
2. 不可依賴後端伺服器。
3. 不可要求使用者輸入 API Key 才能瀏覽網站。
4. 所有本地資源應使用相對路徑。
5. 首頁必須使用 index.html。
6. 所有頁面必須能透過一般瀏覽器正常開啟。
7. 不可使用只在本機有效的絕對路徑。

新增頁面時，必須確認 GitHub Pages 部署後仍能正常運作。

---

## 10. 開發完成檢查（Quality Checklist）

每次新增或修改內容後，AI 都必須檢查以下項目：

### 網頁檢查

- [ ] 網頁可以正常開啟。
- [ ] 導覽列功能正常。
- [ ] 所有連結都能正確導向。
- [ ] CSS 樣式沒有錯誤。
- [ ] JavaScript 功能正常。
- [ ] 手機版版面正常。
- [ ] 沒有破壞其他頁面。

### 內容檢查

- [ ] 使用繁體中文。
- [ ] 技術名詞解釋正確。
- [ ] 文章符合統一模板。
- [ ] 程式碼與數學公式格式正確。
- [ ] 沒有空白章節。
- [ ] 沒有虛構資訊。

### 專案結構檢查

- [ ] 檔案放置於正確資料夾。
- [ ] 檔名符合命名規則。
- [ ] Markdown 與 HTML 內容一致。
- [ ] 分類索引已更新。
- [ ] 首頁索引已更新（若適用）。
- [ ] 相對路徑正確。

如果有任何項目未完成，AI 必須明確告知使用者，不可直接宣稱所有工作已完成。

---

## 11. 最重要的開發原則（Core Principles）

本專案的核心不是單純製作網頁，而是建立一套可以持續擴充的知識網站開發規範。

因此 AI 必須遵守以下原則：

1. 一致性優先：新增內容必須維持原有網站風格。
2. 可擴充性優先：新增內容不可破壞既有架構。
3. 可維護性優先：避免重複程式碼及混亂的檔案結構。
4. 易讀性優先：文章必須容易理解。
5. 正確性優先：技術內容不可隨意捏造。
6. 使用者決策優先：重大架構變更必須先取得使用者同意。

**所有 AI 開發工作都必須以本文件為主要依據。**
