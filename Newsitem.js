import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let { title, description,imgu,url} = this.props
        return (
            <div className='container'>
                <div className="card" >
                    <img src={imgu} className="card-img-top" alt={imgu}/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={url} className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
