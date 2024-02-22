"use strict";(self.webpackChunkmeal_app=self.webpackChunkmeal_app||[]).push([[486],{486:(Z,l,i)=>{i.r(l),i.d(l,{MealModule:()=>C});var s=i(814),c=i(743),t=i(946),m=i(619),d=i(398),u=i(862);let p=(()=>{class e{constructor(n){this.http=n,this.apiUrl="https://www.themealdb.com/api/json/v1/1/random.php",this.showMealButtonSource=new m.X(!1),this.showMealButton$=this.showMealButtonSource.asObservable()}getRandomMeals(){return this.http.get(this.apiUrl).pipe((0,d.U)(n=>n.meals))}showMealButton(){this.showMealButtonSource.next(!0)}static#t=this.\u0275fac=function(o){return new(o||e)(t.LFG(u.eN))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var g=i(593);function f(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"div")(1,"button",3),t.NdJ("click",function(){t.CHM(n);const a=t.oxw();return t.KtG(a.getRandomMeal())}),t._uU(2,"Get Random Meal"),t.qZA()()}}function h(e,r){if(1&e&&(t.TgZ(0,"div",6)(1,"h2"),t._uU(2),t.qZA(),t.TgZ(3,"div",7),t._UZ(4,"img",8)(5,"br")(6,"br"),t.TgZ(7,"h2"),t._uU(8,"Instructions"),t.qZA(),t.TgZ(9,"p"),t._uU(10),t.qZA(),t._UZ(11,"a",9),t.qZA(),t._UZ(12,"br")(13,"br"),t.TgZ(14,"h2"),t._uU(15,"YouTube"),t.qZA(),t.TgZ(16,"a",9),t._uU(17),t.qZA(),t.TgZ(18,"div",10),t._UZ(19,"iframe",11),t.qZA()()),2&e){const n=r.$implicit,o=t.oxw(2);t.xp6(2),t.Oqu(n.strMeal),t.xp6(2),t.Q6J("src",n.strMealThumb,t.LSH),t.xp6(6),t.Oqu(n.strInstructions),t.xp6(1),t.Q6J("href",n.strYoutube,t.LSH),t.xp6(5),t.Q6J("href",n.strYoutube,t.LSH),t.xp6(1),t.Oqu(n.strYoutube),t.xp6(2),t.Q6J("src",o.getSafeYoutubeUrl(n.strYoutube),t.uOi)}}function b(e,r){if(1&e&&(t.TgZ(0,"div",4),t.YNc(1,h,20,7,"div",5),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.meals)}}function M(e,r){1&e&&(t.TgZ(0,"div")(1,"p"),t._uU(2,"No meals available."),t.qZA()())}const x=[{path:"",component:(()=>{class e{constructor(n,o){this.mealService=n,this.sanitizer=o,this.meals=[],this.dataFetched=!1}getRandomMeal(){this.mealService.getRandomMeals().subscribe(n=>{this.meals=n,this.dataFetched=!0},n=>{console.error("Error fetching meals:",n)})}getSafeYoutubeUrl(n){let o=n.split("v=")[1];const a=o.indexOf("&");return-1!==a&&(o=o.substring(0,a)),this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${o}`)}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(p),t.Y36(g.H7))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-meal"]],decls:4,vars:3,consts:[[4,"ngIf"],[1,"effect"],["class","meals-container",4,"ngIf"],[1,"meal-button",3,"click"],[1,"meals-container"],["class","meal",4,"ngFor","ngForOf"],[1,"meal"],[1,"meal-details"],["alt","Meal Image",3,"src"],["target","_blank",3,"href"],[1,"youtube-frame"],["width","100%","height","315","frameborder","0","allowfullscreen","",3,"src"]],template:function(o,a){1&o&&(t.YNc(0,f,3,0,"div",0),t.TgZ(1,"div",1),t.YNc(2,b,2,1,"div",2),t.YNc(3,M,3,0,"div",0),t.qZA()),2&o&&(t.Q6J("ngIf",!a.dataFetched),t.xp6(2),t.Q6J("ngIf",a.dataFetched&&a.meals.length>0),t.xp6(1),t.Q6J("ngIf",a.dataFetched&&0===a.meals.length))},dependencies:[s.sg,s.O5],styles:[".meals-container[_ngcontent-%COMP%]{background:linear-gradient(to bottom,rgba(255,255,255,1) 0%,rgba(255,255,255,.8) 50%,rgba(255,255,255,0) 100%);border-radius:10px;padding:20px;margin-bottom:20px}.meal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:Arial,sans-serif;font-size:18px;color:#333;margin-bottom:10px}.meal[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:30%;height:auto;border-radius:5px;margin-bottom:10px;display:block;margin-left:auto;margin-right:auto}.meal-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:Arial,sans-serif;font-size:20px;color:#555;margin-bottom:5px}.meal-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Arial,sans-serif;font-size:16px;color:#777;margin-bottom:10px;display:flex;flex-direction:column;align-items:center;justify-content:center}.youtube-frame[_ngcontent-%COMP%]{position:relative;padding-bottom:28.125%;height:0;overflow:hidden;max-width:30%;margin-left:auto;margin-right:auto}.effect[_ngcontent-%COMP%]{border-radius:10px;padding:20px;margin:20px}.youtube-frame[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}.meal-button[_ngcontent-%COMP%]{background-color:#4c4eaf;border:none;color:#fff;padding:15px 32px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;margin:4px 2px;cursor:pointer;transition:background-color .3s}.meal-button[_ngcontent-%COMP%]:hover{background-color:#459da0}.mat-icon-button[_ngcontent-%COMP%]   .mat-button-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center}.mat-icon-button[_ngcontent-%COMP%]{line-height:unset}"]})}return e})()}];let v=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[c.Bz.forChild(x),c.Bz]})}return e})(),C=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[s.ez,v,u.JF]})}return e})()}}]);