import { Component } from 'react'
import {Map, GoogleApiWrapper, InfoWindow, Marker} from "google-maps-react"
import CurrentLocation from './Map';

const mapStyles = {
    width: '40%',
    height: '50%'
}

export class MapContainer extends Component {
    constructor(props){
        super(props)

        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        }
    }

    onMarkerClick = (props, marker, e) =>
    this.setState({
      showingInfoWindow: true,
      selectedPlace: props,
      activeMarker: marker
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

    render() {
        return (
            <div>
                <h1>Map Location</h1>
                {/* <CurrentLocation
                    centerAroundCurrentLocation
                    google={this.props.google}
                > */}
                <Map
                    google={this.props.google}
                    zoom={14}
                    style={mapStyles}
                    initialCenter={
                    {
                        lat: Number(this.props.review.lat),
                        lng: Number(this.props.review.lng)
                    }
                    }
                >
                    <Marker
                        onClick={this.onMarkerClick}
                        name={'Current Location'}
                        />
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                        onClose={this.onClose}
                        >
                        <h4>{this.state.selectedPlace.name}</h4>
                    </InfoWindow>
                {/* </CurrentLocation> */}
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCwksum9i8ufeThaXMWHAjrzEexx8j2qJc'
  })(MapContainer)