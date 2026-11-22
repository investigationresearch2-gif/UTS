
function revealMore() {
    const description = document.querySelector(".description");
    const startButton = document.querySelector(".start");

    // Hide the START button
    startButton.style.display = "none";

    // Display documentation
    description.innerHTML = `

        <h3>TECHNOLOGIES USED</h3>
        <ul>
            <li>HTML - Structure of the website</li>
            <li>CSS - Design and layout</li>
            <li>JavaScript - Website functionality</li>
        </ul>

        <h3>PROJECT FEATURES</h3>
        <p>
            This project demonstrates the use of HTML, CSS,
            and JavaScript to create an interactive website.
        </p>

        <h3>WEBSITES USED</h3>
        <ul>
            <li><a href="https://uiverse.io/" target="_blank">Uiverse</a> - For choosing designs like buttons</li>
            <li><a href="https://chatgpt.com/" target="_blank">ChatGPT</a> - For guidance and assistance</li>
            <li><a href="https://colorhunt.co/" target="_blank">Color Hunt</a> - For choosing colors</li>
            <li><a href="https://github.com/" target="_blank">GitHub</a> - For uploading this website</li>
        </ul>

        <h3>APPS USED</h3>
        <ul>
            <li><strong>Visual Studio Code</strong> - For writing and editing code</li>
            <li><strong>Edge</strong> - For testing and debugging the website</li>
            <li><strong>Canva</strong> - For creating images and graphics</li>
            <li><strong>ChatGPT</strong> - For assistance in grammar</li>
            <li><strong>Pinterest</strong> - For inspiration and ideas</li>
        </ul>

        <button onclick="goNext()">NEXT</button>
    `;
}

function goNext() {
    window.location.href = "pic.html";
}