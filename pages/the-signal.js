<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>ForgeTomorrow - The Signal</title>
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

    <h1 class="text-4xl font-bold text-[#FF7043] mb-6 text-center">The Signal</h1>

    <section class="space-y-6">

      <!-- Example Notification -->
      <article class="bg-white rounded-lg shadow p-6 flex items-start space-x-4">
        <div class="flex-shrink-0">
          <span class="inline-block bg-[#FF7043] text-white rounded-full px-3 py-1 text-sm font-semibold">Message</span>
        </div>
        <div>
          <p class="text-gray-700 mb-1"><strong>New message from Jane D.</strong></p>
          <p class="text-gray-600">Hey Eric, I'd love to connect and discuss your experience with AI tools.</p>
          <time datetime="2025-08-01T15:45" class="text-gray-400 text-xs">2 hours ago</time>
        </div>
      </article>

      <article class="bg-white rounded-lg shadow p-6 flex items-start space-x-4">
        <div class="flex-shrink-0">
          <span class="inline-block bg-[#FF7043] text-white rounded-full px-3 py-1 text-sm font-semibold">Job Alert</span>
        </div>
        <div>
          <p class="text-gray-700 mb-1"><strong>New job posted: Senior Product Manager</strong></p>
          <p class="text-gray-600">Company XYZ just posted a new opportunity that matches your profile.</p>
          <time datetime="2025-07-31T10:00" class="text-gray-400 text-xs">1 day ago</time>
        </div>
      </article>

      <!-- More notifications here -->

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
