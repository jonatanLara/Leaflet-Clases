const lugares = [
    //puertas
    {
        nombre: 'Puerta de Tierra',
        coordenada: [19.841408970183075, -90.53604292708258],
        image: "https://turismocampeche.com/wp-content/uploads/2020/01/puerta-de-tierra-5-1030x579.jpg",
        info: "Fue construida en 1732 por Don Antonio de Figueroa y Silva. Se encuentra entre el baluarte de San Francisco y San Juan. Posee una enorme bóveda con dos habitaciones para el cuerpo de guardia y el cuarto de oficial. Sobre la bóveda se encuentra una pequeña plaza de armas con 8 cañoneras. En la parte superior de la puerta podemos apreciar una matacaspa o saratana. Para la defensa de la puerta con granadas y fuego de artillería, tiene un espacio para el descenso y ascenso del rastrillo."
    },

    {
        nombre: 'Puerta de San Román',
        coordenada: [19.842811305453484, -90.54052415725467],
        image: "https://www.informador.mx/__export/1506061929549/sites/elinformador/img/historico/2/1005153.jpg_554688468.jpg",
        info: "Según la historia señala que la Puerta de San Román se ubicaba entre el baluarte de Santa Rosa y el de San Carlos, aproximadamente a la mitad; era de madera de jabín, con fajas de hierro y poseía un revellín formado por un simple parapeto con su estacada y un rastrillo, o verja levadiza. En su interior había un pequeño cuerpo de guardia.  "
    },
    { 
        nombre: 'Puerta de Mar', 
        coordenada: [19.84584253355944, -90.5384466442381],
        image: "https://turismocampeche.com/wp-content/uploads/2020/01/puerta-de-mar-1-1030x579.jpg", 
        info: "Se ubica en las actuales calle 8 y calle 59. Se acabó de construir en 1710, por Don Jaime Franck. Fue la entrada y salida de la ciudad para quienes llegaban por barco, único medio de comunicación internacional de la península. Para protegerla, estaba ubicada entre los baluartes de la Soledad y San Carlos. Daba paso al muelle, que era corto y angosto. Carecía de foso y de revellín. Originalmente estaba hecha con cantera y sascab. Fue el primer acceso construido y el primero en ser destruido, en 1893, por órdenes del coronel Fernando Laphman, junto con parte de la muralla.    " 
    },
    { 
        nombre: 'Puerta de Guadalupe', 
        coordenada: [19.84626674535278, -90.53342605575956],
        image: "", 
        info: "La puerta de Guadalupe fue la tercera en construirse. Como la de San Román, facilitó el acceso al barrio que lleva su nombre. Está misma se encontró situada a la mitad entre los baluartes de Santiago y San José." 
    },
    //baluartes
    { 
        nombre: 'Baluarte de la Soledad', 
        coordenada: [19.84646932491163, -90.53773498928604],
        image: "https://turismocampeche.com/wp-content/uploads/2020/01/baluarte-de-la-soledad-12-1030x579.jpg", 
        info: "El Baluarte de Nuestra Señora de la Soledad, fue construido a fines del siglo XVII y es el más grande de los ocho baluartes que forman parte de la muralla edificada para defender la villa de San Francisco de Campeche contra los piratas. La construcción del inmueble concluyó en 1692 y se bautizó con el nombre de la Virgen de la Soledad, la protectora de los marinos. En 1999, la ciudad de Campeche, fue designada como Patrimonio Cultural de la Humanidad, por la Unesco, con el título de “Ciudad Histórica Fortificada." 
    },
    {

        nombre: 'Baluarte de Santiago', 
        coordenada: [19.847903730938807, -90.53507345714438],
        image: "https://i0.wp.com/www.turimexico.com/wp-content/uploads/2015/05/baluarte-de-santiago.jpg?fit=4320%2C3240&ssl=1", 
        info: "El original Baluarte de Santiago, fue demolido y su lugar lo ocupa una reconstrucción del mismo. Fue similar al de San Carlos. Era terraplenado. El acceso se conseguía a través de una rampa que iba paralela a la muralla. Su explanada era de hormigón. La cara que miraba hacia el mar tenía un parapeto, es decir, un pequeño muro completamente liso, para disparar fuego rasante. No poseía más alojamientos que 3 bóvedas en los arcos. Una servía como almacén de balas y las otras dos para el abrigo del cuerpo de guardias. El cuartel de infantería de castilla, se encontraba al frente del baluarte y sus paredes cerraban el baluarte." 
    },
    {

        nombre: 'Baluarte de San José', 
        coordenada: [19.845263169698008, -90.53296458718452],
        image: "https://patrimonioculturalyturismo.cultura.gob.mx/guias/images_guia4/baluarte_san_pedro.jpg", 
        info: "" 
    },
    { 
        nombre: 'Baluarte de San Pedro', 
        coordenada: [19.843241502394505, -90.53262070905824],
        image: "https://a.travel-assets.com/findyours-php/viewfinder/images/res40/245000/245402-Campeche.jpg", 
        info: "El acceso al Baluarte de San Pedro, es través de una puerta ubicada frente al templo San Juan de Dios, esta entrada comunica al patio o gola, una rampa lleva a la parte superior. Además de su función como defensa de la Villa, fungió como prisión de la Santa Inquisición, en los tiempos de la Colonia, a la entrada de este recinto se observa el escudo de armas del Vaticano: las llaves del cielo y la tiara papal." 
    },
    { 
        nombre: 'Baluarte de San Francisco', 
        coordenada: [19.841751482957243, -90.53529975260933],
        image: "https://i0.wp.com/www.turimexico.com/wp-content/uploads/2015/05/sanf.jpg?fit=1024%2C768&ssl=1", 
        info: `Al igual que el baluarte de San Juan, el baluarte de San Francisco custodiaba la Puerta de Tierra en su lateral izquierdo y se une a ésta a través del paso de ronda. En la parte superior de sus muros se observan troneras que sirvieron para disparar cañones en contra de los piratas. Del patio central surge una escalera con rampa para acceder a la azotea.

        Esta obra fue la segunda en dimensión de los ocho baluartes construidos. Actualmente, alberga en su interior un auditorio en donde se realizan diversas actividades culturales.
        ` 
    },
    { 
        nombre: 'Baluarte de San Juan', 
        coordenada: [19.84038855360481, -90.53793286952659],
        image: "https://www.informador.mx/__export/1506061929549/sites/elinformador/img/historico/2/1005153.jpg_554688468.jpg", 
        info: "El Baluarte de San Juan, fue construido en 1698, como sistema defensivo de apoyo a la Puerta de Tierra, al igual que todos los baluartes y puertas, estaban conectados y comunicados a través del paso de ronda que circundaba la Villa de San Francisco de Campeche. Sus muros son gruesos y sus cuatro esquinas están coronadas por garitones. En el lado sur de la azotea todavía se conserva una campana original que servía para alertar a la población en caso de peligro." 
    },
    { 
        nombre: 'Baluarte de Santa Rosa', 
        coordenada: [19.841719589095483, -90.54048545883157],
        image: "https://turismocampeche.com/wp-content/uploads/2020/01/baluarte-de-santa-rosa-1-1030x579.jpg", 
        info: "El baluarte de Santa Rosa, fue construido a finales del silgo XVIII y fue el segundo en construirse para la protección en contra de los ataques de piratas. Posee un patio interior que se encuentra rodeado por un muro y cuenta con una rampa que permite llegar a la explanada superior. La rampa, los merlones y las banquetas son de sillería; sus cuartos funcionaron como cuerpo de guardia, como almacén de pólvora y de municiones, también tiene un aljibe. A un costado de este baluarte existió la llamada “Puerta de San Román”, que sirvió de defensa a la villa del pirata Barbillas en 1704." 
    },
    { 
        nombre: 'Baluarte de San Carlos', 
        coordenada: [19.84466287208201, -90.54068413000225],
        image: "https://turismocampeche.com/wp-content/uploads/2020/01/baluarte-de-san-carlos-2-1030x579.jpg", 
        info: `
        El Baluarte de San Carlos, fue el primero en ser construido como parte del sistema fortificado de San Francisco de Campeche. Al igual que los otros baluartes presenta una forma pentagonal. Su entrada principal es por medio de una rampa situada del lado de la calle 8.
        
        El nombre de este baluarte fue dado en honor al rey Carlos II.
        
        Posee un sótano con dos habitaciones que fungían como cuartos de pólvora o como cárcel.
        ` 
    },
    //fuertes
    {
        nombre: 'Fuerte de San Miguel',
        coordenada: [19.825419983491006, -90.56884187222737],
        image: "https://www.inah.gob.mx/images/museos/campeche/fuertedesanmiguel/20220811_mu_fuertedesanmiguel_head.jpg",
        info: `Este inmueble es un ejemplo significativo de la Arquitectura militar de Campeche fue utilizado principalmente en las luchas en las que se vio inmersa la ciudad de Campeche a lo largo del siglo XIX. En la actualidad se exhibe Arqueología Maya de Campeche que exhibe piezas de diferentes ciudades mayas destacando las de Calakmul.`
    },
    { 
        nombre: 'Fuerte de San José', 
        coordenada: [19.860792396105467, -90.50949279669472],
        image: "https://puntomedio.mx/wp-content/uploads/2021/07/PM_14_3COLBYN_MUSEO.jpeg", 
        info: `El reducto de San José el Alto fue construido a fines del siglo XVIII, según una inscripción que aún se aprecia en su fachada que dice que se concluyó el 9 de agosto de 1792. Esta obra se debe al Teniente de Rey, don José Sabido de Vargas, que ocupó el cargo entre 1784 y 1793. Años después, se observa este reducto a través de un plano elaborado en 1799 por Juan José de León, en donde se determina que su superficie es de 1,828.79 metros.

        San José el Alto fue levantado sobre el cerro que era conocido como de la Vigía Vieja, puesto de observación al que seguramente sustituyó. También es conocido popularmente como el “Castillo de las Tres Piedras” en alusión a las tres grandes lajas que se encuentran a un costado de la fuerza, hoy cubiertas en gran parte por el paso del tiempo.` 
    },

]
