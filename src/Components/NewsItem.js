import React, { Component } from 'react'

export class NewsItem extends Component {
   

  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src={imageUrl?imageUrl:"https://www.reuters.com/resizer/y5wV60gsTGvy9ccCUXtUBmhEpc4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/D57PMMI7UBK7RMWTUJQJZZHNG4.jpg"} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
