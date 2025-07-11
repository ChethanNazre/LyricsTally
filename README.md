# 🎵 Lyrics Tally

Lyrics Tally is a responsive React application that allows users to fetch lyrics of a song and analyze the frequency of words used in it. You can also paste lyrics manually and count a specific word if desired.

## ✨ Features

- 🔍 Fetch lyrics from an API using Artist & Song Title  
- 📊 Count word frequency in lyrics (descending order)  
- 🔠 Search and count a specific word  
- ✏️ Option to manually paste lyrics if API fails  
- 📱 Fully responsive (mobile & desktop)  
- ✅ No TailwindCSS dependency (pure CSS)  

---

## 🚀 Getting Started

### Prerequisites

Make sure you have:

- Node.js (v16 or higher)  
- npm or yarn  
- Git  

### 🔧 Installation

```bash
git clone https://github.com/ChethanNazre/LyricsTally.git
cd LyricsTally
npm install
```

### 💻 Run Locally

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🌐 Deployment

You can deploy this app on [Vercel](https://vercel.com/):

1. Push your code to GitHub.  
2. Go to [vercel.com](https://vercel.com/) and import the GitHub repo.  
3. Let it auto-detect your React + Vite settings.  
4. Click **Deploy**.  

---

## 🗂️ Project Structure

```
LyricsTally/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   └── WordCounter.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── package.json
└── README.md
```

---

## 📦 Built With

- [React.js](https://reactjs.org/)  
- [Vite](https://vitejs.dev/)  
- [Lyrics.ovh API](https://lyricsovh.docs.apiary.io/)  

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🙌 Acknowledgments

- Lyrics API by [lyrics.ovh](https://lyricsovh.docs.apiary.io/)  
- Inspired by a need to quickly analyze lyrical word usage.

---

> Made with ❤️ by [Chethan Nazre](https://github.com/ChethanNazre)
