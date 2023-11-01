/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function find_property(key, array, sort_p) {
    //key iss "acronim" for instance, key is "maria89" an instance of property
    //array is an array of objects with at least, property "property".
    //sort_p is the sort property to match the knownkey, target_p is the target
    // proeprty to obtain that we now dont know
    keys = array.map(function(a) { return a[sort_p];});//makes array of the property
   
    var index = keys.indexOf(key)
    if(index == -1) return false
    return array[index]
    
}

function filter_arr(key, array, property) {

    result = [];
    for(var i=0; i<array.length; i++) {
        if(array[i][property] == key) result.push(array[i]) 
    }
    return result
}

function find_prop_arr(mat_prop, targ_prop, arra, dict) {
    //for each element in arra, get target_prop of mat_prop using dictionary dict
    result = [];
    for(var i=0; i < arra.length; i++) {
        target = find_property(arra[i][mat_prop], dict, mat_prop)
        result[i] = target[targ_prop];
        console.log(result[i])
    }
    return result;
}

