function findname_arr(acronim, people) {//people is an array of objects with prop
    //perties .name and .acronim
    acronims = people.map(function(a) {return a.acronim});//makes array of the property
   
    var index = acronims.indexOf(acronim)
    if(index == -1) return false
    return people[index].nom
    
}

function findname(acronim, arr1, arr2) {//we assume we have the profes and 
    //alumnes arrays, of objects with properties .nom and .acronim
       
        var nom = findname_arr(acronim, arr1);
        if(nom != false) return nom;
        nom = findname_arr(acronim, arr2);
        if(nom != false) return nom;
        return false
    }
    
 