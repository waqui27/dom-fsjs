# Dom Manipulation Assignment

1. Webiste Name: [Dev To](https://dev.to/)

### Topics

    - Query Selctory, Inner HTML

### Sample Image

![Sample One](./Pic1.png)

### Tasks

        Target the Top description div and change the DEV Community to <Your_Name> and description to your passion

### Output

![Output](./Pic2.png)

### Answer

```javascript
document.querySelector(".side-bar .crayons-card .crayons-subtitle-2").innerHTML = "Waqui"
document.querySelector(".side-bar .crayons-card .color-base-70").innerHTML = "My passion is spending time on the Internet"
```

2. Website Name: [Apple](https://support.apple.com/en-in)

### Task

![Store](./Picture_3.png)

### Fetch all the product name and store in an array

### Output

['iPhone', 'Mac', 'iPad', 'Watch', 'AirPods', 'Music', 'TV']

### Answer

```javascript
let lists = document.querySelectorAll(".as-imagegrid-item");
function reducers(...arg) {
    let mylist =[];
    for(a of arg) {
        let replace_items = a.innerText.replace("\nSupport", "");
        mylist.push(replace_items);
    };
    console.log(mylist);
};
reducers(...lists);
```

3. Webiste Name: [Youtube Support](https://support.google.com/youtube/)

### Topics

    - Get Element By Id, Create Element, Create Text Node, Append Child

### Sample Image

![Sample One](./Pic4.png)

### Tasks

     Add another FAQ 'My New FAQ' to the list

### Output

![Output](./Pic5.png)

### Answer

```javascript
const faq = document.querySelector(".accordion-homepage");
const sect = document.createElement("section");
sect.className = "parent";
const newhead = document.createElement("h3");
const mytext = document.createTextNode("My New FAQ");
newhead.appendChild(mytext);
// newhead.textContent = "My New FAQ";
faq.appendChild(sect);
sect.appendChild(newhead);
```

4. Webiste Name: [OnePlus](https://www.oneplus.in/support)

### Topics

     Query Selector, InnerText

### Sample Image

![Sample One](./Pic6.png)

### Tasks

      Change the contact number

### Output

![Output](./Pic7.png)

### Answer

```javascript
document.querySelector(".customer-support .one-tel-number").innerText = "+916366256689";
```

5. Webiste Name: [Samsung](https://www.samsung.com/in/offer/online/samsung-fest/)

### Topics

       getElementById, createElement, InnerText, append, setAttribute

### Sample Image

![Sample One](./Pic8.png)

### Tasks

     Target the main div of card and change the Button text to Check out

### Output

![Output](./Pic9.png)

### Answer

```javascript
let lists = document.querySelectorAll(".mytabs .diwali-deals-product-sale-pro .diwali-deals-product-sale-btn");
    for(a of lists) {
    a.innerText = "Checkout"
    };
```

6. Webiste Name: [Adidas](https://www.adidas.co.in/)

### Topics

    -   Query Selector, Event listeners, Changing Styles

### Sample Image

![Sample One](./Pic10.png)

### Tasks

     Target the search box and on hover change thebackground color to red.

### Output

![Output](./Pic11.png)

### Answer

```javascript
function colorChange() {
    document.querySelector(".searchinput___19uW0").style.backgroundColor = "red";
}

document.addEventListener("mouseover", colorChange);
```

7. Webiste Name: [MDN Web Docs](https://developer.mozilla.org/en-US/)

### Topics

       Form, Value, Submit

### Sample Image

![Sample One](./Pic12.png)

### Tasks

     To Search a topic in the MDN Search bar.
     First add a text to search in the search bar and then hit the submit search button to search the docs using DOM

### Output

![Output](./Pic13.png)

### Answer

```javascript
document.querySelector("#hp-search-input").value = "CSS selectors";
document.querySelector(".search-form .search-button").onclick();
```

8. Webiste Name: [Google](https://www.google.com/)

### Topics

       Remove Elements

### Sample Image

![Sample One](./Pic14.png)

### Tasks

     Remove alternate languages from the home page languages listed

### Output

![Output](./Pic15.png)

### Answer

```javascript
let myarray = document.querySelectorAll("#SIvCob a");
for(let i=0; i<myarray.length; i++) {
       myarray[2*i].remove();
    }
```

9. Webiste Name: [Code Wars](https://www.codewars.com/)

### Topics

       Change Font Family, Color of Text.

### Sample Image

![Sample One](./Pic16.png)

### Tasks

    Change the font family of the text to monospace and text color to the logo’s background color.

### Output

![Output](./Pic17.png)

### Answer

```javascript
document.querySelector(".content-width-extra-large .display-heading-1").style.fontFamily = "monospace";
document.querySelector(".content-width-extra-large .display-heading-1").style.color = "#b1361e"
```

10. Webiste Name: [Freecodecamp](https://www.freecodecamp.org/)

### Topics

       querySelector, mouseover, click eventListener,  callback function, style,

### Sample Image

![Sample One](./Pic18.png)

### Tasks

    Target the button and change background colour on mouseover

### Output

![Output](./Pic19.png)

### Answer

```javascript
function colorChange() {
    document.querySelector(".btn-cta-big .login-btn-text").style.backgroundColor = "red";
}

document.addEventListener("mouseover", colorChange);
```

11. Webiste Name: [realme](https://www.realme.com/in/)

### Topics

       querySelector,style,background-image

### Sample Image

![Sample One](./Pic20.png)

### Tasks

    change the realme logo to ineuron logo

### Output

![Output](./Pic21.png)

### Answer

```javascript
document.querySelector(".logo .icon").style.backgroundImage = "url('https://ineuron.ai/images/ineuron-logo.png')";
```

12. Webiste Name: [Github](https://github.com/)

### Topics

       querySelector,style,background-Color

### Sample Image

![Sample One](./Pic22.png)

### Tasks

     change the background colour of the button to blue.

### Output

![Output](./Pic23.png)

### Answer

```javascript
document.querySelector(".my-3 .btn").style.backgroundColor = "blue";
```

13. Webiste Name: [Hackerrank](https://www.hackerrank.com/)

### Topics

       querySelector,innerHtml

### Sample Image

![Sample One](./Pic24.png)

### Tasks

Target the top description and change “Matching developers with great companies” to ‘JSBOOTCAMP“.

### Output

![Output](./Pic25.png)

### Answer

```javascript
document.querySelector(".fl-heading .fl-heading-text").innerHTML = "JSBOOTCAMP";
```

14. Webiste Name: [Asus](https://www.asus.com/in/)

### Topics

      querySelector,style,font-size

### Sample Image

![Sample One](./Pic26.png)

### Tasks

       change the fontsize of “Hot Deals” to 80px

### Output

![Output](./Pic27.png)

### Answer

```javascript
document.querySelector(".HotDealsAll__Heading__2fIbe").style.fontSize = "80px";
```

15. Webiste Name: [Dell](https://www.dell.com/en-in/shop/deals/laptop-deals?gacd=10415953-9016-5761040-285981356-0&dgc=ST&gclid=Cj0KCQjwguGYBhDRARIsAHgRm4-XUDMhhVNyHXb3s1gY4ZBzORr_d9Se-buhJwy7asyUe7YdqEA11eEaAt6UEALw_wcB&gclsrc=aw.ds&nclid=BxjBlpBQsX6pjSHh-L8YYSU77EpfXRkG1AGMB5Wbeu386ykspfrPDnfx_DdFau20)

### Topics

      querySelector,style.textAlign

### Sample Image

![Sample One](./Pic28.png)

### Tasks

       Convert the text “G15 Gaming Laptop” from left to right

### Output

![Output](./Pic29.png)

### Answer

```javascript
document.querySelector("#d560822win9b .ps-top .ps-title").style.textAlign = "right";
```

16. Webiste Name: [Vercel](https://vercel.com/)

### Topics

     querySelector,innerHTMl

### Sample Image

![Sample One](./Pic30.png)

### Tasks

      change the heading “Start with the developer” to “Start with Scratch”

### Output

![Output](./Pic31.png)

### Answer

```javascript
document.querySelector(".jsx-499702677 .section-title_title__VEDfK").innerHTML = "Start with scratch";
```

17. Webiste Name: [Sony](https://www.sony.co.in/electronics/televisions/a80k-a83k-a84k-series?cpint=bravia_golden_area-GoldenArea-en_GL-goldenarea_productsdetails_1)

### Topics

    querySelector,innerHTMl

### Sample Image

![Sample One](./Pic33.png)

### Tasks

     change the button text To current Date.

### Output

![Output](./Pic32.png)

### Answer

```javascript
let now = new Date();
let time = now.toString();
document.querySelector(".mlp-collapse-content .btn-container a").innerHTML = time;
```

18. Webiste Name: [Philips](https://www.philips.co.in/)

### Topics

     querySelector,style,backgroundcolor

### Sample Image

![Sample One](./Pic34.png)

### Tasks

    change the background colour blue to orange

### Output

![Output](./Pic35.png)

### Answer

```javascript
document.querySelector(".p-f03-footer-container .p-footer").style.backgroundColor = "orange";
```

19. Webiste Name: [Canon](https://in.canon/)

### Topics

          querySelector,src

### Sample Image

![Sample One](./Pic36.png)

### Tasks

    extract the canon logo

### Output

![Output](./Pic37.png)

### Answer

```javascript
document.querySelector(".navbar-brand .logo").src
```

20. Webiste Name: [Oppo](https://www.oppo.com/in/)

### Topics

          querySelector,style,color

### Sample Image

![Sample One](./Pic38.png)

### Tasks

      Change the description colour black to orange

### Output

![Output](./Pic39.png)

### Answer

```javascript
document.querySelector(".wide .desc").style.color = "orange";
```
