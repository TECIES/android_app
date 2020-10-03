import React from "react";
import {
  Text,
  TextInput,
  Button,
  Headline,
  Paragraph,
  Divider,
  Avatar,
  Surface,
  DarkTheme,
  FAB,
} from "react-native-paper";

import { StyleSheet, View } from "react-native";

import MapView, { Marker, Polyline } from "react-native-maps";

//to:do  replace mapview with mapbox after moving over to react native instead of expo 

var _map: MapView;

var road_coords = [
  { latitude: 26.183477, longitude: 92.657631 },
  { latitude: 26.181721, longitude: 92.656776 },
  { latitude: 26.168432, longitude: 92.654251 },
  { latitude: 26.16391, longitude: 92.655655 },
  { latitude: 26.15374303783371, longitude: 92.65328407287599 },
  { latitude: 26.148272865683566, longitude: 92.65268325805665 },
];

const TokenScreen = () => {

  const [coords, setcoords] = React.useState(false)

  return (<View style={styles.view}>
    <Surface style={styles.TokenBoxSurface}>
      <TextInput
        style={styles.tokenBox}
        mode="outlined"
        label="Journey Token"
      />
      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        <FAB
          style={styles.fab}
          icon="arrow-right-bold"
          onPress={() =>
            {setcoords(true);
            _map.animateCamera(
      {
        center: road_coords[2],
        zoom: 14
      },
      5000
    );
            }
          }
        />
      </View>
    </Surface>
    <Surface style={styles.InfoSurface}>
      <MapView
      customMapStyle={mapStyle}
        ref={(map) => {
          _map = map;
        }}
        style={styles.mapStyle}
        initialRegion={{
          latitude: 26.163477,
          longitude: 92.658631,
          latitudeDelta: 0.522,
          longitudeDelta: 0.5821,
        }}
      >
        {/* {road_coords.map((marker) => (
          <Marker
            coordinate={marker}
          />
        ))} */}
        {coords?<Polyline strokeWidth={10} strokeColor='#b4e3a1' coordinates={road_coords}/>:null}
      </MapView>
      {/* <Headline>How to get a Token</Headline>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales
        luctus tincidunt. In euismod nibh nec elementum blandit. Morbi sagittis
        fermentum rutrum. Vivamus diam metus, consectetur non finibus tincidunt,
        gravida semper quam. In in venenatis odio. Nam gravida turpis sit amet
        consequat tincidunt. In interdum tortor ut justo pretium condimentum.
        Duis posuere rhoncus ante nec facilisis. Vivamus non tellus massa. Sed
        bibendum justo a vulputate congue. Etiam et ante et ex sollicitudin
        efficitur. Nulla a leo diam. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Curabitur vehicula at neque
        ac tristique. Cras nec porta ligula, vel mattis tellus. Mauris id neque
        ut nisi vehicula dignissim non a diam. Ut tempus turpis turpis, ut
        ullamcorper ipsum tristique in. Phasellus egestas eu odio quis viverra.
        Phasellus sit amet sapien nec justo vehicula feugiat. Nunc non
        vestibulum diam, vel consequat eros. Nam venenatis magna nec sem
        eleifend volutpat. Mauris commodo nulla ut dui consectetur, vel
        facilisis justo scelerisque. Integer vel magna nec quam accumsan cursus.
        Sed eu mattis urna, a consectetur nisl. Sed quis facilisis magna. In ac
        ex laoreet, dapibus mi quis, pharetra metus. Curabitur ac mauris eu nibh
        rhoncus rhoncus. Aliquam et ante vel risus malesuada congue. Vivamus
        eleifend velit ligula, ac pharetra diam egestas ut. Praesent nec lacinia
        mi. Sed porttitor eu nisl non mollis. Praesent placerat sit amet justo
        at mattis. Proin non aliquet risus. Vestibulum ultricies nunc at nisl
        blandit malesuada. Ut mollis rhoncus ultrices. Cras nec risus risus. In
        diam lacus, aliquam sed mi quis, cursus facilisis augue. Fusce sodales
        aliquam arcu ac condimentum. Nullam a dui lectus. Sed euismod quam eget
        tristique finibus. Fusce vel magna viverra, egestas risus non, suscipit
        lectus.
      </Paragraph> */}
    </Surface>
  </View>
)};

mapStyle=[
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#263c3f"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6b9a76"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#38414e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#212a37"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9ca5b3"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#1f2835"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#f3d19c"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2f3948"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#515c6d"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  }
]

const MapScreen = () => (
  <View style={styles.view}>
    <View style={styles.view}>
      <Text>Hi</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  view: {
    backgroundColor: DarkTheme.colors.surface,
    flex: 1,
    padding: 10,
    justifyContent: "flex-start",
    alignContent: "center",
    flexDirection: "column",
  },
  TokenBoxSurface: {
    flexGrow: 0,
    padding: 10,
    width: "100%",
    alignSelf: "flex-start",
    elevation: 1,
    flexDirection: "column",
  },
  InfoSurface: {
    marginTop: 10,
    padding: 10,
    flexGrow: 1,
  },
  tokenBox: {},
  fab: {
    flex: 0,
    elevation: 0,
    alignSelf: "flex-end",
    marginTop: -20,
    marginBottom: -30,
    marginRight: 20,
  },
  mapStyle: {
    flex: 1,
  },
});

export { TokenScreen, MapScreen };
