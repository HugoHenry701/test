let money = 12345678999999;
let m = money.toString();
    console.log(m);
// for (let index = 0; index < m.length; index++) {
    
//  if( index % 3 == 0){
//      m = m.replace(m.charAt())
//  }
//  if (index == m.length){
//     break;
//  }
//  console.log(m);
    
// }
function formatnumber(){
    return m.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') +  "vnd"
}
console.log(formatnumber())
