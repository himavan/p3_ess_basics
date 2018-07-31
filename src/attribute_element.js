import {LitElement, html} from '@polymer/lit-element';

class AttrElement extends LitElement {

    static get properties(){
        return {
            textColor:String
        }
    }

    _render({textColor}){
        return html `
            <style>.textStyle{color:${textColor}}</style>
            <span class="textStyle">My webcomponent color is ${textColor} !</span>
            `;
    }
}
customElements.define('attr-element', AttrElement);