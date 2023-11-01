/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const dicc = [];
dicc["cat"] = {
    nav1: {
        menu1: "Equip",
        menu2:  {
          nomz: "Clases",
          sub1: "Idea",
          sub2: "Educació Secundària",
          sub3: "Batxillerat",
          sub4: "Universitat"
      },
        menu3: {
          nomz: "Preus",
          sub1: "Idea",
          sub2: "Educació Secundària",
          sub3: "Batxillerat",
          sub4: "Universitat"
      },
        menu4: "Contacte",
        menu5: {
          nomz: "Projectes",
          sub1: "Plans projectius",
          sub2: "Desigualtat en HRL",
          sub3: "Altres"
      },
        menu6: {
          nomz: "CAT",
          llen: ["Català",
              "Español",
              "English"] 
      }
    },
    nav2: {
        tit: "navega"
    },
    parag1: {
          tit: "Perspectiva d'ensenyança",
          text1: "La intenció de la Nova Escola Matemàtica és senzilla: donar el mínim d'instruccions a l'estudianta per tal que ella sigui la que trobi el camí. No volem ser una escola tradicional on l'alumna primer escolta, i després repeteix uns exercicis concrets."
      },
    parag2: {
          tit: "Ho volem fer a la inversa:",
          text1: "Volem escoltar primer a la alumna, quin problema vol solucionar. Després preguntem quines idees té i a partir d'aquí l'animem a explorar les que nosaltres com a profesors o guies sabem que poden solucionar el problema. La intenció és que l'alumna treballi i pensi per ella mateixa, i no és limiti a copiar i repetir mecànicament com pasa actualmente en quasi totes les escoles de Catalunya."
      },
    equipp: {
        tit: "EL NOSTRE EQUIP",
        subt: "Coneix l'equip - els treballadors de camp",
        rolz: [ {
            pers: "Romà Masana",
            nomz: "Dissenyador web i màrqueting",
            desc: ["S'encarrega de dissenyar tot el Front-End i Back-end",
            "Disseny estètic de tot el material de l'escola, tria la tipografia i els colors",
                "Selecciona les fotografies i dibuixos que apareixen en tot el material"]
            },
        
            {  
            pers: "Romà Masana",
            nomz: "Suport 24/7",
            desc: ["Atèn emails, missatges i trucades"]
            },
            
            {
            pers: "Romà Masana",
            nomz: "Jefe",
            desc: ["Té la responsabilitat de gestionar totes les feines",
            "Pren les decisions sobre els preus",
            "Com es fa publicitat i quin tipus de públic es busca",
            "És el responsable últim de si l'escola va bé o malament."]
            },
            
            {
            pers: "Romà Masana",
            nomz: "Mestre",
            desc: ["Graduat en matemàtiques a la UPC Barcelona, tesi de grau sobre l'equació d'Schrödinger en l'àtom d'Hidrogen. Estudi en derivades parcials.",
                "Màster en matemàtiques a la Nijmegen Universiteit (Països Baixos). Tèsi de màster: la calibració d'un model físic de predicció del vent mitjançant l'estadística. En concret, mètodes de regressió no paramètrica i machine learning.",
                "PhD en matemàtiques a la IIT de Chicago, EEUU (inacabat). Focalitzat en mètodes Bayesians d'estadística i teoria de la probabilitat.",
                "1 any d'experiència treballant com a Data Scientist a una consultoria en Economia de la Salut"],
            linkedin: "https://www.linkedin.com/in/rom%C3%A0-masana-61459411b"
            },
        
            {
            pers: "Shabnam Morakba",
            nomz: "Mestra",
            desc: ["El meu nom és Shabnam, em vaig graduar a la Universitat Politècnica de Catalunya amb un Doctorat en Enginyeria Química. Des del 2015 visc i treballo a Barcelona com a educadora. Dono classes particulars en un ampli ventall de matèries acadèmiques enfocades a matemàtiques, química i física per ESO i Batxillerat. He estat ensenyant a escoles secundàries públiques i internacionals a Barcelona. Com a tutor privat, sóc molt pacient i crec en el renfort positiu. M'agrada establir una gran relació amb un estudiant des del principi, cosa que ajuda a personalitzar el pla estudis per treballar amb les fortaleses i debilitats de l'estudiant. Sóc bona estudiant, m'encanten les matemàtiques i m'apassiona la història, la literatura. “La ciència no coneix pàtria, perquè el coneixement pertany a la humanitat, i és la torxa que il·lumina el món”. Luis Pasteur"],
            linkedin: "https://www.linkedin.com/in/shabnam-morakabatchiankar-a7792260/"
            },
            
            {
            pers: "Ca'reen Govindasamy",
            nomz: "Mestra",
            desc: ["Graduada en Matemàtiques i Informàtica per la universitat de Sud Àfrica. Experta en temàtica de matemàtiques i computació i en concret, en Igcse Cambridge exams - Matemàtiques, Física, Química i biologia. També puc donar classes de Python i altres llenguatges sense problemes."],
            linkedin: "https://www.linkedin.com/in/ca-reen-govindasamy-1510a8138/"
        },
        
            {
            pers: "Marta Galló",
            nomz: "Mestre",
            desc: ["Estic estudiant actualment la carrera de Treball Social a la Universitat de Barcelona. Tinc una gran passió per les llengües i la filologia i em sento experta en aquest camp. Sóc esportista d'èlit i dono clases de llengua catalana, castellana i anglesa."],
            linkedin: "https://www.linkedin.com/in/marta-gall%C3%B3-3a6a42236"},
        
            {
            pers: "Laiba Iqbal",
            nomz: "Mestra",
            desc: ["Estudiant de la carrera de Física a la Universitat de Barcelona. Tinc experiència donant clases de física i matemàtiques al ESO i al batxillerat."],
            linkedin: "https://www.linkedin.com/in/laiba-iqbal-kousar-b87317233/"},
            
            {
            pers: "Miquel Villalonga",
            nomz: "Mestre",
            desc: ["Graduat en el doble grau de Matemàtiques i Administració i Direcció d'Empreses per la Universitat de Barcelona. Tinc experiència en donar classes particulars a ESO, Batxillerat i primers cursos d'Universitat, sobretot de Matemàtiques però també altres matèries com Economia, Comptabilitat, Física i Química. Com a professor, m'agrada explicar els dubtes que em plantegen els meus alumnes de manera que no es limitin a resoldre els exercicis de manera mecànica. També m'agrada establir una relació propera i de confiança amb l'alumne, i des de sempre m'ha encantat el món de les matemàtiques i la docència."],
            linkedin: "https://www.linkedin.com/in/miquel-villalonga-su%C3%B1er-bb03131a3"},
        
            {
            pers: "Alba Tacoronte",
            nomz: "Mestra",
            desc: ["Graduada en Física per la Universitat de Sevilla. He descobert una vertadera passió per les matemàtiques i com ensenyar-les. He fet una estància a la universitat de Gdańsk Polònia. He treballat com a programadora en un banc i actualment he decidit centrar la meva carrera com a profesora a la Universitat Politècnica de Catalunya com a Càlcul per a estudiants de Telecomunicacions."],
            linkedin: "https://www.linkedin.com/in/shabnam-morakabatchiankar-a7792260/"},
            
            {
            pers: "Gema Rojas",
            nomz: "Mestra",
            desc: ["La meva formació bàsica és en biomedicina bàsica i experimental. Després, vaig fer un màster en bioinformàtica i em vaig especialitzar en ciència de dades en el sector sanitari treballant en una empresa privada. Actualment estic fent un PhD en biomedicina, amb especialització en bioinformàtica, i estic explorant l'ús de models generatius i descriptors de bioactivitat per a la reutilització i el descobriment de fàrmacs."],
            linkedin: "https://www.linkedin.com/in/gema-rojas-granado"
        }
        
        ]
        
    },
    
    projs: {
        tit: "Projectes actuals",
        proj: [
            {
                tit: "Plans projectius",
                subt: "Recerca en matemàtiques",
                parag: [ 
                    "Projecte actual d'un dels nostres professors",
                    "L'objectiu és resoldre una espècie de trencaclosques amb 157 punts i 157 línies de manera que cada dos línies interseccionin exactament en un únic punt.",
                    "Aquest trencaclosques resta sense resoldre per cap matemàtica del món a dia d'avui."
                ]
            },
            {
                tit: "Hipòtesis d'inducció en desigualtat",
                subt: "Recerca en matemàtiques",
                parag: [ 
                    "Un dels projectes actuals",
                    String.raw`Un profe està estudiant tota la teoria matemàtica de les hipòtesis d'inducció en una regressió lineal i ha descobert que la teoria seria quasi la mateixa quan la hipòtesi no és una equació del tipus \[ H_0 : H\beta = c \]   Sinó aquest aspecte:  \[ H_0 : H\beta \leq c \]`
                ]
                // run this command MathJax.Hub.Typeset() to update latex
            },
            {
                tit: "Altres projectes",
                subt: "Inclouen",
                parag: [ 
                    "La predicció de la velocitat del vent en 3700 estacions meteorològiques a Europa, usant el model físic de l'institut meteorològic europeu ECMWF. Projecte acabat. S'ha fet adjust estadístic de la predicció del model usant la tècnica Random Forests de ML, i models avançats de regressió anomenats GAMLSS de R.",
                    "L'estudi de la funció generador de nombres aleatoris de Neiderreiter usada en criptologia.",
                    "La creació d'un model de Random Forests (en machine learning) que manté la eficàcia i és més senzill, a partir de la idea d'usar múltiples variables per a fer cada ramificació.",
                    "Establir una simbologia adecuada per promoure l'escriptura en base hexadecimal en sustitució de l'actual menys eficaç sistema decimal."
                ]
            }
        ]
    },
    
    pric: {
        tit: "Preus",
        subt: "Donem clases particulars, en grup, presencials i telemàtiques. El preu que surt és per 1h de sessió.",
        joinbut: "Apunta't",
        unitz: "per clase",
        modz: [
            {
                tit:"Particular ESO",
                presen: "Presencial o telemàtica",
                afor: "1 sol alumne a clase",
                loc: "Si és presencial, serà per la Sagrada Família 08013",
                temp:"1h de clase",
                niv: "ESO",
                pric: "€ 18"
            },
            {
                tit:"En grup ESO",
                presen: "Presencial o telemàtica",
                afor: "4 alumnes màxim a la clase",
                loc: "Si és presencial, serà per la Sagrada Família 08013",
                temp:"1h de clase",
                niv: "ESO",
                pric: "€ 10"
            },
            {
                tit:"Particular batxillerat",
                presen: "Presencial o telemàtica",
                afor: "1 sol alumne a clase",
                loc: "Si és presencial, serà per la Sagrada Família 08013",
                temp:"1h de clase",
                niv: "Batxillerat",
                pric: "€ 20"
            },
            {
                tit:"En grup batxillerat",
                presen: "Presencial o telemàtica",
                afor: "4 alumnes màxim a la clase",
                loc: "Si és presencial, serà per la Sagrada Família 08013",
                temp:"1h de clase",
                niv: "Batxillerat",
                pric: "€ 15"
            },
            {
                tit:"Particular universitat",
                presen: "Presencial o telemàtica",
                afor: "1 sol alumne a clase",
                loc: "Si és presencial, serà per la Sagrada Família 08013",
                temp:"1h de clase",
                niv: "Universitat",
                pric: "€ 25"
            },
            {
                tit:"En grup Universitat",
                presen: "Presencial o telemàtica",
                afor: "4 alumnes màxim a la clase",
                loc: "Si és presencial, serà per la Sagrada Família 08013",
                temp:"1h de clase",
                niv: "Universitat",
                pric: "€ 18"
            }
        ]
    },
    
    contac: {
        tit: "Contacta'ns",
        adres: "Adreça",
        subt: "Truca'ns, envia'ns un Whatsapp o vine't per fer un té i parlar del que vulguis.",
        loc: "Barcelona, Espanya",
        telf: "+34 611 648 478",
        email: "newmathematicalschool@gmail.com",
        form: {
            nomz: "Nom",
            email: "Email",
            telf: "Telèfon",
            mesg: "Missatge",
            rtick: "M'agrada!",
            env: "Enviar"
        }
    },
    
    folw: {
        tit: "Segueix-nos",
        creatd: "Creat per Romà"
    }
    
};





