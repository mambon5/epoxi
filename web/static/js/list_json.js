/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//for listing a JSON
function json_to_list(dades,value,display,elem_id) {
    if(elem_id==undefined) elem_id="list";
    //const myObj = JSON.parse(this.responseText); //use if original data in text
    const myObj = dades;
    var listDiv = document.getElementById(elem_id);
    var ul=document.createElement('ul');
    for (var i = 0; i < data.length; ++i) {
        var li=document.createElement('li');
        li.innerHTML = myObj[x][display];   // Use innerHTML to set the text
        ul.appendChild(li);                                 
  }
listDiv.appendChild(ul);    // Note here
}
//for creating select options from a JSON

function json_to_select(dades,value,display,elem_id) {
    if(elem_id==undefined) elem_id="list";
    //const myObj = JSON.parse(this.responseText); //use if original data in text
    const myObj = dades;
      var text = "<select>"
      for (var x in myObj) {
        text += "<option value='"+myObj[x][value]+"'>" + myObj[x][display] + "</option>";
      }
      text += "</select>"
      document.getElementById(elem_id).innerHTML = text;
}

function json_to_options(dades,value,display,elem_id) {
    if(elem_id==undefined) elem_id="list";
    //const myObj = JSON.parse(this.responseText); //use if original data in text
    const myObj = dades;
      var text = ""
      for (var x in myObj) {
        text += "<option value='"+myObj[x][value]+"'>" + myObj[x][display] + "</option>";
      }
     
      document.getElementById(elem_id).innerHTML = text;
}
