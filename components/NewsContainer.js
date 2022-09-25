import React from "react";
import { useState, useEffect } from "react";
import NewsCard from "../pages/NewsCard";
import axios from "axios";


const NewsContainer = ({ category }) => {
const [articles, setArticles] = useState([]);

// const response = await axios.get(`https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=575ffdb7343c4d6ab577ec92bbade066`)abc-news-au
useEffect(() => {
console.log(process.env)
      const getArticles = async () => {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`);
      setArticles(response.data.articles);
      console.log(response.data);

    }; 

    getArticles();

},[]);

  return (
    <>
<div className="grid gap-2 sm:grid-cols-1 sm:m-2 md:grid-cols-2 lg:grid-cols-4 items-center  ">

      {articles?.map((currelem) => {
        return (
          
          
          <NewsCard
          title={currelem.title}
          description={currelem.description}
          url={currelem.url}
          urlToImage={currelem.urlToImage}
          author={currelem.author}
          />
          );
        })}
      
        </div>
    </>
  );
};

export default NewsContainer;
