const faq = document.querySelector(".accordion-homepage");
const sect = document.createElement("section");
sect.className = "parent";
const newhead = document.createElement("h3");
const mytext = document.createTextNode("My New FAQ");
newhead.appendChild(mytext);
// newhead.textContent = "My New FAQ";
faq.appendChild(sect);
sect.appendChild(newhead);
