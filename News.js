import React, { Component } from 'react'
import Newsitem from './Newsitem'
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps={
    country:"in",
    category:"sports" ,
  }
  static propTypes={
    country: PropTypes.string,
    category: PropTypes.string,
  }
  constructor(){
    super();
    console.log("hello i am cos from news comp")
    this.state = {
      articles: [],
      load : false
      }
}
async componentDidMount(){
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fc3951429f934227bee3dce3fb82634b`
  try{        
      const res = await fetch(url);
      const data = await res.json();
      this.setState({
          articles: data.articles
      });
  }
  catch(e) {
      console.log("something is not working");
  }
}
  render() {
    return (
      <div className='container'>
        <h1 className="text-center" style={{margin:'40px 0px'}}>NEWSIFY - Head Lines</h1>
        <div className="row">
          {this.state.articles.map((ele)=>{
            return <div className="col-md-3" key={ele.url}>
            <Newsitem title={ele?ele.title:""} description={ele?ele.description:""} imgu={ele.urlToImage} url={ele.url}></Newsitem>
            </div>
          })}
            
            
        </div>
        
      </div>
    )
  }
}

export default News
