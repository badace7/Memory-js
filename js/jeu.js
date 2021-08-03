

//FICHIER JS JEU MEMORY






// DON'T TOUCH.
let tab = [];
let J;
let ch;
let image;
let image1src;
let image2src;
let premiereImage;
let essai = 0;
let paire = 0;

$('#idNbrEssai, #idNbrPaire').attr("disabled", true);


// Génére un nombre aléatoire entre 0 et 15.
function rand() {
        
        let min = 0;
        let max = 15;
        let calcul = Math.round(Math.random() * (max - min) + min);
        return calcul;
    }




//Crée un tableau constitué des urls.
function chargerPaires() {
  $('#container').html("");
      
    ch = $('#idChoix').val();
    
    
    
    for(i=0;i<8;i++) {
      
      tab[i] = "images/paires" + ch +  "/" + (i+1) + ".jpg";
      tab[i+8] = "images/paires" + ch +  "/" + (i+1) + ".jpg";
  
    }
    
    
}


// Mélange le tableau.
function brasserPaires() {
  
  let k;
  
    for(i=0;i<16;i++) {
      j = rand();
      
      
      k = tab[i];
      tab[i] = tab[j];
      tab[j] = k;

    }
    console.log(tab);
    return tab;
}


 function montrer(image) {



if(premiereImage === true) {
  
  $(image).children('img').show();
  $(image).children('img').attr("class", "retourner");
  image1src = $(image).children('img').attr('src');
  image1 = $(image);
  image1t = $(image).children('img');
  premiereImage = false;
  
 } else if ($(image).children('img').attr("class") != $(image).children('img').attr("class","retourner")) {
   
   premiereImage = true;
   $(image).children('img').show();
   $(image).children('img').attr("class", "retourner");
    image2src = $(image).children('img').attr('src');
    image2 = $(image);
    image2t = $(image).children('img');
    essai = essai + 1;
    $('#idNbrEssai').val(essai);
    
    if(image1src == image2src) {
    
      $(image1).removeAttr("onclick");
      $(image2).removeAttr("onclick");
      $(image1t).removeClass("retourner");
      $(image2t).removeClass("retourner");
      paire = paire + 1;
      $('#idNbrPaire').val(paire);
    } else {
   
   setTimeout(function() {
    $('.retourner').hide();
    $(image1t).removeClass("retourner");
    $(image2t).removeClass("retourner");
   }, 500);
  
   
    
    }
 }
  

}




function jouer() {
    let essai = 0;
    let paire = 0;
  
    premiereImage = true;
    
    chargerPaires();
    brasserPaires();
  
  
    $('#container').append("<ul>");
    
    for(i=0;i<16;i++) {
      
      image = "<img class=\"im\"src=\"" + tab[i] + "\">";

      $('#container').append("<li value=\""  + i + "\" onclick=\"montrer(this)\">" + image + "</li>");
      
    }
    
    
    
    $('#container').append("</ul>");
    
    $('li>img').hide();
    $('#idNbrEssai, #idNbrPaire').val("");
    
    
  
}

