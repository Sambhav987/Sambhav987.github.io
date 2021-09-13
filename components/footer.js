class Footer extends HTMLElement {
    constructor() {
      super();
    }

  connectedCallback() {
    this.innerHTML = `
    <footer class="bg-gray-600 flex flex-col text-center text-white py-6" role="contentinfo">
<div class="flex flex-col items-center justify-center">
   <p class="text-sm mb-1">
       <time>© 2021</time> • Copyright Sambhav Agarwal. All rights reserved.
   </p>
</div>
<br>
<div class="flex items-center justify-center">
   <a href="https://instagram.com/Sambhav9876" class="text-sm mr-2 ml-2 hover:text-green-400" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram fa-2x"></i></a>
   <a href="https://facebook.com/sambhav9876" class="text-sm mr-2 ml-2 hover:text-green-400"><i class="fab fa-facebook-f fa-2x"></i></a>
   <a href="https://twitter.com/Sambhav987" class="text-sm mr-2 ml-2 hover:text-green-400" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter fa-2x"></i></a>
   <a href="https://github.com/sambhav987" class="text-sm mr-2 ml-2 hover:text-green-400" target="_blank" rel="noopener noreferrer"><i class="fab fa-github fa-2x"></i></a>
   <a href="https://linkedin.com/in/sambhav987" class="text-sm mr-2 ml-2 hover:text-green-400"><i class="fab fa-linkedin fa-2x"></i></a>
   
</div>
    </footer> 
    `;
  }
}
  customElements.define('footer-component', Footer);