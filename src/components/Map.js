// import React from 'react';
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

// const MapComponent = withScriptjs(withGoogleMap((props) => (
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: -34.397, lng: 150.644 }}
//   >
//     {props.markers.map(marker => (
//       <Marker
//         key={marker.id}
//         position={{ lat: marker.lat, lng: marker.lng }}
//       />
//     ))}
//   </GoogleMap>
// )));

// const Map = () => {
//   // Dummy data for store locations
//   const markers = [
//     { id: 1, lat: -34.397, lng: 150.644 }, // Example marker
//     // Add more markers for store locations
//   ];

//   return (
//     <section id="map">
//       <h2>Find Our Stores</h2>
//       <div style={{ width: '100%', height: '400px' }}>
//         <MapComponent
//           googleMapURL={`https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&v=3.exp&libraries=geometry,drawing,places`}
//           loadingElement={<div style={{ height: `100%` }} />}
//           containerElement={<div style={{ height: `100%` }} />}
//           mapElement={<div style={{ height: `100%` }} />}
//           markers={markers}
//         />
//       </div>
//     </section>
//   );
// }

// export default Map;
