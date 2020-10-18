import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import mapMarkerImg from '../Sources/LogoHappy.svg'
import { FiPlus, FiArrowRight} from 'react-icons/fi'
import '../Styles/Pages/OrphonagesMap.css'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import mapIcon from '../Utils/MapIcon'
import api from '../Services/api'


interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}



function OrphonagesMap(){

  const [orphanages, setOrphanages] = useState<Orphanage[]>([])

  useEffect(() => {
    api.get('orphanages')
    .then(response => {
      setOrphanages(response.data)
    })
  }, []);

  return(
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
        </header>

        <footer>
          <strong>Pindamonhangaba</strong>
          <span>São Paulo</span>
        </footer>
      </aside>
      <Map
      center={[-22.9267181,-45.458624,]}
      zoom={15}
      style={{ width: '100%' , height: '100%'}}>
        <TileLayer 
        url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_HAPBOX_TOKEN}`}
         />
      {
        orphanages.map(orphanage => {
          return(
            <Marker 
            icon={mapIcon}
            position={[orphanage.latitude,orphanage.longitude]}
            key={orphanage.id}
            >
              <Popup classButton={false} minWidth={240} maxWidth={240} className="map-popup">
                {orphanage.name}
                <Link to={`/orphanages/${orphanage.id}`}>
                   <FiArrowRight size={28} color="#FFF" />
                </Link>
              </Popup>
              </Marker>
          )
        })
      }
        </Map>
      <Link to="/orphanages/create" className="create-orphonage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  )
}

export default OrphonagesMap;