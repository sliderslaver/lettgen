function tema1(){
    document.getElementById("tema1").href="2.css";
    document.getElementById("bottone").onclick = function () { tema2(); };
    document.getElementById("bottone").textContent="2";
}
function tema2(){
    document.getElementById("tema1").href="3.css";
    document.getElementById("bottone").onclick = function () { tema3(); };
    document.getElementById("bottone").textContent="3";
    
}
function tema3(){
    document.getElementById("tema1").href="1.css";
    document.getElementById("bottone").onclick = function () { tema1(); };
    document.getElementById("bottone").textContent="1";
    
}
document.addEventListener('DOMContentLoaded', function() {

    showText("#msg", "Spettabile azienda, con la presente gradirei mostrarvi il mio interesse nel lavorare con voi, ritenendo di condividere le stesse passioni con la vostra azienda. Sin dai primi anni sono sempre stato appassionato in ciò che riguarda la programmazione e mi dilettavo molto spesso nella creazione basilare di qualcosa, un esempio sono dei giochi sviluppati tramite un software di nome 'rpgmaker' che sfrutta un linguaggio di programmazione semplificato del c++. Ho tanta voglia di fare e di mettermi in gioco, mi piacciono le sfide e trovo ancora più eccitante trovare il modo di portarle a termine. Nonostante qualche piccolo problema riscontrato in ciò che creavo non mi sono mai abbattuto ed ho sempre trovato una soluzione alternativa che portasse allo stesso risultato, per me è importante lasciare il segno e quindi impegnarmi a fondo per far si che ogni mio progetto dia soddisfazione. Vista la mia voglia di crescere insieme a voi e in attesa di un vostro riscontro, vi porgo i miei più cordiali saluti.", 0, 50);

});

let showText = function (target, message, index, interval) {
    if (index < message.length) {
        document.querySelector(target).innerHTML =
            document.querySelector(target).innerHTML + message[index++];
        setTimeout(function () { showText(target, message, index, interval); }, interval);
    }
}
