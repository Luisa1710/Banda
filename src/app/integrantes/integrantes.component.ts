import { Component, OnInit } from '@angular/core';
import { IntegrantesBanda } from '../interfaces/integrantes-banda'; 
@Component({
  selector: 'app-integrantes',
  templateUrl: './integrantes.component.html',
  styleUrls: ['./integrantes.component.css']
})
export class IntegrantesComponent  {

  integrantesBanda:IntegrantesBanda []=[
   {
    "foto":"https://firebasestorage.googleapis.com/v0/b/banda-63ab1.appspot.com/o/freddy.jpg?alt=media&token=f2aba764-e213-46d0-9c86-c54d5d06032d",
    "nombre": "Freddie Mercury",
    "edad": 45,
    "fechaNacimiento":"1946-09-05",
    "fechaFallecimiento": "1991-11-24",
    "biografia":"Vocalista, músico y compositor que fue conocido a escala internacional como líder de Queen, banda de rock británica que gozó de un éxito abrumador durante los 70 y los 80, tomando el relevo de grupos míticos como The Beatles y los Rolling Stones."

   },
   {
    "foto":"https://firebasestorage.googleapis.com/v0/b/banda-63ab1.appspot.com/o/roger%20taylor.jpg?alt=media&token=b46a1d5d-1fb7-4bf6-87f1-e1d5e4a94feb",
    "nombre": "Roger Taylor",
    "edad": 73,
    "fechaNacimiento":"1949-07-26",
    "fechaFallecimiento": "Vivo",
    "biografia":"Es un músico, compositor, multiinstrumentista y productor cinematográfico2​ británico. En algunas canciones como solista actuó como guitarrista y vocalista. Ha escrito canciones famosas de Queen como Sheer Heart Attack, I'm In Love With My Car, Radio Ga Ga o A Kind of Magic. También escribió otras como Breakthru o Innuendo junto con Freddie Mercury."

   },
   {
    "foto":"https://firebasestorage.googleapis.com/v0/b/banda-63ab1.appspot.com/o/brian%20may.jpg?alt=media&token=084a44ec-4bd8-43ae-8662-862626c9af76",
    "nombre": "Brian May",
    "edad": 75,
    "fechaNacimiento":"1947-07-19",
    "fechaFallecimiento": "Vivo",
    "biografia":"Es considerado uno de los guitarristas más importantes y originales de la música popular.​ En 2003 y 2011 la revista Rolling Stone lo ubicó en el puesto 26 de su lista de los guitarristas más grandes de todos los tiempos.​ En 2005 una entrevista de Planet Rock lo ubicó como el puesto 7 de los mejores guitarristas.​En 2020 fue elegido como el mejor guitarrista de todos los tiempos por los lectores de la revista Total guitar."

   },
   {
    "foto":"https://firebasestorage.googleapis.com/v0/b/banda-63ab1.appspot.com/o/john%20deacon.webp?alt=media&token=d6a868d7-546b-4abe-af4f-ffb7ab25a13c",
    "nombre": "John Deacon",
    "edad": 71,
    "fechaNacimiento":"1951-09-19",
    "fechaFallecimiento": "Vivo",
    "biografia":"es un músico y compositor británico retirado, conocido por haber sido el bajista del grupo musical de rock Queen. En varios álbumes también desempeñó el papel de guitarrista y más ocasionalmente de teclista. Es el autor de algunos de los grandes éxitos de la banda, tales como «You're My Best Friend», «Spread Your Wings», «Another One Bites the Dust», «I Want to Break Free» o «Friends Will Be Friends», lo que demuestra su importante aporte al grupo en materia creativa. Considerado como uno de los bajistas más versátiles de la historia del rock, la revista Rolling Stone lo colocó en el puesto 32 en su lista de los 100 mejores bajistas de la historia."

   }

  ]

  constructor() { }

 

}
