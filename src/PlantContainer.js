import React, {Component} from 'react'
import PlantCard from './PlantCard'
// import React from 'react'

export default class PlantContainer extends Component {
// export default class PlantContainer extends React.Component {
    state = {
        plants: []
    }

    componentDidMount(){ //gets called when plant container gets mounted (first renders)
        fetch('http://localhost:3000/plants')
            .then(resp => resp.json())
                .then(json => this.setState({plants: json})) //can pass object, or just key/value pairs you want to change
    }

    render(){

        return(
            <div>
                <h1>Make Your Collection</h1>
                    {this.makePlantCards()}
            </div>
        )
        
    }

    makePlantCards (){
       return this.state.plants.map( plant =>  < PlantCard info={plant} /> ) 
       
    }

}
