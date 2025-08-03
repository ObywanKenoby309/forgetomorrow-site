<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>ForgeTomorrow - Messages</title>
  <link rel="icon" href="/favicon.ico" type="image/x-icon" />
  <style>
    /* Base reset and fonts */
    * {
      margin: 0; padding: 0; box-sizing: border-box;
    }
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(to bottom, #1a1a1a, #000);
      color: #f5f5f5;
      height: 100vh;
      display: flex;
      flex-direction: column;
    }

    /* Messages page styles */
    main {
      max-width: 900px;
      margin: 0 auto;
      flex-grow: 1;
      display: flex;
      background: #222;
      border-radius: 8px;
      overflow: hidden;
      height: calc(100vh - 160px); /* nav + header + some padding */
    }

    .threads {
      width: 300px;
      background: #1a1a1a;
      border-right: 1px solid #444;
      overflow-y: auto;
    }
    .thread {
      padding: 1rem;
      border-bottom: 1px solid #333;
      cursor: pointer;
      color: #ccc;
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }
    .thread:hover,
    .thread.active {
      background: #ff4500;
      color: white;
    }
    .thread .name {
      font-weight: bold;
      font-size: 1rem;
    }
    .thread .preview {
      font-size: 0.85rem;
      color: #999;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .thread .time {
      font-size: 0.75rem;
      color: #666;
      align-self: flex-end;
    }

    .chat {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      padding: 1rem;
      color: #eee;
    }
    .messages {
      flex-grow: 1;
      overflow-y: auto;
      margin-bottom: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
    .message {
      max-width: 70%;
      padding: 0.75rem 1rem;
      border-radius: 15px;
      line-height: 1.3;
    }
    .message.sent {
      background: #ff4500;
      color: white;
      align-self: flex-end;
      border-bottom-right-radius: 0;
    }
    .message.received {
      background: #333;
      color: #ddd;
      align-self: flex-start;
      border-bottom-left-radius: 0;
    }
    .message .time {
      font-size: 0.65rem;
      color: #bbb;
      margin-top: 0.25rem;
      text-align: right;
    }
    .input-area {
      display: flex;
      gap: 0.5rem;
    }
    .input-area textarea {
      flex-grow: 1;
      resize: none;
      border-radius: 5px;
      border: none;
      padding: 0.75rem 1rem;
      font-size: 1rem;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: #333;
      color: white;
      height: 60px;
    }
    .input-area button {
      background: #ff4500;
      border: none;
      color: white;
      padding: 0 1.5rem;
      border-radius: 5px;
      cursor: pointer;
      font-weight: bold;
      transition: background 0.3s;
    }
    .input-area button:hover {
      background: #e03d00;
    }

    /* Responsive */
    @media (max-width: 700px) {
      main {
        flex-direction: column;
        height: auto;
      }
      .threads {
        width: 100%;
        max-height: 200px;
        border-right: none;
        border-bottom: 1px solid #444;
      }
      .chat {
        height: 300px;
      }
    }
  </style>
</head>
<body>

  <!-- Placeholder for header -->
  <div id="header-placeholder"></div>

  <main>
    <div class="threads" id="threads">
      <div class="thread active" data-id="1">
        <div class="name">Jane Doe</div>
        <div class="preview">Hey Eric, excited about ForgeTomorrow!</div>
        <div class="time">2h ago</div>
      </div>
      <div class="thread" data-id="2">
        <div class="name">John Smith</div>
        <div class="preview">Let's schedule a call.</div>
        <div class="time">1d ago</div>
      </div>
      <div class="thread" data-id="3">
        <div class="name">Samantha Lee</div>
        <div class="preview">Thanks for the update.</div>
        <div class="time">3d ago</div>
      </div>
    </div>

    <div class="chat" id="chat">
      <div class="messages" id="messages">
        <div class="message received">
          Hey Eric! Excited about ForgeTomorrow?
          <div class="time">10:15 AM</div>
        </div>
        <div class="message sent">
          Absolutely! Can’t wait to get started.
          <div class="time">10:17 AM</div>
        </div>
      </div>

      <div class="input-area">
        <textarea id="message-input" placeholder="Type your message..."></textarea>
        <button id="send-btn">Send</button>
      </div>
    </div>
  </main>

  <!-- Placeholder for footer -->
  <div id="footer-placeholder"></div>

  <script>
    // Load header and footer HTML dynamically
    fetch('header.html')
      .then(res => res.text())
      .then(html => document.getElementById('header-placeholder').innerHTML = html)
      .catch(err => console.error('Error loading header:', err));

    fetch('footer.html')
      .then(res => res.text())
      .then(html => document.getElementById('footer-placeholder').innerHTML = html)
      .catch(err => console.error('Error loading footer:', err));

    // Thread switching logic
    const threads = document.querySelectorAll('.thread');
    const messagesEl = document.getElementById('messages');
    threads.forEach(thread => {
      thread.addEventListener('click', () => {
        threads.forEach(t => t.classList.remove('active'));
        thread.classList.add('active');
        const threadId = thread.getAttribute('data-id');
        messagesEl.innerHTML = '';
        if(threadId === '1') {
          messagesEl.innerHTML = `
            <div class="message received">Hey Eric! Excited about ForgeTomorrow?<div class="time">10:15 AM</div></div>
            <div class="message sent">Absolutely! Can’t wait to get started.<div class="time">10:17 AM</div></div>
          `;
        } else if(threadId === '2') {
          messagesEl.innerHTML = `
            <div class="message received">Let's schedule a call.<div class="time">Yesterday 2:00 PM</div></div>
            <div class="message sent">Sure, how about tomorrow?<div class="time">Yesterday 2:05 PM</div></div>
          `;
        } else if(threadId === '3') {
          messagesEl.innerHTML = `
            <div class="message received">Thanks for the update.<div class="time">Monday 9:30 AM</div></div>
            <div class="message sent">You’re welcome!<div class="time">Monday 9:35 AM</div></div>
          `;
        }
      });
    });

    // Send new message logic
    const sendBtn = document.getElementById('send-btn');
    const messageInput = document.getElementById('message-input');

    sendBtn.addEventListener('click', () => {
      const text = messageInput.value.trim();
      if(text === '') return;
      const newMsg = document.createElement('div');
      newMsg.classList.add('message', 'sent');
      newMsg.innerHTML = `${text}<div class="time">Now</div>`;
      messagesEl.appendChild(newMsg);
      messageInput.value = '';
      messagesEl.scrollTop = messagesEl.scrollHeight;
    });
  </script>

</body>
</html>