dicc["esp"] = {
    nav1: {
        menu1: "Equipo",
        menu2: {
          nomz: "Clases",
          sub1: "Idea",
          sub2: "Educación Secundaria",
          sub3: "Bachillerato",
          sub4: "Universidad"
      },
        menu3: {
          nomz: "Precios",
          sub1: "Idea",
          sub2: "Educación Secundaria",
          sub3: "Bachillerato",
          sub4: "Universidad"
      },
        menu4: "Contacto",
        menu5: {
          nomz: "Proyectos",
          sub1: "Planes proyectivos",
          sub2: "Desigualdad en HRL",
          sub3: "Otros"
      },
        menu6: {
          nomz: "ESP",
          llen: ["Català",
              "Español",
              "English"]
      }
    },
    nav2: {
        tit: "navega"
    },
    parag1: {
          tit: "Perspectiva de enseñanza",
          text1: "La intención de la Nueva Escuela Matemática es sencilla: dar el mínimo de instrucciones a la estudiante para que ella sea la que encuentre el camino. No queremos ser una escuela tradicional donde la alumna primero escucha, y después repite unos ejercicios concretos."
      },
    parag2: {
          tit: "Queremos hacerlo a la inversa:",
          text1: "Queremos escuchar primero a la alumna, qué problema quiere solucionar. Después preguntamos qué ideas tiene ya partir de ahí le animamos a explorar las que nosotros como profesores o guías sabemos que pueden solucionar el problema. La intención es que l alumna trabaje y piense por sí misma, y ​​no se limite a copiar y repetir mecánicamente como ocurre actualmente en casi todas las escuelas de Cataluña."
    },
    equipp: {
        tit: "NUESTRO EQUIPO",
        subt: "Conoce al equipo - los trabajadores de campo",
        rolz: [ {
            pers: "Romà Masana",
            nomz: "Diseñador web y marketing",
            desc: ["Se encarga de diseñar todo el Front-End y Back-end",
            "Diseño estético de todo el material de la escuela, elige la tipografía y los colores",
                "Selecciona las fotografías y dibujos que aparecen en todo el material"]
            },
        
            {
            pers: "Romà Masana",
            nomz: "Apoyo 24/7",
            desc: ["Atiende emails, mensajes y llamadas"]
            },
            
            {
            pers: "Romà Masana",
            nomz: "Jefe",
            desc: ["Tiene la responsabilidad de gestionar todos los trabajos",
            "Toma las decisiones sobre los precios",
            "Cómo se hace publicidad y qué tipo de público se busca",
            "Es el responsable último de si la escuela va bien o mal."]
            },
            
            {
            pers: "Romà Masana",
            nomz: "Maestro",
            desc: ["Graduado en matemáticas en la UPC Barcelona, ​​tesis de grado sobre la ecuación de Schrödinger en el átomo de Hidrógeno. Estudio en derivadas parciales.",
                "Máster en matemáticas en la Nijmegen Universiteit (Países Bajos). Tesis de máster: la calibración de un modelo físico de predicción del viento mediante la estadística. En concreto, métodos de regresión no paramétrica y machine learning.",
                "PhD en matemáticas en la IIT de Chicago, EEUU (inacabado). Focalizado en métodos Bayesianos de estadística y teoría de la probabilidad.",
                "1 año de experiencia trabajando como Data Scientist en una consultoría en Economía de la Salud"],
            linkedin: "https://www.linkedin.com/in/rom%C3%A0-masana-61459411b"
            },

{
            pers: "Shabnam Morakba",
            nomz: "Maestra",
            desc: ["Mi nombre es Shabnam, me gradué en la Universidad Politécnica de Cataluña con un Doctorado en Ingeniería Química. Desde 2015 vivo y trabajo en Barcelona como educadora. Doy clases particulares en un amplio abanico de materias académicas enfocadas a matemáticas, química y física para ESO y Bachillerato, he estado enseñando en escuelas secundarias públicas e internacionales en Barcelona, ​​como tutor privado, soy muy paciente y creo en el refuerzo positivo.Me gusta establecer una gran relación con un estudiante desde el principio , cosa que ayuda a personalizar el plan estudios para trabajar con las fortalezas y debilidades del estudiante. Soy buena estudiante, me encantan las matemáticas y me apasiona la historia, la literatura. “La ciencia no conoce patria, porque el conocimiento pertenece a la humanidad, y es la antorcha que ilumina el mundo”. Luis Pasteur"],
            linkedin: "https://www.linkedin.com/in/shabnam-morakabatchiankar-a7792260/"
            },
            
            {
            pers: "Ca'reen Govindasamy",
            nomz: "Maestra",
            desc: ["Graduada en Matemáticas e Informática por la universidad de Sudáfrica. Experta en temática de matemáticas y computación y en concreto, en Igcse Cambridge exams - Matemáticas, Física, Química y biología. También puedo dar clases de Python y otros lenguajes sin problemas."],
            linkedin: "https://www.linkedin.com/in/es-reen-govindasamy-1510a8138/"
        },
        
            {
            pers: "Marta Galló",
            nomz: "Maestra",
            desc: ["Estoy estudiando actualmente la carrera de Trabajo Social en la Universidad de Barcelona. Tengo una gran pasión por las lenguas y la filología y me siento experta en este campo. Soy deportista de élite y doy clases de lengua catalana, castellana y inglesa."],
            linkedin: "https://www.linkedin.com/in/marta-gall%C3%B3-3a6a42236"},

{
            pers: "Laiba Iqbal",
            nomz: "Maestra",
            desc: ["Estudiante de la carrera de Física en la Universidad de Barcelona. Tengo experiencia dando clases de física y matemáticas en ESO y bachillerato."],
            linkedin: "https://www.linkedin.com/in/laiba-iqbal-kousar-b87317233/"},
            
            {
            pers: "Miquel Villalonga",
            nomz: "Maestro",
            desc: ["Graduado en el doble grado de Matemáticas y Administración y Dirección de Empresas por la Universidad de Barcelona. Tengo experiencia en dar clases particulares en ESO, Bachillerato y primeros cursos de Universidad, sobre todo de Matemáticas pero también otras materias como Economía , Contabilidad, Física y Química Como profesor, me gusta explicar las dudas que me plantean mis alumnos de forma que no se limiten a resolver los ejercicios de forma mecánica, también me gusta establecer una relación cercana y de confianza con alumno, y desde siempre me ha encantado el mundo de las matemáticas y la docencia."],
            linkedin: "https://www.linkedin.com/in/miquel-villalonga-su%C3%B1er-bb03131a3"},
        
            {
            pers: "Alba Tacoronte",
            nomz: "Maestra",
            desc: ["Graduada en Física por la Universidad de Sevilla. He descubierto una verdadera pasión por las matemáticas y cómo enseñarlas. He hecho una estancia en la universidad de Gdańsk Polonia. He trabajado como programadora en un banco y actualmente he decidido centrar mi carrera como profesora en la Universidad Politécnica de Cataluña como Cálculo para estudiantes de Telecomunicaciones."],
            linkedin: "https://www.linkedin.com/in/shabnam-morakabatchiankar-a7792260/"},

{
            pers: "Gema Rojas",
            nomz: "Maestra",
            desc: ["Mi formación básica es en biomedicina básica y experimental. Después, hice un máster en bioinformática y me especialicé en ciencia de datos en el sector sanitario trabajando en una empresa privada. Actualmente estoy haciendo un PhD en biomedicina, con especialización en bioinformática, y estoy explorando el uso de modelos generativos y descriptores de bioactividad para la reutilización y el descubrimiento de fármacos."],
            linkedin: "https://www.linkedin.com/in/gema-rojas-granado"
        }
        
        ]
        
    },
        projs: {
        tit: "Proyectos actuales",
        proj: [
            {
                tit: "Planes proyectivos",
                subt: "Investigación en matemáticas",
                parag: [
                    "Proyecto actual de uno de nuestros profesores",
                    "El objetivo es resolver una especie de rompecabezas con 157 puntos y 157 líneas de forma que cada dos líneas interseccionen exactamente en un único punto.",
                    "Este rompecabezas queda sin resolver por ninguna matemática del mundo a día de hoy."
                ]
            },
            {
                tit: "Hipótesis de inducción en desigualdad",
                subt: "Investigación en matemáticas",
                parag: [
                    "Uno de los proyectos actuales",
                    String.raw`Un profe está estudiando toda la teoría matemática de las hipótesis de inducción en una regresión lineal y ha descubierto que la teoría sería casi la misma cuando la hipótesis no es una ecuación del tipo \[ H_0 : H\beta = c \] Sino este aspecto: \[ H_0 : H\beta \leq c \]`
                ]
                // run this command MathJax.Hub.Typeset() to update latex
            },
            {
                tit: "Otros proyectos",
                subt: "Incluyen",
                parag: [
                    "La predicción de la velocidad del viento en 3700 estaciones meteorológicas en Europa, usando el modelo físico del instituto meteorológico europeo ECMWF. Proyecto terminado. Se ha hecho adjusto estadístico de la predicción del modelo usando la técnica Random Forests de ML, y modelos avanzados de regresión llamados GAMLSS de R.",
                    "El estudio de la función generador de números aleatorios de Neiderreiter usada en criptología.",
                    "La creación de un modelo de Random Forests (en machine learning) que mantiene la eficacia y es más sencillo, a partir de la idea de usar múltiples variables para realizar cada ramificación.",
                    "Establecer una simbología adecuada para promover la escritura en base hexadecimal en sustitución del actual menos eficaz sistema decimal."
                ]
            }
        ]
    },
    pric: {
        tit: "Precios",
        subt: "Damos clases particulares, en grupo, presenciales y telemáticas. El precio que sale es por 1h de sesión.",
        joinbut: "Apúntate",
        unitz: "por clase",
        modz: [
            {
                tit:"Particular ESO",
                presen: "Presencial o telemática",
                afor: "1 solo alumno en clase",
                loc: "Si es presencial, será por la Sagrada Família 08013",
                temp:"1h de clase",
                niv: "ESO",
                pric: "€ 18"
            },
            {
                tit:"En grupo ESO",
                presen: "Presencial o telemática",
                afor: "4 alumnos máximo en la clase",
                loc: "Si es presencial, será por la Sagrada Família 08013",
                temp:"1h de clase",
                niv: "ESO",
                pric: "€ 10"
            },
            {
                tit:"Particular bachillerato",
                presen: "Presencial o telemática",
                afor: "1 solo alumno en clase",
                loc: "Si es presencial, será por la Sagrada Família 08013",
                temp:"1h de clase",
                niv: "Bachillerato",
                pric: "€ 20"
            },
            {
                tit:"En grupo bachillerato",
                presen: "Presencial o telemática",
                afor: "4 alumnos máximo en la clase",
                loc: "Si es presencial, será por la Sagrada Família 08013",
                temp:"1h de clase",
                niv: "Bachillerato",
                pric: "€ 15"
            },
            {
                tit:"Particular universidad",
                presen: "Presencial o telemática",
                afor: "1 solo alumno en clase",
                loc: "Si es presencial, será por la Sagrada Família 08013",
                temp:"1h de clase",
                niv: "Universidad",
                pric: "€ 25"
            },
            {
                tit:"En grupo Universidad",
                presen: "Presencial o telemática",
                afor: "4 alumnos máximo en la clase",
                loc: "Si es presencial, será por la Sagrada Família 08013",
                temp:"1h de clase",
                niv: "Universidad",
                pric: "€ 18"
            }
        ]
    },
    contac: {
        tit: "Contáctanos",
        adres: "Dirección",
        subt: "Llámanos, envíanos un Whatsapp o vente para hacer un té y hablar de lo que quieras.",
        loc: "Barcelona, ​​España",
        telf: "+34 611 648 478",
        email: "newmathematicalschool@gmail.com",
        form: {
            nomz: "Nombre",
            email: "Email",
            telf: "Teléfono",
            mesg: "Mensaje",
            rtick: "¡Me gusta!",
            env: "Enviar"
        }
    },
    
    folw: {
        tit: "Síguenos",
        creatd: "Creado por Romà"
    }
};







