import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import "./App"

@customElement('app-root')
export class AppRoot extends LitElement {
  render() {
    return html`<app-page></app-page>`;
  }
}
