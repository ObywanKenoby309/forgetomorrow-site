<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>ForgeTomorrow - Tools</title>
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

  <main class="max-w-5xl mx-auto p-6 space-y-12 min-h-[80vh]">

    <h1 class="text-4xl font-bold text-[#FF7043] mb-6 text-center">Tools & Resources</h1>

    <section class="grid gap-10 md:grid-cols-2">

      <!-- The Pipeline -->
      <div
        class="bg-white rounded-lg shadow p-8 cursor-pointer hover:shadow-lg transition-shadow"
        onclick="window.location.href='the-pipeline.html'"
        tabindex="0"
        role="button"
        aria-label="Go to The Pipeline (Jobs)"
      >
        <h2 class="text-3xl font-semibold text-[#FF7043] mb-4">The Pipeline</h2>
        <p class="text-gray-700 mb-6">
          Browse and apply to curated job listings tailored to your skills and preferences. Our AI helps surface the best opportunities.
        </p>
        <button
          class="bg-[#FF7043] hover:bg-[#F4511E] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          aria-label="Explore The Pipeline"
        >
          Explore Jobs
        </button>
      </div>

      <!-- The Hearth -->
      <div
        class="bg-white rounded-lg shadow p-8 cursor-pointer hover:shadow-lg transition-shadow"
        onclick="window.location.href='the-hearth.html'"
        tabindex="0"
        role="button"
        aria-label="Go to The Hearth (Networking)"
      >
        <h2 class="text-3xl font-semibold text-[#FF7043] mb-4">The Hearth</h2>
        <p class="text-gray-700 mb-6">
          Connect, network, and collaborate with your contacts, mentors, and community. Manage your connections and upcoming events all in one place.
        </p>
        <button
          class="bg-[#FF7043] hover:bg-[#F4511E] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          aria-label="Explore The Hearth"
        >
          Explore Network
        </button>
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
