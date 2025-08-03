<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>ForgeTomorrow - Profile</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
  <style>
    body {
      font-family: 'Inter', sans-serif;
    }
    /* Circular profile image with accent border */
    .profile-pic {
      width: 140px;
      height: 140px;
      border-radius: 50%;
      border: 4px solid #FF7043;
      object-fit: cover;
      box-shadow: 0 0 10px rgba(255,112,67,0.5);
    }
  </style>
</head>
<body class="bg-[#ECEFF1] text-[#212121]">

  <!-- Header placeholder -->
  <div id="header-placeholder"></div>

  <main class="max-w-4xl mx-auto p-6 space-y-10 min-h-[80vh]">

    <!-- Top Section: Image and Basic Info -->
    <section class="bg-white rounded-lg shadow p-8 flex flex-col items-center sm:flex-row sm:items-center sm:space-x-8 relative">
      
      <!-- Profile Picture -->
      <div>
        <img
          src="https://via.placeholder.com/140"
          alt="Profile picture"
          class="profile-pic mb-6 sm:mb-0"
          aria-label="User profile picture"
        />
        <button
          class="mt-3 w-full sm:w-auto bg-[#FF7043] hover:bg-[#F4511E] text-white px-4 py-2 rounded font-semibold transition-colors"
          aria-label="Update profile picture"
          onclick="alert('Profile picture update feature coming soon!')"
        >
          Update Picture
        </button>
      </div>

      <!-- Basic Info -->
      <div class="flex-1 space-y-4">
        <div>
          <h1 class="text-4xl font-bold text-[#FF7043]">Eric James</h1>
          <p class="text-gray-700 text-lg">He/Him</p>
        </div>
        <div>
          <p class="text-gray-600 italic max-w-lg">Customer Success Leader & AI Advocate</p>
        </div>
        <div class="flex flex-wrap gap-4 text-gray-600">
          <span>Location: Nashville, TN</span>
          <span>Status: Open to Opportunities</span>
        </div>
      </div>
    </section>

    <!-- About Me Section -->
    <section class="bg-white rounded-lg shadow p-6 relative">
      <button
        class="absolute top-4 right-4 bg-[#FF7043] hover:bg-[#F4511E] text-white px-3 py-1 rounded text-sm font-semibold"
        aria-label="Edit About Me"
        onclick="alert('Edit About Me feature coming soon!')"
      >
        Edit
      </button>
      <h2 class="text-2xl font-semibold text-[#FF7043] mb-4">About Me</h2>
      <p class="text-gray-700">
        Experienced leader with 20+ years in customer success, technical support, and team management. Passionate about building authentic professional relationships and leveraging AI to empower job seekers.
      </p>
    </section>

    <!-- Professional History Link -->
    <section class="bg-white rounded-lg shadow p-6 flex justify-between items-center cursor-pointer hover:shadow-md transition-shadow"
      onclick="alert('Professional History section coming soon!')"
      tabindex="0" role="button" aria-label="Go to Professional History">
      <h2 class="text-2xl font-semibold text-[#FF7043]">Professional History</h2>
      <span class="text-[#FF7043] font-bold text-xl">→</span>
    </section>

    <!-- Analytics Link -->
    <section class="bg-white rounded-lg shadow p-6 flex justify-between items-center cursor-pointer hover:shadow-md transition-shadow"
      onclick="alert('Analytics dashboard coming soon!')"
      tabindex="0" role="button" aria-label="Go to Analytics Dashboard">
      <h2 class="text-2xl font-semibold text-[#FF7043]">Analytics</h2>
      <span class="text-[#FF7043] font-bold text-xl">→</span>
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
