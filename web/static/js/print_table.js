function print_table_simp(array, tableid) { //print table simple, deducing the column names
    //from the first element column names. Simple.(:
    var columns = Object.getOwnPropertyNames(array[0]);
    
    print_table(array, columns, tableid);
  

}


function print_table(array, columns,tableid,  header) {
    if(header == undefined) header= "";
    if(header == "") header = columns;
    var n = columns.length;
    var m = array.length;
    var rows = '';
    
    rows = '<tr>';
    for( i=0; i<n; ++i){
        rows = rows + '<th class="w3-th">' + header[i] + '</th>'
    }
    rows = rows + '</tr>';
    
    for( j=0; j<m; ++j) {
        rows =  rows + '<tr class="tabitem">';
        for( i=0; i<n; ++i){
            rows = rows + '<td>' + array[j][columns[i]] + '</td>'
        }
        rows = rows + '</tr>';
    }
    
    document.getElementById(tableid).innerHTML = rows;
  

}

function checkclasses(acro) {
    console.log("mirant clases d'en: " + acro);
    
    form = document.getElementById("formdispo")
    vista = document.getElementById("vista")
    acronim = document.getElementById("acronim")
    camps = document.getElementById("camps")

    form.action = "/veure/veure_clases.php"
    vista.value=acro
    acronim.value=acro;
    camps.value = "restringit"
            
    form.submit()
}

function check_dispo(acro) {
    form = document.getElementById("formdispo")
    tipureg = document.getElementById("tipureg")
    acronim = document.getElementById("acronim")
    capat_elem = document.getElementById("capat")

    if(capat=="si") capat_elem.value="si"
    form.action = "/registrar/disponibilitat/dispo_horaria.php"
    tipureg.value="veure"
    acronim.value=acro;
            
    form.submit()
}

function addcolumn_hc(table) {//horari i clases
   
    
    // open loop for each row and append cell
    td = table.rows[0].insertCell(table.rows[0].cells.length)
    td.innerHTML = "<b>clases passades</b>"
    td = table.rows[0].insertCell(table.rows[0].cells.length)
    td.innerHTML = "<b>horaris</b>"
    for (i = 1; i < table.rows.length; i++) {
        td = table.rows[i].insertCell(table.rows[i].cells.length)        
        td.innerHTML = "<span class='w3-button w3-teal' onclick='checkclasses(\""+table.rows[i].cells[1].innerHTML+
                "\")'>Veure clases</span>";
        td = table.rows[i].insertCell(table.rows[i].cells.length)        
        td.innerHTML = "<span class='w3-button w3-teal' onclick='check_dispo(\""+table.rows[i].cells[1].innerHTML+"\")'>Veure horari</span>" 
    }
 }

function addcolumn_regclase(table) {// botó per posar registrar clase
   
    
    // open loop for each row and append cell
    td = table.rows[0].insertCell(table.rows[0].cells.length)
    td.innerHTML = "<b>nova clase</b>"
    for (i = 1; i < table.rows.length; i++) {
        td = table.rows[i].insertCell(table.rows[i].cells.length)        
        td.innerHTML = "<a class='w3-button w3-teal' href='/registrar/registra_clases.php'>Registrar clase</a>";
        
    }
 }

function hidecolum(table, pos) {
        for (i = 0; i < table.rows.length; i++) {
            table.rows[i].cells[pos].style.display="none"
        }
    }
    
      function hide_columns_in_table(table, arr) { //arr with column positions to hide
        for(var i=1; i<table.rows.length; i++) { //we skip the heather row,this for rows
            for(var j=0; j<arr.length; j++ ) {// we loop through cells/columnsnow
                table.rows[i].childNodes[arr[j]].style.display="none";
            }
        }
    }
    
    function content_uneditable(table, arr) { //make content uneditable for all cells in the 
        // given rows
        if(arr==undefined) {
             for(var i=1; i<table.rows.length; i++) //we skip the heather row,this for rows
                table.rows[i].contentEditable = false;
            }
        
        else {
            for( i in arr) { //we skip the heather row,this for rows
                table.rows[i].contentEditable = false;
                var w = table.rows[i].childNodes.length
                for(var j=0;j<w;j++) {
                //canvia la cela a editable, si no es el id, el profe ni l'alumne
                if(j!=0 && j != 5 && j != 6) table.rows[i].childNodes[j].contentEditable = false; 
            }
            }
        }
        
        
    }
    
    function print_clases(clases, persones, taulaid) {
        //adds array to the visible table
        var columns = Object.getOwnPropertyNames(clases[0]);
         var coldic =  {
            "nom_profe": "Nom profe",
            "nom_alumne": "Nom alumne",
            "pagada_by_client":"Pagada pel client",
            "pagada_to_profe":"Pagada a la profe"
        };
        
        
            header = chg_arr_values(columns, coldic);

            //change acronims for names in matrix clases
            rows =  transl_bunch(clases, ["nom_profe","nom_alumne"], persones,
            "acronim", "nom");



            //canviant els strings "1" i "0" per "sí" i "no"
            var bindic =  [
                {"binari":0, "humà":"No"},
                {"binari":1, "humà":"Sí"}
            ];
            rows =  transl_bunch(rows, ["cafe"], bindic,
                "binari", "humà");
            if(rows[0].pagada_by_client!=undefined || 
                    rows[0].pagada_to_profe!=undefined) {
                //canvia de binari a humà alguns registres           
                rows =  transl_bunch(rows, ["pagada_by_client","pagada_to_profe"], bindic,
                "binari", "humà");
            }
    //        var rows = clases;

            print_table(rows, columns, taulaid,header);
    }
    
  
    
    function  table_add_clickables(claserows, elimclase, modiclase) {
             
       
            for (var i = 0; i < claserows.length; i++) {
                 var elem = claserows[i];
                 var z= elem.insertCell(-1);
                 z.innerHTML=elimclase;
                 z.style.display = "none";
                 w= elem.insertCell(-1);
                 w.innerHTML=modiclase;
                 w.style.display = "none";
                 (function(x){//doing this to avoid "i" changing value after loop
                     //works like a charm
                    elem.addEventListener("click", function(){ canvia_clase(claserows[x]); })
                    
//                    elem.addEventListener("dblclick", function(){ altera_clase(claserows[x]); }); 
                })(i)
                 
              }
         }