<header class="bg-[#37474F] text-white flex justify-between items-center px-6 py-4 shadow-md">
  <div class="flex items-center space-x-3">
    <a href="index.html" class="text-[#FF7043] font-bold text-xl tracking-wide flex items-center">
      Forge Tomorrow
    </a>
  </div>
  <!-- Hamburger button visible on small screens -->
  <button id="nav-toggle" class="block md:hidden focus:outline-none" aria-label="Toggle navigation">
    <svg class="h-6 w-6 text-[#FF7043]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>
  <nav id="nav-menu" class="hidden md:flex flex-col md:flex-row md:space-x-6 text-lg font-medium absolute md:static top-16 left-0 w-full md:w-auto bg-[#37474F] md:bg-transparent z-50">
    <a href="index.html" class="block px-6 py-2 md:p-0 hover:underline border-b border-gray-700 md:border-none">Home</a>
    <a href="the-hearth.html" class="block px-6 py-2 md:p-0 hover:underline border-b border-gray-700 md:border-none">My Network</a>
    <a href="the-pipeline.html" class="block px-6 py-2 md:p-0 hover:underline border-b border-gray-700 md:border-none">Jobs</a>
    <a href="profile.html" class="block px-6 py-2 md:p-0 hover:underline border-b border-gray-700 md:border-none">Profile</a>
    <a href="support.html" class="block px-6 py-2 md:p-0 hover:underline">Support</a>
  </nav>
</header>

<script>
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
  });
</script>
