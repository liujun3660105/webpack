import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {transform} from 'ol/proj';
import './index.css'
const map = new Map({
    target:'map',
    layers:[
        new TileLayer({
            source:new OSM()
        })
    ],
    view:new View({
        center:transform([117,39.5],'EPSG:4326','EPSG:3857'),
        zoom:15
    })
})