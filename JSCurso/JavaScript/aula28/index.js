const data = new Date('2003-10-30 13:00:00');
const diaSemana = data.getDay();


function getDiaSemanaTexto ( diaSemana){
    let diaSemanaTexto;

    switch(diaSemana){
    case 0:
        diaSemanaTexto = 'Domingo';
        return diaSemanaTexto;
     case 4:  
        diaSemanaTexto = 'Quinta';
         return diaSemanaTexto;
    }
    
}
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

console.log(diaSemana, diaSemanaTexto);

