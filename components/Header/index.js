// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

headerContainer = document.querySelector('div.header-container');


function header() {


    headerMaker = document.createElement('div');
    headerMaker.classList.add('header');
    

        headerSpan1 = document.createElement('span');
        headerSpan1.textContent = "SMARCH, 28, 2019";

        headerH1 = document.createElement('h1');
        headerH1.textContent = "Lambda Time";

        headerSpan2 = document.createElement('span');
        headerSpan2.textContent = "98°";

        headerContainer.appendChild(headerMaker);

        headerMaker.appendChild(headerSpan1);
        headerMaker.appendChild(headerH1);
        headerMaker.appendChild(headerSpan2);


}

header();