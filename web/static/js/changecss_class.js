/** 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 **/


 const classe = document.getElementsByClassName("palid-fins-toc");

for(i=0; i< classe.length; ++i){
    elem = classe[i];
  elem.style.opacity = 0.3;
  console.log("hoola");
  elem.addEventListener('click', function fullopacity(event) {
    elem.style.opacity =1;
  });
  
};