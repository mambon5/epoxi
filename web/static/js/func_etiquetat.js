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
    MathJax.Hub.Typeset();
    
    elem("projs_proj3_tit").innerHTML = dicc[lleng].projs.proj[2].tit;
    elem("projs_proj3_subt").innerHTML = dicc[lleng].projs.proj[2].subt;
    elem("projs_proj3_parag1").innerHTML = dicc[lleng].projs.proj[2].parag[0];
    elem("projs_proj3_parag2").innerHTML = dicc[lleng].projs.proj[2].parag[1];
    elem("projs_proj3_parag3").innerHTML = dicc[lleng].projs.proj[2].parag[2];
    elem("projs_proj3_parag4").innerHTML = dicc[lleng].projs.proj[2].parag[3];
    
    elem("preu_tit").innerHTML = dicc[lleng].pric.tit;
    elem("preu_subtit").innerHTML = dicc[lleng].pric.subt;
    elem("preu_modz1_tit").innerHTML = dicc[lleng].pric.modz[0].tit;
    elem("preu_modz1_presen").innerHTML = dicc[lleng].pric.modz[0].presen;
    elem("preu_modz1_afor").innerHTML = dicc[lleng].pric.modz[0].afor;
    elem("preu_modz1_loc").innerHTML = dicc[lleng].pric.modz[0].loc;
    elem("preu_modz1_temp").innerHTML = dicc[lleng].pric.modz[0].temp;
    elem("preu_modz1_niv").innerHTML = dicc[lleng].pric.modz[0].niv;
    elem("preu_modz1_pric").innerHTML = dicc[lleng].pric.modz[0].pric;
    elem("preu_modz1_unitz").innerHTML =  dicc[lleng].pric.unitz;
    elem("preu_modz1_joinbut").innerHTML = dicc[lleng].pric.joinbut;
    
    
    elem("preu_modz2_tit").innerHTML = dicc[lleng].pric.modz[1].tit;
    elem("preu_modz2_presen").innerHTML = dicc[lleng].pric.modz[1].presen;
    elem("preu_modz2_afor").innerHTML = dicc[lleng].pric.modz[1].afor;
    elem("preu_modz2_loc").innerHTML = dicc[lleng].pric.modz[1].loc;
    elem("preu_modz2_temp").innerHTML = dicc[lleng].pric.modz[1].temp;
    elem("preu_modz2_niv").innerHTML = dicc[lleng].pric.modz[1].niv;
    elem("preu_modz2_pric").innerHTML = dicc[lleng].pric.modz[1].pric;
    elem("preu_modz2_unitz").innerHTML = dicc[lleng].pric.unitz;
    elem("preu_modz2_joinbut").innerHTML = dicc[lleng].pric.joinbut;
   
   
    elem("preu_modz3_tit").innerHTML = dicc[lleng].pric.modz[2].tit;
    elem("preu_modz3_presen").innerHTML = dicc[lleng].pric.modz[2].presen;
    elem("preu_modz3_afor").innerHTML = dicc[lleng].pric.modz[2].afor;
    elem("preu_modz3_loc").innerHTML = dicc[lleng].pric.modz[2].loc;
    elem("preu_modz3_temp").innerHTML = dicc[lleng].pric.modz[2].temp;
    elem("preu_modz3_niv").innerHTML = dicc[lleng].pric.modz[2].niv;
    elem("preu_modz3_pric").innerHTML = dicc[lleng].pric.modz[2].pric;
    elem("preu_modz3_unitz").innerHTML =  dicc[lleng].pric.unitz;
    elem("preu_modz3_joinbut").innerHTML = dicc[lleng].pric.joinbut;
    
   
    elem("preu_modz4_tit").innerHTML = dicc[lleng].pric.modz[3].tit;
    elem("preu_modz4_presen").innerHTML = dicc[lleng].pric.modz[3].presen;
    elem("preu_modz4_afor").innerHTML = dicc[lleng].pric.modz[3].afor;
    elem("preu_modz4_loc").innerHTML = dicc[lleng].pric.modz[3].loc;
    elem("preu_modz4_temp").innerHTML = dicc[lleng].pric.modz[3].temp;
    elem("preu_modz4_niv").innerHTML = dicc[lleng].pric.modz[3].niv;
    elem("preu_modz4_pric").innerHTML = dicc[lleng].pric.modz[3].pric;
    elem("preu_modz4_unitz").innerHTML =  dicc[lleng].pric.unitz;
    elem("preu_modz4_joinbut").innerHTML = dicc[lleng].pric.joinbut;
    
   
    elem("preu_modz5_tit").innerHTML = dicc[lleng].pric.modz[4].tit;
    elem("preu_modz5_presen").innerHTML = dicc[lleng].pric.modz[4].presen;
    elem("preu_modz5_afor").innerHTML = dicc[lleng].pric.modz[4].afor;
    elem("preu_modz5_loc").innerHTML = dicc[lleng].pric.modz[4].loc;
    elem("preu_modz5_temp").innerHTML = dicc[lleng].pric.modz[4].temp;
    elem("preu_modz5_niv").innerHTML = dicc[lleng].pric.modz[4].niv;
    elem("preu_modz5_pric").innerHTML = dicc[lleng].pric.modz[4].pric;
    elem("preu_modz5_unitz").innerHTML =  dicc[lleng].pric.unitz;
    elem("preu_modz5_joinbut").innerHTML = dicc[lleng].pric.joinbut;
    
  
    elem("preu_modz6_tit").innerHTML = dicc[lleng].pric.modz[5].tit;
    elem("preu_modz6_presen").innerHTML = dicc[lleng].pric.modz[5].presen;
    elem("preu_modz6_afor").innerHTML = dicc[lleng].pric.modz[5].afor;
    elem("preu_modz6_loc").innerHTML = dicc[lleng].pric.modz[5].loc;
    elem("preu_modz6_temp").innerHTML = dicc[lleng].pric.modz[5].temp;
    elem("preu_modz6_niv").innerHTML = dicc[lleng].pric.modz[5].niv;
    elem("preu_modz6_pric").innerHTML = dicc[lleng].pric.modz[5].pric;
    elem("preu_modz6_unitz").innerHTML = dicc[lleng].pric.unitz;
    elem("preu_modz6_joinbut").innerHTML = dicc[lleng].pric.joinbut;
    
    elem("contac_tit").innerHTML = dicc[lleng].contac.tit;
    elem("contac_adres").innerHTML = dicc[lleng].contac.adres;
    elem("contac_subt").innerHTML = dicc[lleng].contac.subt;
    elem("contac_loc").innerHTML = dicc[lleng].contac.loc;
    elem("contac_telf").innerHTML = dicc[lleng].contac.telf;
    elem("contac_email").innerHTML = dicc[lleng].contac.email;
    elem("contac_form_nomz").innerHTML = dicc[lleng].contac.form.nomz;
    elem("contac_form_email").innerHTML = dicc[lleng].contac.form.email;
    elem("contac_form_telf").innerHTML = dicc[lleng].contac.form.telf;
    elem("contac_form_mesg").innerHTML = dicc[lleng].contac.form.mesg;
    elem("contac_form_rtick").innerHTML = dicc[lleng].contac.form.rtick;
    elem("contac_form_env").innerHTML = dicc[lleng].contac.form.env;
    
    elem("follow_tit").innerHTML = dicc[lleng].folw.tit;
    elem("follow_creatd").innerHTML = dicc[lleng].folw.creatd;
    
   
    


}

