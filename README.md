# 📰 InsightStream News App

> A React-based news portal that combines a visual news homepage, searchable article feed, article detail interfaces, theme switching, and client-side news management into one application.

## 📖 About the Project

**InsightStream News** is designed as a small but complete news-reading and content-management experience. The application starts with a visual homepage containing a featured-news carousel and then presents available stories as responsive cards. Each card provides a short preview and actions that allow the user to open the article, edit it, or delete it.

The application uses **React Router** to separate the main news interface from individual article interfaces. Instead of displaying every story in one long page, the user can move from the feed into dedicated full-news screens. The project contains multiple article routes (`fullnews1` through `fullnews6`) plus a fallback interface for news that does not have a dedicated article page.

News data is loaded from a local JSON server through **Axios**. This gives the application a simple REST-style data layer: the frontend can retrieve existing stories, create new stories, update existing stories, and delete stories. Because the data layer is separate from the React interface, the project demonstrates how a frontend can communicate with an external API rather than keeping everything permanently inside component state.

The interface also includes a **search experience and light/dark theme switcher**. Searching reacts to the current input and filters stories by both title and article content. The theme is stored in React state and applied to the document body, allowing the visual appearance of the application to change without changing the underlying news data.

Overall, the project demonstrates a practical combination of **React components, routing, state management, asynchronous API requests, form handling, file/image processing, filtering, CRUD operations, and responsive UI design** in a single web application.

## ✨ Features

### 🏠 1. Featured News Homepage

The homepage begins with a Bootstrap-style carousel containing featured stories. It currently highlights topics such as Delhi air pollution, Manipur violence, and Andhra Pradesh investments.

The carousel provides indicators and previous/next controls, allowing the user to move between featured stories without leaving the page. Images are displayed responsively so the featured area adapts to different screen widths.

### 📰 2. News Feed & Story Cards

Below the featured section, the application displays the available news returned by the local API. Each story is rendered as a card containing:

- News image
- Article title
- Short content preview
- **Read More** action
- **Edit** action
- **Delete** action

The content preview is intentionally shortened so the feed remains easy to scan. The complete article can then be opened through the dedicated article interface.

### 🔎 3. Live Search

The navigation area provides a search input connected to React state. Whenever the search value changes, the application filters the current news list.

A story remains in the filtered result when either its **title** or **content** contains the entered search text. The comparison is case-insensitive, making searches more forgiving for users.

```text
Search input
     ↓
Update searchQuery
     ↓
Compare title + content
     ↓
Create filteredNews
     ↓
Render matching cards
```

### 📖 4. Full Article Interfaces

The project contains multiple dedicated article interfaces: `FullNews1` through `FullNews6`. The selected story is opened using its ID in the route.

The application chooses the article route according to the story's position in the news list. Stories beyond the dedicated article interfaces are sent to `NewsNotUpdated`, which acts as the fallback screen.

This gives the project a multi-interface structure rather than treating the news feed as the only page.

### ➕ 5. Add News

The homepage contains an **Add News** form with fields for:

- News title
- News content
- News image

The title and content are validated before the application submits the story. An empty title or content causes an alert and prevents the request from being sent.

When an image is selected, the browser's `FileReader` converts it into a Data URL. The resulting image data is then included in the news object before it is sent to the local API.

### ✏️ 6. Edit News

The **Edit** button loads the selected story's title and content back into the form. The application records the selected story's index using `editingIndex` and changes the form heading/button from **Add News** to **Update News**.

When the user submits the form in edit mode, Axios sends a `PUT` request for the selected news ID. After a successful update, the local React news list is updated and the form is cleared.

### 🗑️ 7. Delete News

Each news card includes a **Delete** action. The application retrieves the selected story's ID and sends a `DELETE` request to the JSON server.

After the request succeeds, the corresponding story is removed from the React state so the interface immediately reflects the change without requiring a page refresh.

### 🌓 8. Light / Dark Theme

