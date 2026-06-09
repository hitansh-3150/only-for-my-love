const texts = [
    "NO 😅",
    "Pakka? 🥺",
    "Soch Lo ❤️",
    "Ek Baar Aur 😘",
    "Please 💕",
    "Arey Yaar 😭"
];

let i = 0;

noBtn.addEventListener("mouseover", () => {

    i = (i + 1) % texts.length;
    noBtn.innerHTML = texts[i];

    const containerRect = container.getBoundingClientRect();

    const maxX = containerRect.width - noBtn.offsetWidth - 20;
    const maxY = containerRect.height - noBtn.offsetHeight - 20;

    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * maxX + "px";
    noBtn.style.top = Math.random() * maxY + "px";
});
