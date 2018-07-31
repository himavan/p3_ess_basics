import {LitElement, html} from '@polymer/lit-element';

class ExprElement extends LitElement{

    static get properties(){
        return {
            disabled:Boolean
        }
    }
     
    _render({disabled}){
        return html`<div>Element is visible: ${disabled ? 'False' : 'True'} </div>`
    }
}

customElements.define('expr-element',ExprElement);