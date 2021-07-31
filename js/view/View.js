export default class View{
    constructor(props) {
      //  super(props);
    }

    init(el){
        this.el=el;
        return this;
    }

    on(event,handler){
        this.el.addEventListener(event,handler);
        return this;
    }
    emit(event,value){
        const evt = new CustomEvent(event,{data:value});
        this.el.dispatchEvent(evt);
        return this;
    }
    hide(){
        this.el.style.display='none';
        return this;
    }
    show(){
        this.el.style.display='none';
        return this;
    }
}
