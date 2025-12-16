    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const selamiInfo = document.getElementById("selamiInfo");
    const customImage = document.getElementById("customImage");
    let messageCount = 0;

    // AI-generated Eid messages
    const messages = [
      "May this Eid bring you peace, prosperity, and endless joy! May Allah's blessings shine upon you. 🌙",
      "Eid Mubarak! May your faith be rewarded with happiness and success in this life and the hereafter. 🤲",
      "May Allah accept your prayers and fill your heart with contentment and gratitude. Eid Mubarak! 🕌",
      "Wishing you a joyous Eid filled with love, laughter, and cherished moments with loved ones. 🎉",
      "May the magic of Eid bring endless blessings and pure happiness to your doorstep. 🌟",
      "As we celebrate, may Allah's mercy and grace be with you always. Have a blessed Eid! ✨",
      "May your sacrifices and good deeds be accepted. Wishing you health, wealth, and wisdom. 💚",
      "Sending warm wishes on this special day. May Allah grant you success in all endeavors. 🎊"
    ];

    function generateMessage() {
      const msgElement = document.getElementById('aiMessage');
      const counterElement = document.getElementById('counter');
      
      msgElement.style.opacity = '0.4';
      msgElement.textContent = 'Generating...';
      
      setTimeout(() => {
        const randomMsg = messages[Math.floor(Math.random() * messages.length)];
        msgElement.textContent = randomMsg;
        msgElement.style.opacity = '1';
        messageCount++;
        counterElement.textContent = `Message #${messageCount}`;
      }, 800);
    }

    // Auto-generate first message
    window.addEventListener('load', () => {
      setTimeout(generateMessage, 500);
    });

    // Show info when "Yes" clicked
    yesBtn.addEventListener("click", function () {
      selamiInfo.classList.remove("hidden");
      customImage.classList.remove("hidden");
      yesBtn.disabled = true;
    });

    // Move "No" button on hover
    let yesBtnSize = 19;
    noBtn.addEventListener("mouseover", function () {
      const maxX = window.innerWidth - noBtn.offsetWidth - 50;
      const maxY = window.innerHeight - noBtn.offsetHeight - 50;
      noBtn.style.left = Math.max(0, Math.random() * maxX) + "px";
      noBtn.style.top = Math.max(0, Math.random() * maxY) + "px";
      noBtn.style.position = "fixed";

      // Enlarge Yes button
      if (yesBtnSize < 28) {
        yesBtnSize += 2;
        yesBtn.style.fontSize = yesBtnSize + "px";
      }
    });

    // Copy number
    function copyNumber() {
      navigator.clipboard.writeText("01790467463");
      const btn = event.target;
      btn.textContent = "Copied!";
      setTimeout(() => {
        btn.textContent = "Copy Number";
      }, 2000);
    }