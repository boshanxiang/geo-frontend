import { Component } from 'react'
import {Map, GoogleApiWrapper} from "google-maps-react"

const mapStyles = {
    width: '25%',
    height: '50%'
}

export class MapContainer extends Component {

    render() {
        return (
            <div className="centermaps flexitem">
                <Map 
                    google = {this.props.google}
                    xoom = {8}
                    style = {mapStyles}
                    initialCenter = {{lat: -1.2884, lng: 36.8233}}
                ></Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCwksum9i8ufeThaXMWHAjrzEexx8j2qJc'
  })(MapContainer)