
var hores = '<option value="10:00">10:00</option>';


function creadisp(antelacio) {
//    antelacio = 6*30;
//    if(!isafari()) var ara = new Date().valueOf();
    var ara = new Date();
    
    
    for( i=0; i<antelacio;++i) {
         dia = new Date(ara.getFullYear(), ara.getMonth(), ara.getDate()+ i);
         
         day = dia.getDay();

        hores = "";
         if(day == 1 | day==3 | day == 5) {
         hores = extenhor("17:00","20:00",30);
     }else if (day ==6) {
         hores = extenhor("09:00","13:00",30);
         hores = hores.concat(extenhor("16:00","20:00",30));
     }
     
        disponib[dia.getFullYear() + "/" + dia.getMonth() + "/" + dia.getDate()] = 
                hores;
        var string = dia.getFullYear() + "/" + dia.getMonth() + "/" + dia.getDate();
     console.log("cas " + i +": " + string);
     
    }
    
}


function extenhor(ini, fi, incr) {
    //han d'estar en format hh:mm or hh:mm:ss
    //increment in minutes
    //adding this because of safari: .replace(/-/g, "/")
    ini =  new Date( ("1970-01-01 " + ini).replace(/-/g, "/") );
    fi =  new Date( ("1970-01-01 " + fi).replace(/-/g, "/") );
    delt = (fi - ini)/60000;
    iter = delt/incr;
    arr = [];
    
    for(var i=0;i<iter;++i) {
        aux = new Date(ini.getTime() + i*incr*60000);        
        if(isafari) arr[i] = aux.getHours()+":"+aux.getMinutes().toString().macPadStart(2,0);
        else arr[i] = aux.getHours()+":"+aux.getMinutes().toString().padStart(2,0);
    }
    
    return arr;
    
}

function canviaformat(temps) {//format en "hh:mm:ss" retorna "-h:mm"
    var  date = new Date("2014-08-20 " + temps);
    var  hour=date.getHours() + ""
    var min = date.getMinutes() + ""
    res = hour  + ":" + min.padStart(2,"0")
    return res;
}

function treuhores(dies, hores) { //passar un array amb dies i un altre amb hores.
    
}

function horesaopt(hores) {
     var pre = '<option value="';
     var mid = '">';
     var after = '</option>';
     var options = "";
     for(i=0;i<hores.length;++i) {
             options = options + pre + hores[i] + mid + hores[i] + after;
         }
     if(hores.length>0) return options ;
     return  "error, hores buides!" ;
}

function possibhores(){
               
    //convert string to date:
     var dpart = data.value.split("/");
     var day = new Date(dpart[2],dpart[1]-1,dpart[0]);
     day = day.getDay();
    
    var options = "";
    
     if(day == 1 | day==3 | day == 5) {
         hores = extenhor("17:00","20:00",30);
         options = horesaopt(hores);
     }else if (day ==6) {
          hores = extenhor("09:00","13:00",30);
         options = horesaopt(hores);
         hores = extenhor("16:00","20:00",30);
         options = options + horesaopt(hores);
     } else {
         console.log("error, invalid day chosen!")
     }
     hora.innerHTML = options;
     
}

function tempsdespl(elem) {
    hores = extenhor("00:00","3:00",5);
    options = horesaopt(hores);
    elem.innerHTML = options;
}

function horesdeclase(elem) {
    hores = extenhor("00:30","8:15",15);
    options = horesaopt(hores);
    elem.innerHTML = options;
}

var ocis = ' <option value="restaurant">Restaurant</option>'+
      '<option value="disco">Discoteca</option>'+
        '<option value="bar">Bar</option>';
  
 var altres = '<option value="altres">Altres</option>';

function compviat() {
    motiu = document.getElementById("motiu");
    motiuv = document.getElementById("motiuv");
    concret = document.getElementById("concret");
    
    concret.innerHTML = "Motiu en concret:";
  
    if(motiu.value === "Viatge") {
        motiuv.innerHTML = paisos;
        concret.innerHTML = "Destí:";

    } else if(motiu.value === "Oci") {
        motiuv.innerHTML = ocis;

    } else {
         motiuv.innerHTML = altres;
         motiuv.value = "altres";

    }
    console.log(motiu.value);
}

//
//const enfer = [];
//enfer[0]= [];
//enfer[1]= extenhor("17:00","20:00",30);
//enfer[2]= [];
//enfer[3]= extenhor("17:00","20:00",30);
//enfer[4]= [];
//enfer[5]= extenhor("17:00","20:00",30);
//enfer[6]= extenhor("09:00","13:00",30).concat(extenhor("16:00","20:00",30));


