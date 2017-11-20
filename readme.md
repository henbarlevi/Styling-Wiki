
* How to run multi commands in npm "start" /"dev" : 
https://stackoverflow.com/questions/30950032/how-can-i-run-multiple-npm-scripts-in-parallel

* inspired by :
http://mherman.org/blog/2016/11/05/developing-a-restful-api-with-node-and-typescript/#.WU9MyWiGNhE


## run project with **npm run dev**

* #### this is the old script of npm run dev (using npm-run-all library)[run 'compile' and 'start' in the same window]
   ```json
        "dev": "npm-run-all --parallel compile start",

   ```
* #### this is the new script of npm run dev (using npm-run-all library)[run compile and app in 2 different windows]
  
   ```json
   
        "dev": "start cmd /k npm run compile && start cmd /k npm start"
   ```
*
   ```ts
   "start cmd" //open new command prompt
   "/k"//execute command inside that new cmd
   ```
   