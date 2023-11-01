/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function crea_options(selid, options, values) {
    //options must be a string array
    //selid is the id of the select element to fill
    
    var n = options.length;
    if(n != values.length) return "error: length of options and values don't match"
    elem = document.getElementById(selid);
    elem.innerHTML = "";
    for(var i=0; i<n; i++) {
         elem.innerHTML =  elem.innerHTML  + '<option value="' +values[i] + 
                 '">'+ options[i] + '</option>';
    }
    
}

