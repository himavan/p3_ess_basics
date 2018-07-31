import {LitElement, html} from '@polymer/lit-element';

class EventsElement extends LitElement{

    constructor(){
        super();
        this.total=0;
    }

    static get properties(){
        return {
            total: Number
        }

    }

    _clickHandler(e){
        this.total = this.total + 1
        this._root.getElementById('text').innerHTML = e.path[0].id + " Clicked " + this.total + " times";
    }


    _render(){
        return html`
        <div id="text" >
        </div>
        <button id="This-Btn" on-click="${(e) => this._clickHandler(e)}">button</button>
        `;
    }
}

customElements.define('events-element', EventsElement);