<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>ForgeTomorrow - The Hearth</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
  <style>
    body {
      font-family: 'Inter', sans-serif;
    }
  </style>
</head>
<body class="bg-[#ECEFF1] text-[#212121]">

  <!-- Header placeholder -->
  <div id="header-placeholder"></div>

  <main class="max-w-7xl mx-auto p-6 space-y-8 min-h-[80vh]">
    <section class="bg-white rounded-lg shadow p-8">
      <h1 class="text-4xl font-bold text-[#FF7043] mb-6 text-center">The Hearth</h1>
      <p class="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
        Your central place to build connections, find mentors, and grow your professional network with purpose and authenticity.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div class="bg-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
          <h2 class="text-2xl font-semibold mb-3 text-[#FF7043]">Mentorship Programs</h2>
          <p>Connect with experienced mentors to guide your career journey.</p>
        </div>
        <div class="bg-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
          <h2 class="text-2xl font-semibold mb-3 text-[#FF7043]">Community Events</h2>
          <p>Join workshops, webinars, and networking events tailored for growth.</p>
        </div>
        <div class="bg-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
          <h2 class="text-2xl font-semibold mb-3 text-[#FF7043]">Discussion Forums</h2>
          <p>Engage in meaningful conversations and share knowledge.</p>
        </div>
        <div class="bg-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
          <h2 class="text-2xl font-semibold mb-3 text-[#FF7043]">Resource Library</h2>
          <p>Access articles, guides, and tools to support your professional growth.</p>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer placeholder -->
  <div id="footer-placeholder"></div>

  <script>
    fetch('header.html')
      .then(res => res.text())
      .then(html => document.getElementById('header-placeholder').innerHTML = html)
      .catch(err => console.error('Error loading header:', err));

    fetch('footer.html')
      .then(res => res.text())
      .then(html => document.getElementById('footer-placeholder').innerHTML = html)
      .catch(err => console.error('Error loading footer:', err));
  </script>
</body>
</html>
