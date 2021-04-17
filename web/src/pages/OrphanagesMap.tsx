import React, { Component } from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import '../styles/global.css';
import '../styles/pages/orphanages-map.css';

import mapMarkerImg from '../images/map-marker.svg';


function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Salvador</strong>
                    <span>Bahia</span>
                </footer>
            </aside>

            <MapContainer
                center={[-13.0177006,-38.4744683]}
                zoom={16}
                style={{ width: '100%', height: '100%' }}
                maxZoom={18}
            >
                <TileLayer
                    url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
            </MapContainer>

            <Link to="/" className="create-orphanage">
                <FiPlus size={26} color="rgba(255, 255, 255, 0.6)" />
            </Link>
        </div>
    )
}

export default OrphanagesMap;
