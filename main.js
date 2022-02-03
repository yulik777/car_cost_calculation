
  function calculateForm() {
     let select =document.getElementsByClassName('modelAvto');
     let price1 = select[0].value;
 
   
     let godVupuska = document.getElementById('year').value;
     let price2;
   
    
      if (godVupuska>=2015){
      price2 = 2000;
      }else {
     price2 = 1000; }
    
    
     const kpp = document.getElementsByName('KPP');
     for (i=0; i<kpp.length; i++){
     if (kpp[i].checked){
     price3 = kpp[i].value;}}
    
 
     const tipKuzova = document.getElementsByName('tipKuzova');
     for (i=0; i<tipKuzova.length; i++){
     if (tipKuzova[i].checked){
     price5 = tipKuzova[i].value;}
 }
     const toplivo = document.getElementsByName('toplivo');
     for (i=0; i<toplivo.length; i++){
     if (toplivo[i].checked){
     price4 = toplivo[i].value; }
     }
    
     let result = document.getElementById('result');
     result = Number(price1)+ Number(price2) + Number(price3) + Number(price4) + Number(price5) ;
     document.getElementById('result').innerHTML = result;
     }
   
