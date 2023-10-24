import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export class AppRoot extends LitElement {
  render() {
    return html`This Is Web Components. <a href="https://hhj.devent.kr">@hhj</a> `;
  }
}


customElements.define('app-root', AppRoot);
