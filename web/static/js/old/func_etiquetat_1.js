var elem = function( id ) { return document.getElementById( id ); }

function car_etiqs(lleng) {
    elem("nav_equip").innerHTML = dicc[lleng].nav1.menu1;
    elem("nav_clases").innerHTML = dicc[lleng].nav1.menu2.nomz;
    elem("nav_idea").innerHTML = dicc[lleng].nav1.menu2.sub1;
    elem("nav_eso").innerHTML = dicc[lleng].nav1.menu2.sub2;
    elem("nav_batx").innerHTML = dicc[lleng].nav1.menu2.sub3;
    elem("nav_univers").innerHTML = dicc[lleng].nav1.menu2.sub4;
    
    elem("nav_preus").innerHTML = dicc[lleng].nav1.menu3.nomz;
    elem("nav_eso2").innerHTML = dicc[lleng].nav1.menu3.sub2;
    elem("nav_batx2").innerHTML = dicc[lleng].nav1.menu3.sub3;
    elem("nav_univers2").innerHTML = dicc[lleng].nav1.menu3.sub4;
    
    elem("nav_contact").innerHTML = dicc[lleng].nav1.menu4;
    elem("nav_projects").innerHTML = dicc[lleng].nav1.menu5.nomz;
    elem("nav_proj1").innerHTML = dicc[lleng].nav1.menu5.sub1;
    elem("nav_proj2").innerHTML = dicc[lleng].nav1.menu5.sub2;
    elem("nav_proj3").innerHTML = dicc[lleng].nav1.menu5.sub3;
    
    elem("lang_tit").innerHTML = dicc[lleng].nav1.menu6.nomz;    
    elem("but_cat").innerHTML = dicc[lleng].nav1.menu6.llen[0];
    elem("but_cast").innerHTML = dicc[lleng].nav1.menu6.llen[1];
    elem("but_eng").innerHTML = dicc[lleng].nav1.menu6.llen[2];
    
    elem("nav2_menu").innerHTML = dicc[lleng].nav2.tit;
    elem("nav2_equip").innerHTML = dicc[lleng].nav1.menu1;
    elem("nav2_clases").innerHTML = dicc[lleng].nav1.menu2.nomz;
    elem("nav2_projects").innerHTML = dicc[lleng].nav1.menu5.nomz;
    elem("nav2_preus").innerHTML = dicc[lleng].nav1.menu3.nomz;
    elem("nav2_contact").innerHTML = dicc[lleng].nav1.menu4;
    
    elem("nav2_lang_tit").innerHTML = dicc[lleng].nav1.menu6.nomz;
    elem("nav2_cat").innerHTML = dicc[lleng].nav1.menu6.llen[0];
    elem("nav2_cast").innerHTML = dicc[lleng].nav1.menu6.llen[1];
    elem("nav2_eng").innerHTML = dicc[lleng].nav1.menu6.llen[2];
    
    elem("text1_tit").innerHTML = dicc[lleng].parag1.tit;
    elem("text1_parag").innerHTML = dicc[lleng].parag1.text1;
    elem("text2_tit").innerHTML = dicc[lleng].parag2.tit;
    elem("text2_parag").innerHTML = dicc[lleng].parag2.text1;
    
    elem("equip_tit").innerHTML = dicc[lleng].equipp.tit;
    elem("equip_subt").innerHTML = dicc[lleng].equipp.subt;
    
    elem("equip_web_who").innerHTML = dicc[lleng].equipp.rolz[0].pers;
    elem("equip_web_tit").innerHTML = dicc[lleng].equipp.rolz[0].nomz;
    elem("equip_web_parg1").innerHTML = dicc[lleng].equipp.rolz[0].desc[0];
    elem("equip_web_parg2").innerHTML = dicc[lleng].equipp.rolz[0].desc[1];
    elem("equip_web_parg3").innerHTML = dicc[lleng].equipp.rolz[0].desc[2];
    
    elem("equip_supp_who").innerHTML = dicc[lleng].equipp.rolz[1].pers;
    elem("equip_supp_tit").innerHTML = dicc[lleng].equipp.rolz[1].nomz;
    elem("equip_supp_parag1").innerHTML = dicc[lleng].equipp.rolz[1].desc[0];
    
    elem("equip_jefe_who").innerHTML = dicc[lleng].equipp.rolz[2].pers;
    elem("equip_jefe_tit").innerHTML = dicc[lleng].equipp.rolz[2].nomz;
    elem("equip_jefe_parag1").innerHTML = dicc[lleng].equipp.rolz[2].desc[0];
    elem("equip_jefe_parag2").innerHTML = dicc[lleng].equipp.rolz[2].desc[1];
    elem("equip_jefe_parag3").innerHTML = dicc[lleng].equipp.rolz[2].desc[2];
    elem("equip_jefe_parag4").innerHTML = dicc[lleng].equipp.rolz[2].desc[3];
    
    elem("equip_mestre1_who").innerHTML = dicc[lleng].equipp.rolz[3].pers;
    elem("equip_mestre1_tit").innerHTML = dicc[lleng].equipp.rolz[3].nomz;
    elem("equip_mestre1_parag1").innerHTML = dicc[lleng].equipp.rolz[3].desc[0];
    elem("equip_mestre1_parag2").innerHTML = dicc[lleng].equipp.rolz[3].desc[1];
    elem("equip_mestre1_parag3").innerHTML = dicc[lleng].equipp.rolz[3].desc[2];
    elem("equip_mestre1_parag4").innerHTML = dicc[lleng].equipp.rolz[3].desc[3];
    elem("equip_mestre1_link").href = dicc[lleng].equipp.rolz[3].linkedin;
     
    elem("equip_mestre2_who").innerHTML = dicc[lleng].equipp.rolz[4].pers;
    elem("equip_mestre2_tit").innerHTML = dicc[lleng].equipp.rolz[4].nomz;
    elem("equip_mestre2_parag1").innerHTML = dicc[lleng].equipp.rolz[4].desc[0]; 
    elem("equip_mestre2_link").href = dicc[lleng].equipp.rolz[4].linkedin;
    
    elem("equip_mestre3_who").innerHTML = dicc[lleng].equipp.rolz[5].pers;
    elem("equip_mestre3_tit").innerHTML = dicc[lleng].equipp.rolz[5].nomz;
    elem("equip_mestre3_parag1").innerHTML = dicc[lleng].equipp.rolz[5].desc[0]; 
    elem("equip_mestre3_link").href = dicc[lleng].equipp.rolz[5].linkedin;
    
    elem("equip_mestre4_who").innerHTML = dicc[lleng].equipp.rolz[6].pers;
    elem("equip_mestre4_tit").innerHTML = dicc[lleng].equipp.rolz[6].nomz;
    elem("equip_mestre4_parag1").innerHTML = dicc[lleng].equipp.rolz[6].desc[0]; 
    elem("equip_mestre4_link").href = dicc[lleng].equipp.rolz[6].linkedin;
    
    elem("equip_mestre5_who").innerHTML = dicc[lleng].equipp.rolz[7].pers;
    elem("equip_mestre5_tit").innerHTML = dicc[lleng].equipp.rolz[7].nomz;
    elem("equip_mestre5_parag1").innerHTML = dicc[lleng].equipp.rolz[7].desc[0]; 
    elem("equip_mestre5_link").href = dicc[lleng].equipp.rolz[7].linkedin;
    
    elem("equip_mestre6_who").innerHTML = dicc[lleng].equipp.rolz[8].pers;
    elem("equip_mestre6_tit").innerHTML = dicc[lleng].equipp.rolz[8].nomz;
    elem("equip_mestre6_parag1").innerHTML = dicc[lleng].equipp.rolz[8].desc[0]; 
    elem("equip_mestre6_link").href = dicc[lleng].equipp.rolz[8].linkedin;
    
    elem("equip_mestre7_who").innerHTML = dicc[lleng].equipp.rolz[9].pers;
    elem("equip_mestre7_tit").innerHTML = dicc[lleng].equipp.rolz[9].nomz;
    elem("equip_mestre7_parag1").innerHTML = dicc[lleng].equipp.rolz[9].desc[0]; 
    elem("equip_mestre7_link").href = dicc[lleng].equipp.rolz[9].linkedin;
    
    elem("equip_mestre8_who").innerHTML = dicc[lleng].equipp.rolz[10].pers;
    elem("equip_mestre8_tit").innerHTML = dicc[lleng].equipp.rolz[10].nomz;
    elem("equip_mestre8_parag1").innerHTML = dicc[lleng].equipp.rolz[10].desc[0]; 
    elem("equip_mestre8_link").href = dicc[lleng].equipp.rolz[10].linkedin;


    elem("projs_tit").innerHTML = dicc[lleng].projs.tit;
    
    elem("projs_proj1_tit").innerHTML = dicc[lleng].projs.proj[0].tit;
    elem("projs_proj1_subt").innerHTML = dicc[lleng].projs.proj[0].subt;
    elem("projs_proj1_parag1").innerHTML = dicc[lleng].projs.proj[0].parag[0];
    elem("projs_proj1_parag2").innerHTML = dicc[lleng].projs.proj[0].parag[1];
    elem("projs_proj1_parag3").innerHTML = dicc[lleng].projs.proj[0].parag[2];
    
    elem("projs_proj2_tit").innerHTML = dicc[lleng].projs.proj[1].tit;
    elem("projs_proj2_subt").innerHTML = dicc[lleng].projs.proj[1].subt;
    elem("projs_proj2_parag1").innerHTML = dicc[lleng].projs.proj[1].parag[0];
    elem("projs_proj2_parag2").innerHTML = dicc[lleng].projs.proj[1].parag[1];



}

