document.addEventListener("DOMContentLoaded", function () {
    // Get elements
    const counterElement = document.getElementById("counter");
    const incrementButton = document.getElementById("increment");
    const decrementButton = document.getElementById("decrement");

    // Initial counter value
    let counterValue = 0;

    // Update counter text
    function updateCounter() {
        counterElement.textContent = counterValue;
    }

    // Increment button click event
    incrementButton.addEventListener("click", function () {
        counterValue++;
        updateCounter();
    });

    // Decrement button click event
    decrementButton.addEventListener("click", function () {
        if (counterValue > 0) {
            counterValue--;
            updateCounter();
        }
    });
});
