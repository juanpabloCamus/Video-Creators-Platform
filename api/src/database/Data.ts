import { randEmail, randFullName, randPassword, randImg } from '@ngneat/falso'
import { RegisterAuthDto } from 'src/auth/dto/register-auth.dto'
import { CreateVideoDto } from 'src/video/dto/video.dto'

export const UserData:RegisterAuthDto[] =  [
    {
        email:randEmail(),
        name:randFullName(),
        password:randPassword(),
        role:'Student',
        photo:randImg()
    },
    {
        email:randEmail(),
        name:randFullName(),
        password:randPassword(),
        role:'Teacher',
        photo:randImg()
    },
    {
        email:randEmail(),
        name:randFullName(),
        password:randPassword(),
        role:'Student',
        photo:randImg()
    },
    {
        email:randEmail(),
        name:randFullName(),
        password:randPassword(),
        role:'Student',
        photo:randImg()
    },
    {
        email:randEmail(),
        name:randFullName(),
        password:randPassword(),
        role:'Teacher',
        photo:randImg()
    },
]

export const VideoData = [
    {
        url: 'https://www.youtube.com/watch?v=Ht1wQJTpNAA',
        title: 'Lionel Messi Career Highlights',
        description: 'A tribute to my favorite athlete of all time.',
        poster:'https://ichef.bbci.co.uk/news/640/cpsprodpb/E5BA/production/_119801885_75007003-8391-44bf-8f65-c7a5ef8ee259.jpg',
        userId:1
    },
    {
        url: 'https://www.youtube.com/watch?v=jV0PbW8fJKk',
        title: 'Lionel Messi ● 12 Most LEGENDARY Moments ',
        description: 'Messi Plays That Will Not Be Repeated or Seen in Football Ever Again',
        poster:'https://fotos.perfil.com/2022/05/17/trim/950/534/messi-1358290.jpg',
        userId:1
    },
    {
        url: 'https://www.youtube.com/watch?v=h1-zQ0SSS6M',
        title: 'ASMR Programming - Coding Tetris',
        description: 'I made a tetris game with javascript and html canvas',
        poster:'https://images-na.ssl-images-amazon.com/images/I/61M3rDwh4qL.png',
        userId:1
    },
    {
        url: 'https://www.youtube.com/watch?v=RLqYvOSqhPk',
        title: 'Top 10 Places To Visit in Argentina',
        description: 'Buenos Aires is home to cobblestone boulevards, sensual tango halls, century-old cafes, and designer boutiques.',
        poster:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1200px-Flag_of_Argentina.svg.png',
        userId:2
    },
    {
        url: 'https://www.youtube.com/watch?v=FuzMu1CdE0I',
        title: '"NICARAGUA" Top 47 Tourist Places ',
        description: 'A country in Central America',
        poster:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Nicaragua.svg/1200px-Flag_of_Nicaragua.svg.png',
        userId:2
    },
    {
        url: 'https://www.youtube.com/watch?v=ZvorMuMyoFM',
        title: 'https://www.youtube.com/watch?v=ZvorMuMyoFM',
        description: '',
        poster:'',
        userId:3
    },
    {
        url: 'https://www.youtube.com/watch?v=ogkUxSmv83M',
        title: 'Así es el Barrio MÁS "PELIGROSO" de Nueva York',
        description: 'Bronx',
        poster:'https://cdn2.civitatis.com/estados-unidos/nueva-york/guia/brooklyn-grid-m.jpg',
        userId:3
    },
    {
        url: 'https://www.youtube.com/watch?v=5l4E55rVtHo',
        title: 'Cómo Invertir En Criptomonedas | Paso a Paso Para Principiantes En 2022',
        description: 'Cómo Invertir En Criptomonedas',
        poster:'https://www.clarin.com/img/2022/05/09/el-bitcoin-cayo-11-este___pGTlE7PVK_340x340__1.jpg',
        userId:3
    },
    {
        url: '',
        title: '',
        description: '',
        poster:'',
        userId:4
    },
    {
        url: 'https://www.youtube.com/watch?v=Dz0rO9QEa3E',
        title: '¿CUANTO CUESTA HACER MERCADO EN ESTADOS UNIDOS EN 2022? ',
        description: 'Fuimos hasta un Walmart en Miami, Florida para comprobar los precios actuales de hacer mercado en Estados Unidos.',
        poster:'https://www.dossierweb.com.ar/wp-content/uploads/2022/04/alnavio.es_fotos_1_mercadobrasil.jpg',
        userId:5
    },
    {
        url: 'https://www.youtube.com/watch?v=ldOeFXvmjPA',
        title: 'Visitando la CIUDAD MÁS FRÍA del Mundo (-71°C) YAKUTSK / YAKUTIA',
        description: 'Vine a la ciudad más fría del planeta, Yakutsk, que se encuentra en Yakutia (territorio Ruso en Siberia). ',
        poster:'https://static3.elcorreo.com/www/multimedia/202101/13/media/cortadas/frio-kVYB-U130207975449WbF-624x385@RC.jpg',
        userId:5
    },

]