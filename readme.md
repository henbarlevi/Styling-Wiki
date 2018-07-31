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


# ===============================
# Css Basics  <a name="cssbasics"></a>☘️ 
> - [selectors](#css.a.a)
> - [Interval Observable](#css.a.b)
> - [Your Own Operator](#Rxjs.c)
> - [Builtin Operators](#Rxjs.d)
> - [Builtin Operators Part 2](#Rxjs.e)
> - [Subjects](#Rxjs.f)
> - [Hot Vs Cold](#Rxjs.g)
> - [Combine Observables](#Rxjs.h)
> - [Error Handling](#Rxjs.i)
> - [Migrate to V6.0+](#Rxjs.V6.0)
# ===============================

## Selectors  <a name="Rxjs.a"></a>:
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

* How to run multi commands in npm "start" /"dev" : 
https://stackoverflow.com/questions/30950032/how-can-i-run-multiple-npm-scripts-in-parallel

* inspired by :
http://mherman.org/blog/2016/11/05/developing-a-restful-api-with-node-and-typescript/#.WU9MyWiGNhE


## run project with **npm run dev**

* #### this is the new script of npm run dev (using npm-run-all library)[run 'compile' and 'start' in the same window]
  
   ```json
        "dev": "npm-run-all --parallel compile start-dev",
   
   ```
* #### this is the old script of npm run dev [run compile and app in 2 different windows]
   ```json
        "dev": "start cmd /k npm run compile && start cmd /k npm start-dev"

   ```
*
   ```ts
   "start cmd" //open new command prompt
   "/k"//execute command inside that new cmd
   ```
   