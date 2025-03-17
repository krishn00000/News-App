import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Home from '../src/Home';
import FullNews1 from '../src/Fullnews1';
import FullNews2 from '../src/Fullnews2';
import FullNews3 from '../src/Fullnews3';
import FullNews4 from '../src/Fullnews4';
import FullNews5 from '../src/Fullnews5';
import FullNews6 from '../src/Fullnews6';
import NewsNotUpdated from '../src/NewsNotUpdated';
import './App.css';
import Footer from './Footer';

function App() {
  const [newsList, setNewsList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredNews, setFilteredNews] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newImage, setNewImage] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const [theme, setTheme] = useState('light'); // Theme state

  // Fetch news from the JSON server
  useEffect(() => {
    axios
      .get('http://localhost:5000/news')
      .then((response) => {
        setNewsList(response.data);
        setFilteredNews(response.data);
      })
      .catch((error) => {
        console.error('Error fetching news:', error);
      });
  }, []);

  // Apply the selected theme to the body element
  useEffect(() => {
    document.body.className = theme; // Apply the theme class to the body
  }, [theme]);

  // Filter news based on the search query
  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase();
    setFilteredNews(
      newsList.filter(
        (news) =>
          news.title.toLowerCase().includes(lowercasedQuery) ||
          news.content.toLowerCase().includes(lowercasedQuery)
      )
    );
  }, [searchQuery, newsList]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleImageChange = (e) => {
    setNewImage(e.target.files[0]);
  };

  const handleAddOrUpdateNews = async () => {
    if (newTitle.trim() === '' || newContent.trim() === '') {
      alert('Title and Content are required!');
      return;
    }

    let imageUrl = null;
    if (newImage) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        imageUrl = reader.result;
        await saveNews(imageUrl);
      };
      reader.readAsDataURL(newImage);
    } else {
      imageUrl = editingIndex !== null ? newsList[editingIndex].image : null;
      await saveNews(imageUrl);
    }
  };

  const saveNews = async (imageUrl) => {
    const newNews = {
      title: newTitle,
      content: newContent,
      image: imageUrl,
    };

    try {
      if (editingIndex !== null) {
        const newsId = newsList[editingIndex].id;
        const updatedNews = { ...newsList[editingIndex], ...newNews };
        await axios.put(`http://localhost:5000/news/${newsId}`, updatedNews);
        const updatedNewsList = [...newsList];
        updatedNewsList[editingIndex] = updatedNews;
        setNewsList(updatedNewsList);
        setEditingIndex(null);
      } else {
        const response = await axios.post('http://localhost:5000/news', newNews);
        setNewsList((prevList) => [...prevList, response.data]);
      }

      setNewTitle('');
      setNewContent('');
      setNewImage(null);
    } catch (error) {
      console.error('Error adding/updating news:', error);
    }
  };

  const handleDeleteNews = async (index) => {
    const newsId = newsList[index].id;
    try {
      await axios.delete(`http://localhost:5000/news/${newsId}`);
      const filteredNewsList = newsList.filter((_, i) => i !== index);
      setNewsList(filteredNewsList);
    } catch (error) {
      console.error('Error deleting news:', error);
    }
  };

  const handleEditNews = (index) => {
    const newsToEdit = newsList[index];
    setNewTitle(newsToEdit.title);
    setNewContent(newsToEdit.content);
    setNewImage(null);
    setEditingIndex(index);
  };

  const handleNavigate = (index) => {
    if (index === 0) {
      window.open(`/fullnews1/${newsList[index].id}`, '_blank');
    } else if (index === 1) {
      window.open(`/fullnews2/${newsList[index].id}`, '_blank');
    } else if (index === 2) {
      window.open(`/fullnews3/${newsList[index].id}`, '_blank');
    } else if (index === 3) {
      window.open(`/fullnews4/${newsList[index].id}`, '_blank');
    } else if (index === 4) {
      window.open(`/fullnews5/${newsList[index].id}`, '_blank');
    } else if (index === 5) {
      window.open(`/fullnews6/${newsList[index].id}`, '_blank');
    } else {
      window.open(`/newsnotupdated/${newsList[index].id}`, '_blank');
    }
  };

  return (
    <Router>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Home />
              <div className="container mt-5">
                <h1>InsightStream News</h1>

                {/* List of news cards */}
                <div className="row row-cols-1 row-cols-md-3 g-4">
                  {filteredNews.length === 0 ? (
                    <p>No news available.</p>
                  ) : (
                    filteredNews.map((news, index) => (
                      <div key={news.id} className="col">
                        <div className="card h-100">
                          <img
                            src={news.image}
                            className="card-img-top"
                            alt={news.title}
                          />
                          <div className="card-body">
                            <h5 className="card-title">{news.title}</h5>
                            <p className="card-text">
                              {news.content.substring(0, 100)}...
                            </p>
                            <button
                              className="btn btn-primary"
                              onClick={() => handleNavigate(index)}
                            >
                              Read More
                            </button>
                            <button
                              className="btn btn-success me-2"
                              onClick={() => handleEditNews(index)}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-danger"
                              onClick={() => handleDeleteNews(index)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Form for adding/updating news */}
                <div className="form-container mt-4">
                  <h2>{editingIndex !== null ? 'Update News' : 'Add News'}</h2>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="News Title"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                  />
                  <textarea
                    className="form-control mb-2"
                    placeholder="News Content"
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                  ></textarea>
                  <input
                    type="file"
                    className="form-control mb-2"
                    onChange={handleImageChange}
                  />
                  <button
                    className="btn btn-primary"
                    onClick={handleAddOrUpdateNews}
                  >
                    {editingIndex !== null ? 'Update News' : 'Add News'}
                  </button>
                </div>
              </div>
            </div>
          }
        />
        <Route path="/fullnews1/:id" element={<FullNews1 newsList={newsList} />} />
        <Route path="/fullnews2/:id" element={<FullNews2 newsList={newsList} />} />
        <Route path="/fullnews3/:id" element={<FullNews3 newsList={newsList} />} />
        <Route path="/fullnews4/:id" element={<FullNews4 newsList={newsList} />} />
        <Route path="/fullnews5/:id" element={<FullNews5 newsList={newsList} />} />
        <Route path="/fullnews6/:id" element={<FullNews6 newsList={newsList} />} />
        <Route path="/newsnotupdated/:id" element={<NewsNotUpdated />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
