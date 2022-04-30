import React, { Component } from 'react'
class city extends Component {
    state = {}
    render() {
        return (
            <div className="card">
                <img src={this.props.city.img} className="card-img-top" alt="..."/>
                 <div className="card-body">
                    <h4 className="card-title">{this.props.city.title}</h4>
                    <button className="badge btn-primary" onClick={this.showDetails}>Details  ▼</button>
                    <p className="card-text hide" id={this.props.id}>{this.props.city.desc}</p>
                </div>
            </div>     
          )
    }

    showDetails=()=>{
        const details = document.querySelector(`#${this.props.id}`);
        details.classList.contains('hide') ?
        details.classList.remove('hide') :
        details.classList.add('hide')
    }
}

export default city;