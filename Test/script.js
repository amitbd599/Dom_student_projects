// Array containing five lines of text
const lines = [
  'This is the first line.',
  'This is the second line.',
  'This is the third line.',
  'This is the fourth line.',
  'This is the fifth line.',
];

// Get the placeholder element
const textContainer = document.getElementById('text-container');

// Use a for loop to iterate through the array and add each line to the container
for (let i = 0; i < lines.length; i++) {
  // Create a new paragraph element for each line
  const p = document.createElement('p');
  p.textContent = lines[i];

  // Append the paragraph to the text container
  textContainer.appendChild(p);
}
