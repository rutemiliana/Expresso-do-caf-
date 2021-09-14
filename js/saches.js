
var dolce = ['Dolce Gusto', 'Caixa 16 capsulas','"img/CapsulaDulceGusto.jpg"','Expresso 96g - R$ 24,00', '"img/CapsulaDulceGustoDescafeinado.jpg"','Descafeinado 96g - R$ 21,00'];
        var senseo = ['Senseo', '18 sachês','"img/Senseo_Classico.jpg"','Clássico 120g - R$ 14,00', '"img/SenseoIntenso.jpg"','Intenso 120g - R$ 14,00'];
        var nespresso = ['Nespresso', '18 sachês','"img/NespressoLivanto.png"','Livanto - R$ 35,00', '"img/NespressoRistretto.png"', 'Ristretto - R$ 42,00', '"img/NespressoVanilio.png"', 'Vanilio - R$ 46,00',];
         
         var  caixa = document.getElementById("popup");
         var fundo = document.getElementsByClassName("saches");

         document.getElementById("nespresso").onclick = function () {   
            caixa.style.display = "block";
             caixa.innerHTML = "<h2>"+ nespresso[0] + "</h2>"+ "<p>"+ nespresso[1] + "</p>" +"<ul><img src="+nespresso[2] + " id ='thumb' class='thumb'/>" + "<li>" +  nespresso[3] + "</li>" +"<img src=" +nespresso[4] + "id ='thumb' class='thumb'/><li>" + nespresso[5] +  "</li>" +"<img src=" +nespresso[6] + " id ='thumb' class='thumb'/><li>" + nespresso[7] + "</li></ul> <button  onclick ='fechar()' type='button' id='fechar'>Fechar</button>" ;
        }

         document.getElementById("dolce").onclick = function () {  
                caixa.style.display = "block";
                caixa.innerHTML = "<h2>"+ dolce[0] + "</h2>"+ "<p>"+ dolce[1] + "</p>" +"<ul><img src="+dolce[2] + "class='thumb'/>" + "<li>" +  dolce[3] + "</li>" +"<img src=" +dolce[4] + "class='thumb'/><li>" + dolce[5] + "</li></ul> <button  onclick ='fechar()' type='button' id='fechar'>Fechar</button>" ;

               
        }

        document.getElementById("senseo").onclick = function () {   
            caixa.style.display = "block";
             caixa.innerHTML = "<h2>"+ senseo[0] + "</h2>"+ "<p>"+ senseo[1] + "</p>" +"<ul><img src="+senseo[2] + "class='thumb'/>" + "<li>" +  senseo[3] + "</li>" +"<img src=" +senseo[4] + "class='thumb'/><li>" + senseo[5] + "</li></ul> <button  onclick ='fechar()' type='button' id='fechar'>Fechar</button>" ;
        }

       


             function fechar() {
                
                caixa.style.display = "none";               
                
            }