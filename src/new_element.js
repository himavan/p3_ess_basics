import {LitElement, html} from '@polymer/lit-element';

class NewElement extends LitElement {
    _render(){
        return html `New webcomponent is created`
    }
}
customElements.define('new-element', NewElement);