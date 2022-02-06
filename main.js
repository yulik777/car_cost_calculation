
  function calculateForm() {
     let select =document.getElementsByClassName('modelAvto');
     let price1 = select[0].value;
 
     //return console.log(price1);
     let godVupuska = document.getElementById('year').value;
     let price2;
     //return console.log(godVupuska);
      if (godVupuska>=2015){
      price2 = 2000;
      }else {
     price2 = 1000; }
       //console.log(price2);}
     // return console.log(price1);
     const kpp = document.getElementsByName('KPP');
     for (i=0; i<kpp.length; i++){
     if (kpp[i].checked){
     price3 = kpp[i].value;}}
     //console.log(price3);
 
     const tipKuzova = document.getElementsByName('tipKuzova');
      //console.log (tipKuzova);
     for (i=0; i<tipKuzova.length; i++){
     if (tipKuzova[i].checked){
     price5 = tipKuzova[i].value;}
     //console.log(price5);
 }
     const toplivo = document.getElementsByName('toplivo');
     //console.log(toplivo);
     for (i=0; i<toplivo.length; i++){
     if (toplivo[i].checked){
     price4 = toplivo[i].value; }
     //console.log(price4);
     }
     let result = document.getElementById('result');
     result = Number(price1)+ Number(price2) + Number(price3) + Number(price4) + Number(price5) ;
      //console.log(result);
     document.getElementById('result').innerHTML = result;
     }
   