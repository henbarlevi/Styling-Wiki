import * as express from 'express';
import * as fs from 'fs';
import * as Rx from 'rxjs';
const router :express.Router = express.Router();




router.get('/',(req: express.Request, res: express.Response) => {
    res.send('welcome to server api');
})




export default router  ;


//-------------------------------------SNIPPETS-------------------------

//CONVERTING NODE FS callback to REACTIVE
// fs.readdir('./dist/routes',(err,items)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(items);
//     }
// })
// //converting node callback function to reactive version:
// const readdir$ = Rx.Observable.bindNodeCallback(fs.readdir); //save it as a function
// readdir$('./dist/routes').subscribe(items=>{console.log(items)}); 
