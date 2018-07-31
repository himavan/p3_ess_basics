import {LitElement, html} from '@polymer/lit-element'

class shadowElement extends LitElement{
    _render(){
        return html `
        <style>
            :host{
            display: block;
            }
            .myStyle{
                color:red;
                background:wheat;
                padding:20px;
                font-size:20px;
            }
        </style>
        <div class="myStyle">
            I'm shadow element.
        </div>
        `;
    }
}
customElements.define('shadow-element',shadowElement);