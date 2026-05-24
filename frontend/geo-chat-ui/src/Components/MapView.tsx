import {
  GoogleMap,
  Marker,
  useJsApiLoader,
} from '@react-google-maps/api'

const center = {
  lat: 18.5204,
  lng: 73.8567,
}

function MapView() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: apiKey ?? '',
  })

  if (!apiKey) {
    return (
      <div className="h-full flex items-center justify-center text-center text-sm text-red-600">
        Google Maps API key is not configured. Set <code>VITE_GOOGLE_MAPS_API_KEY</code> in your environment.
      </div>
    )
  }

  if (loadError) {
    return (
      <div className="h-full flex items-center justify-center text-center text-sm text-red-600">
        Failed to load Google Maps. Please check your API key and network connection.
      </div>
    )
  }

  if (!isLoaded) {
    return <div>Loading map...</div>
  }

  return (
    <GoogleMap
      mapContainerStyle={{
        width: '100%',
        height: '100vh',
      }}
      center={center}
      zoom={11}
    >
      <Marker position={center} />
    </GoogleMap>
  )
}

export default MapView