class CopyrightYear extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", CopyrightYear);

class JaydenWasHere extends HTMLElement{
  connectedCallback(){
    this.innerHTML = "Jayden was here";
  }
}

customElements.define("x-jayden", JaydenWasHere);

class TwoSidedMarket extends HTMLElement {
	connectedCallback(){
		this.innerHTML = '<a href="side-a">Side A</a>'
	}
}

customElements.define("x-twoside", TwoSidedMarket);