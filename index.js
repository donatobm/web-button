class btnElement extends HTMLElement{
     constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }

    btnShow() {
      this.shadowRoot.innerHTML = '<link rel="stylesheet" type="text/css" href="index.css"> <button class = "btn-1">Activado</button>';
    }

    connectedCallback() {
      this.shadowRoot.innerHTML = '<link rel="stylesheet" type="text/css" href="index.css"> <button id="button">Presiona para activar</button> ';
      this.button = this.shadowRoot.getElementById('button');
      this.button.onclick = () => this.btnShow();
    }

  }

  window.customElements.define("btn-element", btnElement);