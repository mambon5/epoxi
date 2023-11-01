/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * this is intended to be a random word generator, by Romà on May 18th
 */
//text de tirant lo blanc
var text="La sperança gloriosa que tinch de la tua molta virtut, pare reverent, me dóna ànimo de pregar-te que·ns vulles donar ajuda e consell en la molta nostra necessitat, com te veja home de sancta vida e amich de Jhesuchrist, que vulles considerar e dolre't del gran dan e destructió que aquests malvats infeels fan e han fet en lo nostre regne, que la major part de la illa han destroyda, e han-me vençudes moltes e diverses batalles e morta la millor cavalleria que en lo meu regne era. E si no has dolor de mi, hajes compassió de tant de poble crestià, qui és jutgat a perpetual cativeri, e dones e donzelles qui són e seran desonides e posades en captivitat. E contempla que encara que aquesta ciutat sia ben provehida de vitualles e de les altres coses pertanyents a la guerra, que per açò no·ns porem molt sostenir, per la morisma, que és molta, que ja tenen conquistada la major part de la illa e no entendran sinó en la nostra destructió, e majorment com no speram socors de nengú si ja no de la misericòrdia de nostre Senyor per mijà de ta reverència. Per què·t prech carament ―si tens amor a Déu ni karitat en tu habita― que hajes compassió de aquest afligit regne e desolació de aquell, que per ta virtut te vulles despullar aquexes robes que portes de penitència e vulles-te vestir les de karitat, que són les armes, que mijançant lo adjutori divinal e la subvenció tua nosaltres atenyerem gloriosa victòria de nostres enemichs. Acabant lo rey paraules de tanta compassió acompanyades, l'ermità féu principi a parlar de semblant stil. La selsitut de vostra senyoria e excel·lència, mon senyor, me fa star molt admirat com yo essent pobre e dèbil, que la senyoria vostra me demane consell e ajuda, considerada la condició e disposició mia. Com la excel·lència vostra no ignora la mia dèbil e antigua persona ésser posada en decrepitut gran, axí per los molts dies com per la aspra vida que per lonch temps he sostenguda en la muntanya, no vivint sinó de erbes e de pa, la mia virtut no pot ésser tal que bastàs a comportar les armes, majorment com no·n sia husat. E demana la senyoria vostra a mi consell, qui teniu en lo regne vostre tants barons e cavallers valentíssims, abtes e molt destres en les armes, qui us poden millor de mi aconsellar e ajudar? Bé us sé dir, mon senyor, que si jo fos stat virtuós cavaller ni sabés alguna cosa en l'art de la cavalleria, e destre en les armes, yo de bona voluntat serviria la magestat vostra e posaria la mia dèbil persona a tot perill de mort per posar en libertat tant poble cristià e, majorment, a la magestat vostra, de la qual serà gran dan que en tan gran joventut hajau ésser despossehit de la vostra real senyoria. Per què supplich a la excel·lència vostra que m'ajau per scusat. Lo adolorit rey, molt enujat de tal resposta, féu principi a tal parlar"
var paraules = text.split(/[\s,.―'·]+/); //supress any unwanted characters and split
                                       //into words

    
function getUniqueArray(_array)//torna paraules uniques
{
  // in the newArray get only the elements which pass the test implemented by the filter function.
  // the test is to check if the element's index is same as the index passed in the argument.
  let newArray = _array.filter((element, index, array) => array.indexOf(element) === index);
  return newArray
}

var origpars = paraules
paraules = getUniqueArray(paraules);
paraules = paraules.filter(function(item) { 
        return item.length > 1;// agafa paraules amb més d'una lletra
    });

function paraularand(paraules=paraules, quantitat=1, sep=" ") { //array de paraules, i numero enter
    var codi = paraules[Math.floor(Math.random()*paraules.length)];
    for (let i = 1; i < quantitat; i++) {
      var word = paraules[Math.floor(Math.random()*paraules.length)];
      codi = codi + sep + word;
    } 
    return codi;
    
    
}

function rndword_numb(paraules=paraules, quantitat=1, sep=" ") { //array de paraules, i numero enter
    var codi = paraularand(paraules, quantitat);
    codi = codi + sep + Math.floor(100*Math.random());
    return codi;
    
    
}


function rand_acronim(name, nombres=2 ) {
     
    var acronim = name.replace(/\s+/g, '').toLowerCase().normalize("NFD").
            replace(/\p{Diacritic}/gu, "")  //removes spaces, puts to lowercase a
    //and removes diacritics accents
    if(nombres>0) acronim = acronim + Math.floor(Math.pow(10, nombres)*Math.random());
    return acronim;
}


function rand_numword(llargada=30, lletres=-1, digits=-1 ) {
    var alpha="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var nums="0123456789"; 
    if(lletres>alpha.length || lletres<0 ) lletres=alpha.length
    if(digits>digits.length || digits<0 ) lletres=digits.length
    
    alpha=alpha.slice(0,lletres);
    nums=nums.slice(0,digits);
    var frase = alpha+nums;
    
    var codi = repl_sample(frase, llargada);
    codi = codi.join("")
    return codi;
}

 function repl_sample(obj, n, guard) { //sample with replacement, created from
     //underscore _.sample() function
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = values(obj);
      return obj[random(obj.length - 1)];
    }
    var sample = _.toArray(obj);
    var length = sample.length;
    var last = length - 1;
    var result = [];
    for (var index = 0; index < n; index++) {
      var rand = _.random(0, last);
      result[index] = sample[rand];
    }
    return result;
  }