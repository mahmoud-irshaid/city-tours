import React, { Component } from 'react'
import City from './city';
class citysList extends Component {
    state = { 
        citys:[
            {img:'pexels-chris-schippers-421927.jpg',
             title:'Aqabacity',
             desc:'aqaba the aqua on beach city is sooo wet and junky blahabalaha'
            },
            {
                img:'pexels-chris-schippers-1295039.jpg',
                title:'beriotcity',
                desc:'lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum'
            },
            {img:'pexels-denys-gromov-4860969.jpg',
            title:'Aqabacity',
            desc:'aqaba the aqua on beach city is sooo wet and junky blahabalaha'
           },
           {
               img:'pexels-sandeep-gusain-4799157.jpg',
               title:'beriotcity',
               desc:'lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum'
           }
        ]
     }
    render() { 
        return ( 
        <div className="list">
            {this.state.citys.map(city =>(
                <City
                 key={this.state.citys.indexOf(city)} 
                 city ={city}
                 id={'city'+this.state.citys.indexOf(city)}
                 >
                </City>
            ))}
        </div> );
    }
}
 
export default citysList;