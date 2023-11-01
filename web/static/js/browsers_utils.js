/**
 * @file Provides the functions for making the web app able to run in different 
 * browsers such as Safari
 * @author Romà Masana
 */


/**
 * Checks whether the running browser is safari or not
 * @returns {Boolean} - True if Safari, No otherwise
 */
function isafari() {
    return navigator.userAgent.toLowerCase().indexOf('safari/') > -1;
}

/**
 * Goes back in browsing history. It is different per browser
 * 
 */
function history_back() {
    if(isafari()){
        event.preventDefault();
        history.go(-1);
    } 
    else history.back()
}

/**
 * the "mac" functions are functions that dont work in safari 5.1.7
 * repeat and concatenate the character "this", "n" times
 * @returns {string} - The repeated character
 */
String.prototype.macRepeat = function (n) {
    res = "";
    for(var i=0;i <n; i++) {
        res = res + this;
    }
    return res;
}

/**
 * I don't remember what this does
 */
String.prototype.macPadStart = function (tarlgth, addstr) {
    if(typeof(tarlgth) != "number" || tarlgth < 0) tarlgth = 0;
    
    if(this.length >= tarlgth) return String(this)
    
    var k = tarlgth - this.length;
    adlght = addstr.length;
    var add = String(addstr);
    if (k > adlght) {
       repeats =  Math.ceil(k/adlght) //number of times we need the addstr
       add = addstr.macrepeat(repeats);       
    }
    add = add.slice(0,k);
    
    return (add+this)
}
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Array.prototype.macFindIndex = function (f) {
    n = this.length;
    for(var i=0; i<n; i++) {
        if(f(this[i])) return i;
    }
    return -1;
}
