import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.2753,
      lng: 15.2134
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyABVAA9aIKApXf2irVnl3ikBSmhO-jN25M" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.2753}
            lng={15.2134}
            text="The Best City in Sweden"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;