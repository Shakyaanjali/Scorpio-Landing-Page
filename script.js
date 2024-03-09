
var header= document.getElementById("header");
            var ms= document.getElementById("Scorpio");
            var m3= document.getElementById("Fortuner");
            var mx= document.getElementById("Thar");
            var my= document.getElementById("Bolero");
            var model= document.getElementById("model");
            var mph= document.getElementById("mph");
            var speed= document.getElementById("speed");
            var range= document.getElementById("range");


            ms.onclick=function(){
                header.style.backgroundImage="url(https://images.hindustantimes.com/auto/img/2023/01/31/1600x900/Mahindra_Scorpio_Classic_1675145128326_1675145128462_1675145128462.jpg)";
                model.innerHTML="SCORPIO";
                mph.innerHTML="11s";
                speed.innerHTML="165 km/h";
                range.innerHTML="650 km";
            }

            
            m3.onclick=function(){
                header.style.backgroundImage="url(https://www.galaxytoyota.in/public/storage/946/power-to-enhance12.jpg)";
                model.innerHTML="FORTUNER";
                mph.innerHTML="11.2s";
                speed.innerHTML="190 km/h";
                range.innerHTML="600 km";
            }
            mx.onclick=function(){
                header.style.backgroundImage="url(https://stat.overdrive.in/wp-content/uploads/2023/01/Thar1-1-900x506.jpg)";
                model.innerHTML="THAR"
                mph.innerHTML="2.5s";
                speed.innerHTML="155 km/h";
                range.innerHTML="550 km";
            }
            my.onclick=function(){
                header.style.backgroundImage="url(https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra/Bolero/10754/1697696929365/front-left-side-47.jpg)";
                model.innerHTML="BOLERO";
                mph.innerHTML="30.3s";
                speed.innerHTML="117 km/h";
                range.innerHTML="520 km";
            }
