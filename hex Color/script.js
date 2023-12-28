function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color = color + letters[Math.floor(Math.random() * 16)];
    }


    document.getElementById('colorDisplay').textContent = color;
    document.body.style.backgroundColor = color;
}
