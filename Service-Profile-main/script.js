const text = document.querySelector(".text");
const chars = text.textContent.split("");
text.textContent = "";
for (let i = 0; i < chars.length; i++) {
  const span = document.createElement("span");
  span.textContent = chars[i];
  span.style.animationDelay = `${i * 0.1}s`;
  text.appendChild(span);
}
