/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function todayte() {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1).toString().
            padStart(2, "0")+'-'+today.getDate().toString().padStart(2, "0");
    return date;
}