dicc["eng"] = {
    nav1: {
        menu1: "Team",
        menu2: {
          nomz: "Classes",
          sub1: "Idea",
          sub2: "Secondary Education",
          sub3: "High School",
          sub4: "University"
      },
        menu3: {
          nomz: "Prices",
          sub1: "Idea",
          sub2: "Secondary Education",
          sub3: "High School",
          sub4: "University"
      },
        menu4: "Contact",
        menu5: {
          nomz: "Projects",
          sub1: "Projective planes",
          sub2: "Inequality in HRL",
          sub3: "Others"
      },
        menu6: {
          nomz: "ENG",
          llen: ["Català",
              "Español",
              "English"]
      }
    },
    nav2: {
        tit: "browse"
    },
    parag1: {
          tit: "Teaching Perspective",
          text1: "The intention of the New Mathematical School is simple: to give the minimum of instructions to the student so that she is the one who finds the way. We do not want to be a traditional school where the student first listens, and then repeats some specific exercises."
      },
    parag2: {
          tit: "We want to do it in reverse:",
          text1: "We first want to listen to the student, what problem she wants to solve. Then we ask what ideas she has and from there we encourage her to explore the ones that we, as teachers or guides, know can solve the problem. The intention is that the students work and think for themselves, and are not limited to copying and repeating mechanically, as currently happens in almost all schools in Catalonia."
      },

    equipp: {
        tit: "OUR TEAM",
        subt: "Meet the team - the field workers",
        rolz: [ {
            pers: "Romà Masana",
            nomz: "Web Designer and Marketing",
            desc: ["Responsible for designing all Front-End and Back-end",
            "Aesthetic design of all school material, choose typography and colors",
                "Select photographs and drawings that appear throughout the material"]
            },
        
            {
            pers: "Romà Masana",
            nomz: "24/7 Support",
            desc: ["Attend emails, messages and calls"]
            },
            
            {
            pers: "Romà Masana",
            nomz: "Boss",
            desc: ["Responsible for managing all jobs",
            "Make the pricing decisions",
            "How to advertise and what kind of audience is sought",
            "He is ultimately responsible for whether the school is doing well or badly."]
            },
            
            {
            pers: "Romà Masana",
            nomz: "Teacher",
            desc: ["Graduate in mathematics at the UPC Barcelona, ​​degree thesis on the Schrödinger equation in the Hydrogen atom. Study in partial derivatives.",
                "Master's degree in mathematics at the Nijmegen Universiteit (Netherlands). Master's thesis : the calibration of a physical wind prediction model using statistics. In particular, non-parametric regression methods and machine learning.",
                "PhD in mathematics at IIT Chicago, USA (unfinished). Focused on Bayesian statistical methods and probability throbabieory.",
                "1 year of experience working as a Data Scientist at a Health Economics consultancy"],
            linkedin: "https://www.linkedin.com/in/rom%C3%A0-masana-61459411b"
            },
            
            {
            pers: "Shabnam Morakba",
            nomz: "Teacher",
            desc: ["My name is Shabnam, I graduated from the Universitat Politècnica de Catalunya with a Doctorate in Chemical Engineering. Since 2015 I have been living and working in Barcelona as an educator. I give private lessons in a wide range of academic subjects focused on mathematics, chemistry and physics for ESO and Baccalaureate. I have been teaching in public and international high schools in Barcelona. As a private tutor, I am very patient and believe in positive reinforcement. I like to establish a great relationship with a student from the beginning , which helps to personalize the study plan to work with the student's strengths and weaknesses. I am a good student, I love mathematics and I am passionate about history, literature. <it> Science knows no homeland, because knowledge it belongs to humanity, and it is the torch that illuminates the world</it>. Luis Pasteur"],
            linkedin: "https://www.linkedin.com/in/shabnam-morakabatchiankar-a7792260/"
            },
            
            {
            pers: "Ca'reen Govindasamy",
            nomz: "Teacher",
            desc: ["Graduate in Mathematics and Computer Science from the University of South Africa. Expert in mathematics and computing and specifically in Igcse Cambridge exams - Mathematics, Physics, Chemistry and Biology. I can also teach Python and other languages ​​without problems."],
            linkedin: "https://www.linkedin.com/in/ca-reen-govindasamy-1510a8138/"
            },
        
            {
            pers: "Marta Galló",
            nomz: "Teacher",
            desc: ["Estic estudiant actualment la carrera de Treball Social a la Universitat de Barcelona. Tinc una gran passió per les llengües i la filologia i em sento experta en aquest camp. Sóc esportista d'èlit i dono clases de llengua catalana, castellana i English."],
            linkedin: "https://www.linkedin.com/in/marta-gall%C3%B3-3a6a42236"
            },
        
            {
            pers: "Laiba Iqbal",
            nomz: "Teacher",
            desc: ["Physics student at the University of Barcelona. I have experience teaching physics and mathematics at secondary and high school."],
            linkedin: "https://www.linkedin.com/in/laiba-iqbal-kousar-b87317233/"
            },
            
            {
            pers: "Miquel Villalonga",
            nomz: "Teacher",
            desc: ["Graduate in the double degree of Mathematics and Business Administration and Management from the University of Barcelona. I have experience in giving private lessons in ESO, Baccalaureate and first years of University, especially Mathematics but also other subjects such as Economics , Accounting, Physics and Chemistry. As a teacher, I like to explain the doubts raised by my students so that they are not limited to solving the exercises mechanically. I also like to establish a close and trusting relationship with the student, and I have always loved the world of mathematics and teaching."],
            linkedin: "https://www.linkedin.com/in/miquel-villalonga-su%C3%B1er-bb03131a3"
            },
        
            {
            pers: "Alba Tacoronte",
            nomz: "Teacher",
            desc: ["Graduated in Physics from the University of Seville. I discovered a real passion for mathematics and how to teach it. I did a stay at the university of Gdańsk Poland. I worked as a programmer in a bank and currently I decided to focus my career as a professor at the Universitat Politècnica de Catalunya as Calculus for Telecommunications students."],
            linkedin: "https://www.linkedin.com/in/shabnam-morakabatchiankar-a7792260/"
            },
            
            {
            pers: "Gema Rojas",
            nomz: "Teacher",
            desc: ["My basic training is in basic and experimental biomedicine. Then I did a master's in bioinformatics and specialized in data science in the healthcare sector working in a private company. I am currently doing a PhD in biomedicine, with majoring in bioinformatics, and I am exploring the use of generative models and bioactivity descriptors for drug discovery and repurposing."],
            linkedin: "https://www.linkedin.com/in/gema-rojas-granado"
            }
        
        ]
        
    },

    projs: {
        tit: "Current projects",
        proj: [
            {
                tit: "Projective planes",
                subt: "Research in mathematics",
                parag: [
                    "Current project of one of our teachers",
                    "The goal is to solve a kind of puzzle with 157 points and 157 lines so that every two lines intersect at exactly one point.",
                    "This puzzle remains unsolved by any mathematician in the world to this day."
                ]
            },
            {
                tit: "Hypotheses of Induction in Inequality",
                subt: "Research in mathematics",
                parag: [
                    "One of the current projects",
                    String.raw`A professor is studying the entire mathematical theory of induction hypotheses in linear regression and has discovered that the theory would be almost the same when the hypothesis is not an equation of the type \[ H_0 : H\beta = c \] But this aspect: \[ H_0 : H\beta \leq c \]`
                ]
                // run this command MathJax.Hub.Typeset() to update latex
            },
            
            {
                tit: "Other projects",
                subt: "They include",
                parag: [
                    "The prediction of wind speed in 3700 weather stations in Europe, using the physical model of the European Meteorological Institute ECMWF. Project completed. Statistical adjustment of the model prediction has been made using the ML Random Forests technique, and advanced regression models called GAMLSS in R.",
                    "The study of the Neiderreiter random number generator function used in cryptology.",
                    "The creation of a Random Forests model (in machine learning) that maintains effectiveness and is simpler, based on the idea of ​​using multiple variables to make each branching.",
                    "Establish an appropriate symbology to promote hexadecimal writing in place of the current less effective decimal system."
                ]
            }
        ]
    },
    
    pric: {
        tit: "Prices",
        subt: "We give private, group, face-to-face and telematic lessons. The price that comes out is for 1 hour of session.",
        joinbut: "Join in",
        unitz: "per class",
        modz: [
            {
                tit:"Private ESO",
                presen: "Face-to-face or online",
                afor: "1 single student per class",
                loc: "If it is in person, it will be around the Sagrada Família 08013",
                temp:"1h of class",
                niv: "ESO",
                pric: "€ 18"
            },
            {
                tit:"In group ESO",
                presen: "Face-to-face or online",
                afor: "4 students maximum in the class",
                loc: "If it is in person, it will be around the Sagrada Família 08013",
                temp:"1h of class",
                niv: "ESO",
                pric: "€10"
            },
            {
                tit:"Private high school",
                presen: "Face-to-face or online",
                afor: "1 single student per class",
                loc: "If it is in person, it will be around the Sagrada Família 08013",
                temp:"1h of class",
                niv: "High School",
                pric: "€20"
            },
            {
                tit:"In high school group",
                presen: "Face-to-face or online",
                afor: "4 students maximum in the class",
                loc: "If it is in person, it will be around the Sagrada Família 08013",
                temp:"1h of class",
                niv: "High School",
                pric: "€15"
            },
            {
                tit: "Private University",
                presen: "Face-to-face or online",
                afor: "1 single student per class",
                loc: "If it is in person, it will be around the Sagrada Família 08013",
                temp:"1h of class",
                niv: "University",
                pric: "€25"
            },
            {
                tit: "in a University group",
                presen: "Face-to-face or online",
                afor: "4 students maximum in the class",
                loc: "If it is in person, it will be around the Sagrada Família 08013",
                temp:"1h of class",
                niv: "University",
                pric: "€18"
            }
        ]
    },
    
    contac: {
        tit: "Contact Us",
        adres: "Address",
        subt: "Call us, send us a Whatsapp or come for a cup of tea and talk about whatever you want.",
        loc: "Barcelona, ​​Spain",
        telf: "+34 611 648 478",
        email: "newmathematicalschool@gmail.com",
        form: {
            nomz: "Name",
            email: "Email",
            telf: "Phone",
            mesg: "Message",
            rtick: "I like!",
            env: "Send"
        }
    },
    
    folw: {
        tit: "Follow us",
        creatd: "Created by Romà"
    }
    
};
            

