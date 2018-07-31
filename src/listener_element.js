import { LitElement, html } from "../node_modules/@polymer/lit-element";

class ListElement extends LitElement{

    constructor(){
        super();
        this.num = 0;
    }

    static get properties(){
        return{
            num:Number
        }
    }

    _firstRendered(){
        const mybtn = this._root.getElementById('My-Btn');
        mybtn.addEventListener('click',e => {this.num +=1})
    }

    _render(){
        return html `
            <div id = "text">Button clicked ${this.num} times</div>
            <button id="My-Btn">button</button>
        `;
    }

}

customElements.define('listener-element',ListElement);