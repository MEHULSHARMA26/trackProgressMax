/* Create a business name generator by combining list of adjectives,shop name and another word

// adjectives:
Crazy
Amazing
Fire

shop name:
engine
foods
Garments

another word:
bros
limited 
hub

*/

let num = Math.random();
num =num * 10;
console.log(num);

let shopName = "";
if(num >=0 && num<3){
 shopName = shopName + "Crazy ";
}
else if(num>=3 && num<6){
    shopName = shopName + "Amazing ";
    
}
else{
    shopName = shopName + "Fire ";

}
num = Math.random();
num = num*10;
if(num >=0 && num<3){
    shopName = shopName + "engine ";
   }
   else if(num>=3 && num<6){
       shopName = shopName + "foods ";
       
   }
   else{
       shopName = shopName + "Garments ";
   
   }

   num = Math.random();
   num = num *10;
   if(num >=0 && num<3){
    shopName = shopName + "bros ";
   }
   else if(num>=3 && num<6){
       shopName = shopName + "limited ";
       
   }
   else{
       shopName = shopName + "hub ";
   
   }
console.log(shopName);