var x = 0;
var textEffect = "Welcome to my first and maybe last website";
var container = document.getElementById('effect');

function animate() {
    if (x < textEffect.length) {
        container.innerHTML += textEffect.charAt(x);
        x++;
        setTimeout(animate, 80)
    }
}
animate();