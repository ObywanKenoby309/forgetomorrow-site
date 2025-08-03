<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>ForgeTomorrow - Community Feed</title>
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

  <main class="max-w-4xl mx-auto p-6 space-y-8 min-h-[80vh]">

    <h1 class="text-4xl font-bold text-[#FF7043] mb-6 text-center">Community Feed</h1>

    <!-- Feed posts -->
    <section class="space-y-6">

      <!-- Example Post -->
      <article class="bg-white rounded-lg shadow p-6">
        <header class="flex items-center justify-between mb-4">
          <div>
            <h2 class="text-lg font-semibold text-[#FF7043]">Eric James</h2>
            <time datetime="2025-08-01T10:30" class="text-gray-500 text-sm">August 1, 2025</time>
          </div>
          <button
            class="text-gray-400 hover:text-[#FF7043] focus:outline-none"
            aria-label="React to post"
            onclick="alert('React feature coming soon!')"
          >
            👍
          </button>
        </header>
        <p class="text-gray-700 leading-relaxed">
          Just launched the new ForgeTomorrow platform! Excited to build a community focused on real connections and jobs—not noise.
        </p>
      </article>

      <!-- More posts can be added dynamically here -->

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
