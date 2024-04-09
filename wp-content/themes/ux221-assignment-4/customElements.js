class CopyrightYear extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", CopyrightYear);

class RichWasHere extends HTMLElement{
  connectedCallback(){
    this.innerHTML = "Rich was here";
  }
}

customElements.define("x-rich", RichWasHere);