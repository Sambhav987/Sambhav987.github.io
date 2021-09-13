class ProjectCard extends HTMLElement {
    constructor() {
      super();
    }
    

  connectedCallback() {
    this.innerHTML = `
    <link href="/css/style.css" rel="stylesheet">
    <div class="lg:w-96 md:w-60 w-max p-3 text-black text-center projectcard">
    <p class="text-3xl" id="title">Project Name</p>
    <p id="desc">Project  Description</p>
    </div>
    `;
  }
}
  customElements.define('project-card', ProjectCard);