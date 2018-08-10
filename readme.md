> # Css
## 1. [Basics ☘️](#cssbasics)
## 2. [Advanced ☘️](#cssadvanced)
## 3. [Expert☘️](#cssexpert☘️)
> ### Sass/Scss
> ### Client
### 4. [Jquery☘️](#Jquery)
### 5. [Angular☘️](https://github.com/henbarlevi/ang2-sbs)
> ### DB
### 6. [Neo4j (Cypher)☘️](#Cypher)

# Css Basics  <a name="cssbasics"></a>☘️ 
> - [selectors](#css.a.a)
> - [Inheritance](#css.a.b)
> - [Combinators](#css.a.c)
> - [Box Model](#css.a.d)
> - [Display](#css.a.e)
> - [Builtin Operators Part 2](#Rxjs.e)
> - [Subjects](#Rxjs.f)
> - [Hot Vs Cold](#Rxjs.g)
> - [Combine Observables](#Rxjs.h)
> - [Error Handling](#Rxjs.i)
> - [Migrate to V6.0+](#Rxjs.V6.0)
# ===============================



## Selectors  <a name="css.a.a"></a>:
#### <b>Universal Selector</b>
style on all the elements
```css
*{
    color:red;
}
```
#### <b>Element Selector</b>
equal style for chosen elements
```html
<h1>we are red</h1>
<h1>we are red</h1>
<h1>we are red</h1>
```
```css
h1{
    color:red;
}
```
#### <b>Class Selector</b>
equal style for chosen elements with the same class
```html
<h1 class="myclass">we are red</h1>
<p  class="myclass">we are red</p>
<b  class="myclass">we are red</b>
```
```css
.myclass{
    color:red;
}
```
#### <b>Id Selector</b>
style for element with the specific Id
#### <b>Attribute Selector</b>
equal style for chosen elements with the same Attribute
```html
<button disabled></button>
<p disabled></p>
```
```cs
[disabled]{
    color:red
}
```
when using selectors:
* use the dash convention (for x: 👍 "my-class" 👎  insteadofss")
### selectors Priority from low to high:
1. universial (*)
2. tag /pseudo-elements (`<h1>`)
3. class/[pseudo-class](#css.pseudpclasses)/attribute 
4. id
5. inline styles (`<h1 style="color:red">`)
- otherwise if no selector specified the are lowerest priority rules which are (low to high):

* **-1. inhertitance**
* **0. browser default style**
## Inheritance <a name="css.a.b"></a>:
* elements inherite css rules from their parents (there are exceptions though), for exmaple
* **BUT inheritance is has below priority than the browser default style**
```html
<body>
<main>
<p>some text <p>
</main>
</body>
```
```css
main{
color:green;
}
body{
font-size:30px;
color:red;
}


```
#### in the example above the `<p>` will be with **30px ** because it inherit it from the **body** tag
#### but it will be with **green ** color because the `<main>` tag is closer to the `<p>` in the hierarchy 

## Combinators <a name="css.a.c"></a>:
#### NOTE - combinators may cause a little lower performance - use them wisely 
```css
/* Adjacent Sibling */
/*apply to p tags that come after h2 and share the same parent*/
h2 + p{
    color:green;
}
/*apply to p tags that come after h3 that comes after h2 and share the same parent*/
h2 + h3 + p{
    color:red;
}

/* <!--General Sibling--> */
/*apply to all p that has h2 before them event if not directly and share the same parent*/

h2 ~ p {
    color :green;
}

/* CHILD */
/* apply to all p tags that are direct child of div */
div > p{
    color:green;
}

/* Descendant */
/* apply to all p tags that are child of a div (event if not direct child)*/

div p {
    color: green;
}
```
## Box Model <a name="css.a.d"></a>:
simply means that All HTML elements can be considered as boxes (with margin padding border in content)
full description here : [Box Model](https://www.w3schools.com/css/css_boxmodel.asp)
#### collapsing Margin
- when there are 2 elements next to each other and each one of them has margin - they will share only the margin of the biggest between them (element 1 has margin of 20px , element 2 has margin 30px , the margin that is shared between them will be 30px) 
#### default styling
each browser has has its own default styling to certain elements - for exmaple - by default the ```<body>``` tag has a default **margin** 
#### shorthand properties
```css
//the folowing shorthand
border-width:2px;
border-style : dashed
boarder-color :orange
//is equivalent to this:
border : 2px dashed orange;
```
#### Height&Width
* Width -block level elements are set to 100% Width by Default
* height - when setting 100% - it will be 100% available height given by the parent (not necessarily 100% of the page)
#### box-sizing
* box-sizing - by default all element's width and height calculated by "box-sizing : content-box"
            which means width&height value do not include the **border+padding+margin**.
            we can set the following:
            ```css
            *{
                box-sizing : border box
            }
            ```
            in order to include also the padding&border  (but not the margin) into the calculation
            (using [*] and not [body] becuase body reset that behaviour becuase of the browser default styling behavior)
#### [Display](https://www.w3schools.com/cssref/pr_class_display.asp) <a name="css.a.e"></a>:
in html we have inline and block elements (for ex by default div =Block  , <a> =inline)
Display Values:
- Block  - take the full available width
- Inline - take only the width the content needs
- [Inline elements cannot get margin-top and margin-bottom, also padding-top/bottom has different effect etc.](https://www.udemy.com/css-the-complete-guide-incl-flexbox-grid-sass/learn/v4/t/lecture/9464830?start=0)
- None - removed from the document flow (but still exist in the DOM)
- inline-block - mix the behaviour , take only the needed width but still can get padding and margin etc.
###### Visibility : hidden
* NOTE - **If you only want to hide an element but you want to keep its place (i.e. other elements don't fill the empty spot), you can use** 

```css
visibility: hidden; 
```
#### NOTE! - be aware that there is extra empty character width effect that when there are spaces between elements which can cause sometimes unexpected behavior (please see video 38 in the complete css guid course / or the exmaple 9.diplay.html in this repo)

#### pseudo classes and elements <a name="css.pseudpclasses"></a>
- pseudo class (:) - let us define the style of special state of an element
- **:hover** - pseudo class
``` .a:hover { color:red } // anchor tag will be red when hovering with mouse```
- **:active** 
- pseudo element (::)- let us define the style of a specific part of an element
- **::first-letter -pseudo element
- **::first-line -pseudo element
``` p::first-letter { color:red }```
###### [::before and ::after](https://www.w3schools.com/cssref/sel_before.asp) - allows you to insert content onto a page from CSS (without it needing to be in the HTML). While the end result is not actually in the DOM, it appears on the page as if it is, and would essentially be like this:
```html
<body>
<p> paragraph text </p>
</body>
```
```css
p::after {
  content: "before paragraph text ";
  background-color: yellow;
  color: red;
  font-weight: bold;
}
p::after {
  content: "after paragraph text";
  background-color: yellow;
  color: red;
  font-weight: bold;
}
```