import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {

  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "sports"
  }

  static propTypes = {
    country: PropTypes.string,
    pageString: PropTypes.number,
    category: PropTypes.string,
  }


  constructor(){
    super();
    console.log("this is a constructor in newscomponent");
    this.state = {
        articles : [],
        loading : false,
        page: 1
    }
  };

  async componentDidMount(){
    //console.log("componenetdidmount");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=41f4c641cbea41c096ca848db8d96d4b&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    //console.log(parsedData);
    this.setState({articles: parsedData.articles, 
      totalResults: parsedData.totalResults,
      loading:false
    })
  }

  handlePrevious= async() => {

    console.log("previus")

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=41f4c641cbea41c096ca848db8d96d4b&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    //console.log(parsedData);
    this.setState({
           page: this.state.page -1,
           articles: parsedData.articles,
           loading:false
        })

  }
  handleNext= async() =>{

    console.log("next")
    if(!(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize))){

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=41f4c641cbea41c096ca848db8d96d4b&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    //console.log(parsedData);
    this.setState({
           page: this.state.page +1,
           articles: parsedData.articles,
           loading:false

        })
      }
  }

  render() {
    //console.log("render")
    return (
      <div className="container my-3">
        <h2 className="text-center">NewsNerd - TOP HEADLINES</h2>
         
          <div className="row">
            { !this.state.loading && this.state.articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,80):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
              </div>
            })}
            
          </div> 
          {this.state.loading && <Spinner/>}
          <div className="container my-2 d-flex justify-content-between">  
              <button disabled= {this.state.page<=1}type="button" className="btn btn-dark" onClick={this.handlePrevious}> &larr; Previous</button>
              <button disabled={this.state.page +1 >= Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark"onClick={this.handleNext}>Next &rarr;</button> 
          </div>     
      </div>
      
    )
  }
}

export default News
