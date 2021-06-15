import { Component } from 'react'
import {Map, GoogleApiWrapper} from "google-maps-react"

const mapStyles = {
    width: '100%',
    height: '100%'
  }

class CenterMaps extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // http request = locationURL + output + input + search text + inputtype + optional params + apikey
            locationURL: "https://maps.googleapis.com/maps/api/place/findplacefromtext/",
            output: "json?",
            input: "?input=",
            searchText: "", // spaces must be replaced w "%20" - filter?
            inputType: "&inputtype=textquery",
            keyword: "&keyword=restaurant",
            apiKey: "&key=AIzaSyDe6WRFuz0lxAuAJ1ZfiviZuQXRrtQCjc0",
            lat: "",
            lng: "",
            location: {}
        }
    }
    setSearchText = () => {

    }

    // searchRestaurant = () => {
    //     fetch(locationURL + output + input + searchText + inputType + keyword + apiKey)
    //         .then(data => { return data.json() }, err => console.log(err))
    //         .then(parsedData => this.setState({ location: parsedData }), err => console.log(err))
    // }
    render() {
        return (
            <div class="centermaps flexitem">
                <h1>Center Maps </h1>
                <iframe className = "mapView">
                    
                </iframe>
                {/* <Map 
                    google = {this.props.google}
                    xoom = {8}
                    style = {mapStyles}
                    initialCenter = {{lat: Number(this.state.lat), lng: Number(this.state.lng)}}
                ></Map> */}
            </div>
        )
    }
}

export default CenterMaps 