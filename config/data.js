// Equipos
let teams = {
    cai: {
        name: 'Independiente de Cosquín',
        alias:  'CAI',
        dt: {
            lname: 'Viva',
            fname: 'Pablo',
        },
    },
    tsc: {
        name: 'Chelcas',
        alias:  'TSC',
        dt: {
            lname: 'Frid',
            fname: 'Danilo Ronán',
        },
    },
    hc: {
        name: 'Hindú Club',
        alias:  'HC',
        dt: {
            lname: 'LOPEZ',
            fname: 'ARIEL GERMAN',
        },
    },
    pl: {
        name: 'Poeta Lugones',
        alias:  'PL',
        dt: {
            lname: 'DALLA RIVA',
            fname: 'GUSTAVO DAVID',
        },
    },
};


// Jugadoras
let players = {
    'player01':{team:teams.cai,lname:'Alabart',fname:'Eugenia',shirt:null,height:null,foto:'media/img/cai/jugadora-4.jpeg',},
    'player02':{team:teams.cai,lname:'Astray',fname:'Laura',shirt:null,height:null,foto:'media/img/cai/jugadora-5.jpeg',},
    'player03':{team:teams.cai,lname:'Astray',fname:'Noelia',shirt:null,height:null,foto:'media/img/cai/jugadora-6.jpeg',},
    'player04':{team:teams.cai,lname:'Borri',fname:'Soledad',shirt:null,height:null,foto:'media/img/cai/jugadora-7.jpeg',},
    'player05':{team:teams.cai,lname:'Fernandez',fname:'Belén',shirt:null,height:null,foto:'media/img/cai/jugadora-8.jpeg',},
    'player06':{team:teams.cai,lname:'Garcia',fname:'Ana Laura',shirt:null,height:null,foto:'media/img/cai/jugadora-9.jpeg',},
    'player07':{team:teams.cai,lname:'Garmendia',fname:'Noelia',shirt:null,height:null,foto:'media/img/cai/jugadora-10.jpeg',},
    'player08':{team:teams.cai,lname:'Godoy',fname:'Natalia',shirt:null,height:null,foto:'media/img/cai/jugadora-11.jpeg',},
    'player09':{team:teams.cai,lname:'Guzman',fname:'Silvina',shirt:null,height:null,foto:'media/img/cai/jugadora-12.jpeg',},
    'player10':{team:teams.cai,lname:'Sanchez',fname:'Lorena',shirt:null,height:null,foto:'media/img/cai/jugadora-13.jpeg',},
    'player11':{team:teams.cai,lname:'Vilchez',fname:'Melisa',shirt:null,height:null,foto:'media/img/cai/jugadora-14.jpeg',},
    'player12':{team:teams.cai,lname:'Vitullo',fname:'Natalia',shirt:null,height:null,foto:'media/img/cai/jugadora-15.jpeg',},
    'player13':{team:teams.cai,lname:'Zamboni',fname:'Belén',shirt:null,height:null,foto:'media/img/cai/jugadora-nn.jpg',},
    'player14':{team:teams.tsc,lname:'GAZULLA',fname:'LINIANA INES',shirt:14,height:1.70,foto:'media/img/chelcas/jugadora-14.jpeg',},
    'player15':{team:teams.tsc,lname:'VALLE',fname:'SANDRA MARIEL',shirt:9,height:1.65,foto:'media/img/chelcas/jugadora-9.jpeg',},
    'player16':{team:teams.tsc,lname:'CHARLIER',fname:'MARIA PATRICIA',shirt:8,height:1.58,foto:'media/img/chelcas/jugadora-8.jpeg',},
    'player17':{team:teams.tsc,lname:'KARLEN SANTILLAN',fname:'MICAELA PAULA',shirt:null,height:1.61,foto:'media/img/chelcas/jugadora-nn.jpg',},
    'player18':{team:teams.tsc,lname:'ARIAS',fname:'MARIA EMILIA',shirt:84,height:1.57,foto:'media/img/chelcas/jugadora-84.jpeg',},
    'player19':{team:teams.tsc,lname:'FERNANDEZ',fname:'MARIA',shirt:20,height:1.52,foto:'media/img/chelcas/jugadora-20.jpeg',},
    'player20':{team:teams.tsc,lname:'BORTOLI',fname:'MARIA LAURA',shirt:null,height:1.70,foto:'media/img/chelcas/jugadora-nn.jpg',},
    'player21':{team:teams.tsc,lname:'AVILA',fname:'ANDREA CONSTANZA',shirt:5,height:1.50,foto:'media/img/chelcas/jugadora-5.jpeg',},
    'player22':{team:teams.tsc,lname:'BARRETO',fname:'MERCEDES VALERIA',shirt:6,height:1.60,foto:'media/img/chelcas/jugadora-6.jpeg',},
    'player23':{team:teams.tsc,lname:'LEDESMA',fname:'ANABEL ANDREA',shirt:null,height:1.67,foto:'media/img/chelcas/jugadora-nn.jpg',},
    'player24':{team:teams.tsc,lname:'BERRA',fname:'AYLEN DANIELA',shirt:null,height:1.70,foto:'media/img/chelcas/jugadora-nn.jpg',},
    'player25':{team:teams.tsc,lname:'ARIAS',fname:'YANINA IVANA',shirt:null,height:null,foto:'media/img/chelcas/jugadora-nn.jpg',},
    'player26':{team:teams.hc,lname:'TORAL',fname:'MARIA MACARENA',shirt:14,height:1.68,foto:'media/img/hindu/jugadora-14.jpeg',},
    'player27':{team:teams.hc,lname:'NATALI',fname:'ALICIA',shirt:10,height:1.75,foto:'media/img/hindu/jugadora-10.jpeg',},
    'player28':{team:teams.hc,lname:'CAGNOLO',fname:'CARLA VERONICA',shirt:15,height:1.58,foto:'media/img/hindu/jugadora-15.jpeg',},
    'player29':{team:teams.hc,lname:'ZABALA',fname:'MARIA LAURA',shirt:8,height:1.63,foto:'media/img/hindu/jugadora-nn.jpg',},
    'player30':{team:teams.hc,lname:'MORENO',fname:'JULIETA VANESA',shirt:6,height:1.72,foto:'media/img/hindu/jugadora-6.jpeg',},
    'player31':{team:teams.hc,lname:'CIA',fname:'ANA LAURA',shirt:4,height:1.73,foto:'media/img/hindu/jugadora-4.jpeg',},
    'player32':{team:teams.hc,lname:'CASANOVA',fname:'INES ELIZABETH',shirt:11,height:1.69,foto:'media/img/hindu/jugadora-11.jpeg',},
    'player33':{team:teams.hc,lname:'ARTAZA',fname:'YUDITH',shirt:7,height:1.64,foto:'media/img/hindu/jugadora-nn.jpg',},
    'player34':{team:teams.hc,lname:'BRITOS',fname:'MARIA LUZ',shirt:13,height:1.74,foto:'media/img/hindu/jugadora-13.jpeg',},
    'player35':{team:teams.hc,lname:'GARCIA',fname:'NATALIA',shirt:12,height:1.56,foto:'media/img/hindu/jugadora-12.jpeg',},
    'player36':{team:teams.hc,lname:'HERNANDEZ',fname:'MARIELA CRISTINA',shirt:9,height:1.63,foto:'media/img/hindu/jugadora-9.jpeg',},
    'player37':{team:teams.hc,lname:'SINTORA',fname:'MARIA SOL',shirt:5,height:1.66,foto:'media/img/hindu/jugadora-nn.jpg',},
    'player38':{team:teams.hc,lname:'SANRRAME',fname:'NOELIA',shirt:null,height:1.63,foto:'media/img/hindu/jugadora-nn.jpg',},
    'player39':{team:teams.hc,lname:'CORONEL',fname:'CONSUELO',shirt:null,height:1.69,foto:'media/img/hindu/jugadora-nn.jpg',},
    'player40':{team:teams.pl,lname:'Moyano',fname:'Carolina Evelin',shirt:0,height:1.66,foto:'media/img/poeta/jugadora-0.jpeg',},
    'player41':{team:teams.pl,lname:'Ahumada',fname:'Claudia Elizabeth',shirt:5,height:1.70,foto:'media/img/poeta/jugadora-5.jpeg',},
    'player42':{team:teams.pl,lname:'Choque',fname:'Leonor Marcela Luján',shirt:9,height:1.57,foto:'media/img/poeta/jugadora-9.jpeg',},
    'player43':{team:teams.pl,lname:'Rivero',fname:'Yanina Alejandra',shirt:14,height:1.74,foto:'media/img/poeta/jugadora-14.jpeg',},
    'player44':{team:teams.pl,lname:'Aurispa',fname:'Maria Florencia',shirt:17,height:1.60,foto:'media/img/poeta/jugadora-17.jpeg',},
    'player45':{team:teams.pl,lname:'González',fname:'María Inés',shirt:16,height:null,foto:'media/img/poeta/jugadora-16.jpeg',},
    'player46':{team:teams.pl,lname:'Zarranz',fname:'Agostina',shirt:10,height:1.70,foto:'media/img/poeta/jugadora-nn.jpg',},
    'player47':{team:teams.pl,lname:'Juárez',fname:'Natalia Vanessa',shirt:22,height:1.73,foto:'media/img/poeta/jugadora-22.jpeg',},
    'player48':{team:teams.pl,lname:'Donda', fname:'Paula',shirt:24,height:1.58,foto:'media/img/poeta/jugadora-24.jpeg',},
    'player49':{team:teams.pl,lname:'Bustos',fname:'Gabriela',shirt:46,height:1.68,foto:'media/img/poeta/jugadora-nn.jpg',},
    'player50':{team:teams.pl,lname:'Bertola',fname:'Melisa',shirt:32,height:null,foto:'media/img/poeta/jugadora-nn.jpg',},
};
