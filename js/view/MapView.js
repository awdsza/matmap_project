import View from './View.js';

export default class MapView extends View{
    constructor() {
        super(View);
        this.MAP_INIT_OPTION={
            center: new naver.maps.LatLng(37.3595704, 127.105399),
            zoom: 10
        };
        this.MAP_OBJECT=null;
    }

    setup(el){
        this.init(el);
        this.MAP_OBJECT = new naver.maps.Map(el.id, this.MAP_INIT_OPTION);
    }
};
