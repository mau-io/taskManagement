const rangeSliderValue = function (range) {
    const displayRange = document.getElementById('priority');
    const displayPriority = document.getElementById('priority-label');

    displayRange.innerHTML = range;
    if (range == 1) {
        //do stuff
        displayRange.style.color = "blue";
        displayPriority.style.color = "blue";
        displayPriority.innerHTML = "Very Low";
    } else if (range == 2) {
        displayRange.style.color = "purple";
        displayPriority.style.color = "purple";
        displayPriority.innerHTML = "Low";
    } else if (range == 3) {
        displayRange.style.color = "yellow";
        displayPriority.style.color = "yellow";
        displayPriority.innerHTML = "Medium";

    } else if (range == 4) {
        displayRange.style.color = "orange";
        displayPriority.style.color = "orange";
        displayPriority.innerHTML = "High";
    } else if (range == 5) {
        displayRange.style.color = "red";
        displayPriority.style.color = "red";
        displayPriority.innerHTML = "Very High";
    } else {
        displayRange.style.color = "blue";
        displayPriority.style.color = "blue";
        displayPriority.innerHTML = "None";
    }
};

const start = () => {
    // get "input[name=project]" element
    let project = document.getElementsByName('project')[0]?.value;
    // get "input[name=details]" element
    let details = document.getElementsByName('details')[0]?.value;

    //if has title
    if (project.length > 0) {
        project = project
    }
    // doesnt have title    
    else {
        project = "N/A"
    }

    if (details.length > 0) {
        details = details
    } else {
        details = "N/A"
    }

    const app = document.getElementsByClassName('projects')[0];
    const card = document.createElement('div');

    card.innerHTML = `
        <div class="project">
            <h2> ${project} </h2>
            <span class="close">X</span> 
            <p> ${details} </p> 
            <h3>Priority</h3>
            <div id="priority-wrap">
                <span id="priority" class="priority">1</span> - <span class="priority-label" id="priority-label"> Very Low </span> 
            </div>
            <input class="priority-slider" type="range" value="1" min="1" max="5" step="1" onChange="rangeSliderValue(this.value)">
        </div>
    `;
    // add event listener to the close button
    card.getElementsByClassName('close')[0].addEventListener('click', function () {
        card.remove();
    });
    app.appendChild(card);
}

const button = document.getElementsByClassName('submit')[0];
button.addEventListener('click', (e) => {
    e.preventDefault();
    start();
})