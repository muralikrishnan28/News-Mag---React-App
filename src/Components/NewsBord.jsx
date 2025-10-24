import { useCallback, useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Error from "./Error";
import Loading from './Loading'
import axios from "axios";

export default function NewsBord({ category }) {

  const [reqHandle, setReqHandle] = useState({ loading:true, err:false});
  const [articles, setArticles] = useState([]);

  // =========== API CALL Fetch Data =============

  const ApiCall = useCallback( async () => {
    setReqHandle(prev => ({...prev, loading:true}));
    try {
      const response = await axios.get(`/.netlify/functions/getNews?category=${category}`);
      setArticles(response.data.articles);
    } catch (error) {
      setReqHandle( prev => ({...prev, err:true }));
    }
    finally{
      setReqHandle( prev => ({...prev, loading:false}));
    }
  },[category]);

  useEffect(() => {
    ApiCall();
  },[ApiCall]);

  return (
    <>
    {
      reqHandle.loading ?
      <Loading /> : reqHandle.err ?
      (
        <Error ApiCall={ApiCall} />
      ) : (
      <div className="container-fluid">
        <h1 className=" text-center mt-3 border-bottom">
          Latest{" "}
          <span className="text-light rounded bg-danger px-1 pb-1 opacity-75">News</span>
        </h1>
        <div className="row justify-content-center">
          {articles.map((news, index) => (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              url={news.url}
              imgsrc={news.urlToImage}
            />
          ))}
        </div>
      </div> ) }
    </>
  );
}
