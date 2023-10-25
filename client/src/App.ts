import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('app-page')
export default class App extends LitElement {
    static styles = css`
        p { 
            color: blue;
            display: block;
        }
    `;

    render() {
        return html` <p>This Is Web Components.</p> <a href="https://hhj.devent.kr">@hhj</a> `;
    }
}