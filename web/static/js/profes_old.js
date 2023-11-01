 profes =    [ 
  { "nom":"Shabnam", "cognom":"Morakba" },
  { "nom":"Careen", "cognom":"Govindasamy" },
  { "nom":"Marta", "cognom":"Galló" },
  { "nom":"Laiba", "cognom":"Iqbal" },
  { "nom":"Alba", "cognom":"Saiz" },
  { "nom":"Sonia", "cognom":"Escura" },
  { "nom":"Miquel", "cognom":"Villa" }
];

 alumnes =    [ 
  { "nom":"Óscar", "cognom":"(fill de la Mar)" },
  { "nom":"Laura", "cognom":"(filla del Daniel)" },
  { "nom":"Adrià", "cognom":"(fill de Marta Vilatge)" },
  { "nom":"Bruno Solana", "cognom":"(fill de la Marta)" },
  { "nom":"Jay", "cognom":"(fill de la Llibertat)" },
  { "nom":"Amaia", "cognom":"(filla de la Janice)" },
  { "nom":"germà Amaia", "cognom":"(filla de Janice)" },
  { "nom":"Cloe", "cognom":"(filla de Marta Serrano)" },
  { "nom":"Carme", "cognom":"(néta de la Carme)" },
  { "nom":"Ares", "cognom":"Allins Tahull" },
  { "nom":"David", "cognom":"(estudia ADE)" },
  { "nom":"Miguel", "cognom":"Angel Garcia" },
  { "nom":"Daniela", "cognom":"(viu a sarrià)" },
  { "nom":"Adrià", "cognom":"(estudia en la uni Juan Carlos)" }
];

nomprofe = document.getElementById("nomprofes");
nomalumne = document.getElementById("nomalumnes");




function list_profes(profs) {
     var pre = '<option value="';
     var mid = '">';
     var after = '</option>';
     var options = "";
     for(i=0;i<profs.length;++i) {
             options = options + pre + profs[i].nom.toLowerCase() + profs[i].cognom.toLowerCase() + mid + profs[i].nom + " " + profs[i].cognom + after;
         }
     if(profs.length>0) return options ;
     return  "error, hores buides!" ;
}

function escriu_profes(){               
   
     var options = '<option value=""> tria un profe</option>';
      options = options +  list_profes(profes);
     nomprofe.innerHTML = options;     
}

function escriu_alumnes(){               
     var options = '<option value=""> tria un alumne</option>';
      options = options +  list_profes(alumnes);
     nomalumne.innerHTML = options;     
}
