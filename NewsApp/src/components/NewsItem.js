import React from 'react';

function NewsItem(props) {
  const { title, description, imageUrl, newsUrl, author, date, source } = props;

  return (
    <div>
      <div className="card news-card" style={{ width: "19rem", margin: "10px" }}>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {source}
          <span className="visually-hidden">unread messages</span>
        </span>
        <img src={!imageUrl ? "https://salgrom.fi/wp-content/uploads/2023/01/AdobeStock_139734995-scaled.jpeg" : imageUrl} className="card-img-top" alt="news" />
        <div className="card-body">
          <h5 className="card-title" >{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className='text-muted'>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()} </small></p>
          <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary">More Detail</a>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
