import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../artikel/header";
import Line from "../assets/Line3.svg";
import { API_BASE_URL, API_GAMBAR_URL } from "../config";
import "./artikeldetail.css";

function ArticleDetail() {
  const { id } = useParams();
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}artikel`);
        setArticles(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const foundArticle = articles.find((article) => article.id.toString() === id);
    setArticle(foundArticle);
  }, [id, articles]);

  const formatDate = (dateString) => {
    const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    const date = new Date(dateString);
    const day = days[date.getDay()];
    const month = months[date.getMonth()];
    return `${day}, ${date.getDate()} ${month} ${date.getFullYear()}`;
  };

  return (
    <>
      <Header />
      {article && (
        <div className="container">
          <h1 style={{ textAlign: "center", fontWeight: "bold", marginTop: "20px" }}>{article.judul_artikel}</h1>
          <small style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>{formatDate(article.tanggal_artikel)}</small>
          <div style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
            <img className="article-image" src={`${API_GAMBAR_URL}${article.gambar_artikel}`} alt={article.judul_artikel} />
          </div>
          <div style={{ margin: "0 auto", maxWidth: "80%", marginTop: "40px" }}>
            <p dangerouslySetInnerHTML={{ __html: article.deskripsi_artikel }}></p>
          </div>
          <div style={{ margin: "40px 0" }}>
            <h2>Artikel Lainnya</h2>
            <img src={Line} alt="React Logo" className="mb-3" />
            <div className="mt-3" style={{ display: "flex", justifyContent: "space-between" }}>
              {articles.slice(-5).map((art, index) => (
                <Link to={`/artikel/${art.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <div key={art.id} className="article-card">
                    <img src={`${API_GAMBAR_URL}${art.gambar_artikel}`} alt={art.judul_artikel} />
                    <h6 className="mt-3">{art.judul_artikel}</h6>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ArticleDetail;