The application maintains a `theme` state with `light` and `dark` values. The navigation component receives the current theme and a toggle function.

When the theme changes, a React effect applies the selected theme as a class on the document body. This allows the application's CSS to control the visual appearance globally.

### ⚡ 9. API-Driven Data Loading

When the application starts, it sends a `GET` request to:

```text
http://localhost:5000/news
```

The response populates both `newsList` and `filteredNews`. This means the displayed stories originate from the API rather than being hard-coded directly into the news cards.

## 🖥️ Interfaces & User Flow

| Interface | Purpose |
|---|---|
| **Navigation** | Search news and switch between light/dark themes |
| **Featured Home** | Display highlighted stories through a carousel |
| **News Feed** | Browse story cards and previews |
| **Add/Update Form** | Create or modify news content |
| **Full News 1–6** | Display dedicated article interfaces |
| **News Not Updated** | Fallback interface for stories without a dedicated article page |
| **Footer** | Shared footer across the application |

### Typical User Journey

```text
Open application
      ↓
Featured news carousel
      ↓
Browse news cards
      ↓
Search if required
      ↓
Read More
      ↓
Dedicated article interface
```

For content management:

```text
News Feed
   ↓
Add News / Edit / Delete
   ↓
Axios REST request
   ↓
JSON Server
   ↓
Updated React state
   ↓
Updated interface
```

## 🧠 Architecture

The application is divided into reusable React components and page-level interfaces. `App.jsx` coordinates routing, news state, search, theme management, and CRUD operations, while components such as `Navbar` and `Footer` provide shared UI.

React state is used for temporary application data such as the current search query, news list, form values, selected editing item, and theme. `useEffect` handles API loading, search filtering, and applying the theme to the document.

Axios acts as the communication layer between the frontend and the local JSON server. The frontend therefore follows a simple client/API architecture instead of directly manipulating a database.

## 🛠️ Tech Stack

- **React** — component-based frontend UI
- **JavaScript / JSX** — application logic and components
- **React Router DOM** — multi-page navigation and article routes
- **Axios** — HTTP requests to the local news API
- **Bootstrap** — carousel and responsive UI utilities
- **CSS** — application-specific styling
- **JSON Server** — local REST-style news data source

## 🚀 Getting Started

### Prerequisites

- Node.js and npm
- JSON Server or the project's local API setup

### Installation

```bash
git clone https://github.com/krishn00000/News-App.git
cd News-App
npm install
```

### Start the News API

The React application expects the news API at:

```text
http://localhost:5000/news
```

Make sure the JSON server is running with a compatible `news` endpoint before starting the frontend.

### Start the Frontend

```bash
npm run dev
```

Open the local Vite/development URL shown in the terminal.

## 📁 Project Structure

```text
News-App/
├── App.jsx             # Main application logic, routing and CRUD operations
├── Home.jsx            # Featured-news carousel
├── Fullnews1.jsx       # Article interface 1
├── Fullnews2.jsx       # Article interface 2
├── Fullnews3.jsx       # Article interface 3
├── Fullnews4.jsx       # Article interface 4
├── Fullnews5.jsx       # Article interface 5
├── Fullnews6.jsx       # Article interface 6
├── NewsNotUpdated.jsx  # Fallback article interface
├── Footer.jsx          # Shared footer
├── components/         # Reusable UI components
├── assets/             # News images and other assets
├── App.css             # Application styles
└── README.md           # Documentation
```

## ⚠️ Current Limitations

- The application expects the news API to be available locally on port `5000`.
- News persistence depends on the JSON server rather than a production database.
- Only six dedicated full-news interfaces are currently defined; other stories use the fallback interface.
- Image handling currently stores the selected image as a Data URL.

## 👤 Author

**Chinni Krishna Popuri**  
GitHub: [@krishn00000](https://github.com/krishn00000)

---

⭐ If you like the project, consider giving the repository a star.