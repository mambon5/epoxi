/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function transl_bunch (mat1, cols, dic, dicword, descr) {
    //translate all columns in "cols" in matrix "mat1" to its right values/"descr"
    // using dictionary "dic". Where dictionary dic contains the entries to match 
    // at "dicword" and the description to translate to is "descr".
    word_len = 1;
    if(typeof(cols) != "string") word_len = cols.length;
    else cols = [cols]; // make it into an array
    
    res = JSON.parse(JSON.stringify(mat1));
    for(var i=0;i<word_len; i++) {
        dic2 = chg_col_name(dic, dicword, cols[i]);
        res = transl_column(res, dic2, cols[i], descr)
    }
    return res;
}

function chg_col_name(mat1, prevname, newname)
{
    if(typeof(prevname) != "string" || typeof(newname) != "string" ) {
        console.log("error, both prev and new names must be strings");
        return;
    }
    var res = JSON.parse(JSON.stringify(mat1));// avoid copy by reference
    for(var i=0;i<mat1.length; i++) {
        res[i][newname] = mat1[i][prevname]
        delete  res[i][prevname];        
    }
    return res;
}

function chg_arr_values(array, dict) {
    //dictionary contains "word" and "description".
    if(array.length==undefined) {
        console.log("error: 'array' is not an array.");
        return;
    }
    var res = JSON.parse(JSON.stringify(array));// avoid copy by reference
    for(var i=0;i<res.length; i++) {
        if(dict[array[i]] != undefined) { //this means word exists in dictionary
            res[i] = dict[array[i]];
        }       
    }
    return res;
}

function del_col(mat, cols) {
    coleng = 1;
    if(typeof(cols) != "string") coleng = cols.length;
    if(coleng == 1) cols = [cols]; // make it into an array
    
    var res = mat;
    for(var i=0;i<mat.length; i++) {
        for(var j=0;j<coleng; j++) {
            delete  res[i][cols[j]];        
        }   
    }
    return res;
}

function transl_column(mat1, dic, word, descr) {
    // using dictionary translate column "word" from "mat1" to "description"
    // dictionary should also have this "word" inside. It updates the column called 
    // "word" by "description" 
    
    
    var res = add_to_mat(mat1, dic, word, descr)
    res = del_col(res, word);
    res = chg_col_name(res, descr, word);
    
    return res;
    
}

function add_to_mat(mat1, mat2, comcol, addcols) {
    //add to matrix 1, by the common column and add columns "addcols"
    // from mat 2 to mat 1.
    comcoleng = 1;
    if(typeof(comcol) != "string") comcoleng = comcol.length;
    if(comcoleng>1) {
        console.log("error, common column in merge matrix can only be 1 element");
        return;
    }
    
    
    addcoleng = 1;
    if(typeof(addcols) != "string") addcoleng = addcols.length;
    if(addcoleng<1) {
        console.log("error, there must be at least 1 column to add in join matrix")
        return;
    }
    if(addcoleng == 1) addcols = [addcols]; // make it into an array
    
    var res =res = JSON.parse(JSON.stringify(mat1)); // avoid copy by reference
    for(var i=0;i<mat1.length; i++) {
        var word = mat1[i][comcol]
        
        var ind = "";
        if(isafari()) ind = mat2.macFindIndex( function(x) {return x[comcol]==word})
        else ind = mat2.findIndex( function(x) {return x[comcol]==word})
        for(var j=0; j<addcoleng; j++) {
            res[i][addcols[j]] = mat2[ind][addcols[j]];
        }
    }
    return res;
}