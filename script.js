// script.js
let yesButton = document.getElementById("yesButton");
let noButton = document.getElementById("noButton");
let video = document.getElementById("video");
let heading = document.getElementById('heading');
let counter = 0;

var excuses = ["", "Are you sure ?", "Really sure?", "Think again", "Last chance!"
    ,"Surely not?", "You might regret this!", "Give it another thought!"
    ,"Are you absolutely certain ?", "This could be a mistake!", "Have a heart!", "Don't be so cold",
    "Change of heart", "Wouldn't you reconsider?", "Is that your final answer?", 
    "You are breaking my heart ;(" 
]

noButton.addEventListener("click", () => {
    counter++;

    // Increase size of 'Yes' button dynamically as per the counter
    yesButton.style.transform = `scale(${1 + counter * 0.1})`;

    var excuseIndx = counter
    if (counter >= excuses.length) {
        excuseIndx = excuses.length - 1
    }

    // Change the text of 'No' button
    noButton.textContent = `${excuses[excuseIndx]}`;

    // Adjust the position of the "No" button to prevent overlap
    if (counter > 0) {
        // Move the "No" button further to the right if the "Yes" button scales
        noButton.style.marginLeft = `${20 + counter * 10}px`;
    }
});

yesButton.addEventListener("click", () => {
    // Hide both buttons when "Yes" is clicked
    yesButton.style.display = "none";
    noButton.style.display = "none";

    // Change the video (you can update this with another video URL)
    video.src = "img2.mp4";  // Update to the new video URL
    video.load(); // Reload the video source to ensure it starts playing immediately

    heading.innerText = 'Yeah Yayay!!';
});
