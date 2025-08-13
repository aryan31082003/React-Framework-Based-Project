

import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

function News(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(function () {
    fetchNews();
    // eslint-disable-next-line
  }, []);

  async function fetchNews() {
    props.setProgress(0);
    setLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=18`;
    let data = await fetch(url);
    props.setProgress(20);
    let parsedData = await data.json();
    props.setProgress(40);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }

  async function fetchMoreData() {
    const nextPage = page + 1;
    setPage(nextPage);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${nextPage}&pageSize=18`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  }

  return (
    <>
      <h2 style={{
        height: '55px',
        width: '1120px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: '410px',
        marginTop:'80px'
      }}>
        Top headlines
      </h2>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<h4>Loading...</h4>}
      >
        <div className="container">
          <div className="row" style={{ paddingLeft: '75px' }}>
            {articles.map(function (element) {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ''}
                    description={element.description ? element.description.slice(0, 88) : ''}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  apikey: PropTypes.string.isRequired,
  setProgress: PropTypes.func.isRequired,
};

News.defaultProps = {
  country: 'in',
  category: 'general',
};

export default News;

