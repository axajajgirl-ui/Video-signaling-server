const startBtn = document.getElementById("startBtn");
const helpBtn = document.getElementById("helpBtn");
const chatMessages = document.getElementById("chatMessages");

startBtn.addEventListener("click", () => {
    chatMessages.innerHTML = `
        <div class="system-message">
            جاري البحث عن شخص للمطابقة...
        </div>
    `;
});

helpBtn.addEventListener("click", () => {
    window.open("https://t.me/O2AKM", "_blank");
});
