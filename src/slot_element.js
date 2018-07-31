import {LitElement, html} from '@polymer/lit-element';

class SlotElement extends LitElement{
    _render(){
        return html`
        <div>
            <slot>Enter your Text Here</slot>
        </div>
        `;
    }
}

customElements.define('slot-element', SlotElement);