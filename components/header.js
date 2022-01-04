class Header extends HTMLElement {
    constructor() {
      super();
    }
    

  connectedCallback() {
    this.innerHTML = `
    <header class="bg-gray-600 py-12 px-6" role="banner">
    <nav class="relative max-w-7xl mx-auto flex items-center justify-between" aria-label="Global">
    <a href="/" class="text-white font-bold text-2xl hover:text-green-400 lg:text-3xl" title="Sambhav Agarwal">
       Sambhav Agarwal.
    </a>
    <nav class="inline-block" aria-label="Main">
       <ul class="flex items-center justify-end space-x-8 text-white font-semibold" role="menubar">
           <li role="menuitem">
               <a href="/tools.html" class="text-xl animate-left">Tools</a>
           </li>
           <li role="menuitem">
               <a href="/projects.html" class="text-xl animate-left">Projects</a>
           </li>
           <li class="sm:flex" role="menuitem">
               <a href="https://instagram.com/Sambhav9876" target="_blank" rel="noopener noreferrer" class="hover:text-green-400">
                   <span class="sr-only">Twitter</span>
                   <i class="fab fa-instagram fa-2x"></i>
               </a>
           </li>
           <li class="hidden sm:flex" role="menuitem">
               <a href="https://github.com/sambhav987" rel="noopener noreferrer" class="hover:text-green-400">
                <i class="fab fa-github fa-2x"></i>
               </a>
           </li>
       </ul>
    </nav>
    </nav>
    </header>
    `;
  }
}
  customElements.define('header-component', Header);