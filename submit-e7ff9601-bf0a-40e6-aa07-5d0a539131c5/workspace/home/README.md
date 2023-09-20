# Project Title
This project is aimed at implementing a dynamic navigation bar that populates navigation links based on sections present in a webpage. It adds an active class to a section if it is in view.
## Steps to run the project
1. Clone or download this repository.
2. Open index.html in your browser.
## How It Works
JavaScript is used to dynamically populate the navigation menu based on the sections present in the HTML document. Once the sections are fetched using `document.querySelectorAll('section')`, they are looped over and a corresponding navigation link is created for each section.
The application also listens for window scroll events to add the active class to a section if it's within the viewport. We use the `getBoundingClientRect()` method to get the section's position and check to see if it's in view.
If you scroll through the page, you'll notice the section currently in view will have an active class added to it.
## Dependencies
This project uses vanilla JavaScript and CSS for styling. It does not rely on any third-party dependencies.
## Contributing
Pull requests and suggestions are welcome. Please open an issue first to discuss any changes you would like to make. 
