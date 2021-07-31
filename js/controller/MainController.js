import MapView from '../view/MapView.js';

export default class MapController{
    mapView=null;
    constructor(){}
    init(){
        this.mapView = new MapView();
        this.mapView.setup(document.querySelector('#app'));
    }
}
