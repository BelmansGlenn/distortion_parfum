const text = document.querySelector('.turnText');

text.innerHTML = text.innerHTML.split("").map(
    (char,i) => 
    `<span style="transform:rotate(${i * 11}deg)">${char}</span>`).join('');