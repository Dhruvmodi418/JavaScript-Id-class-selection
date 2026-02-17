# JavaScript-Id-class-selection
JavaScript Id class selection


🎯 DOM Element Selection & Manipulation
This section of the project demonstrates the various ways to target elements in the DOM using IDs, Classes, and CSS Selectors. It specifically highlights the difference between selecting a single element versus a collection of elements.

📂 Files Included
idelementselect.html: A layout featuring a flexbox container with multiple box elements, including one specifically identified by an ID.
idelementselect.js: The logic used to experiment with different selection methods and style applications.

🧠 Core Concepts Covered
Selection Methods:
getElementsByClassName("box"): Returns an HTML Collection of all elements with that class.
getElementById("redbox"): Directly targets a unique element for specific styling (e.g., changing background to red).
querySelector(".box"): Grabs only the first element that matches the CSS selector.
The "Collection" Trap:
The project notes that querySelectorAll returns a NodeList (collection), meaning you cannot apply styles to the list itself directly (e.g., list.style.color fails).
Bulk Manipulation (The Loop):
Demonstrates using the .forEach() method with an arrow function to iterate through a NodeList and apply styles to every matching element simultaneously.
