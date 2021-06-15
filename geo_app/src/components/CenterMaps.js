import { Component } from 'react'
import {Map, GoogleApiWrapper} from "google-maps-react"

const mapStyles = {
    width: '25%',
    height: '25%'
}

export class MapContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // http request = locationURL + output + input + search text + inputtype + optional params + apikey
            locationURL: "https://maps.googleapis.com/maps/api/place/findplacefromtext/",
            output: "json",
            input: "?input=",
            searchText: "mcdonalds", // spaces must be replaced w "%20" - filter?
            inputType: "&inputtype=textquery",
            keyword: "&keyword=restaurant",
            apiKey: "&key=AIzaSyDe6WRFuz0lxAuAJ1ZfiviZuQXRrtQCjc0",
            lat: "",
            lng: "",
            location: []
        }
    }
    setSearchText = () => {

    }

    searchRestaurant = () => {
        console.log(this.state.locationURL + this.state.output + this.state.input + this.state.searchText + this.state.inputType + this.state.keyword + this.state.apiKey)
        fetch(this.state.locationURL + this.state.output + this.state.input + this.state.searchText + this.state.inputType + this.state.keyword + this.state.apiKey)
            .then(data => { return data.json() }, err => console.log(err))
            .then(parsedData => this.setState({ location: parsedData }), err => console.log(err))
        console.log(this.state.location)
    }

    render() {
        return (
            // <div className="centermaps flexitem">
            //     <h1>Center Maps </h1>
            //     <iframe className = "mapView">
                    
            //     </iframe>
                <Map 
                    google = {this.props.google}
                    xoom = {8}
                    style = {mapStyles}
                    initialCenter = {{lat: -1.2884, lng: 36.8233}}
                ></Map>
                // <button onClick = {() => this.searchRestaurant()}>FETCH</button>
            // </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDe6WRFuz0lxAuAJ1ZfiviZuQXRrtQCjc0'
  })(MapContainer)