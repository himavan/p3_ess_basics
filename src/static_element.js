import {LitElement, html} from '@polymer/lit-element';

class StaticElement extends LitElement {
    _render(){
        return html `<h4>Static webcomponent is <i>created</i></h4>`
    }
}
customElements.define('static-element', StaticElement);