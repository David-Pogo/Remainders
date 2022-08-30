let contor = 0;
let pozitie = 1;
function adaugareTask() {
    let task = document.getElementById("task1").value;
    let card = '<div class="card" id = "' + pozitie + '"> <div class = "card-body"> <h5>' + task + '</h5><a href="#" class="btn btn-danger" onclick = "return stergereTask('+ pozitie + ');">Remove</a></div></div>';
    let cardImportant = '<div class="card" id = "' + pozitie + '" > <div class = "card-body" style = "background-color: antiquewhite;"> <h5>' + task + '</h5><a href="#" class="btn btn-danger" onclick = "return stergereTask(' + pozitie + ');">Remove</a></div></div>'
    if(dateValide(task) && adaugareTaskImportant()) {
    $("#adaugare-lista").append(cardImportant);
    $("#task1").val("");
    ++contor;
    } else if(dateValide(task) && !(adaugareTaskImportant())) {
        $("#adaugare-lista").append(card);
        $("#task1").val("");
        ++contor;
    } else {
        $("#message").text("Introdu o descriere la ceea ce vrei sa faci");
    }
    if(contor == 1 && dateValide(task)) {
        $("#message").text("La moment ai: " + contor + " tasc");
    } else if(contor > 1 &&  dateValide(task)) {
        $("#message").text("La moment ai: " + contor + " tascuri");
    }
    ++pozitie;
    return false;
}

function dateValide(input) {
        if(input) {
            return true;
        }
            return false;
}

function adaugareTaskImportant() {
   if($('#text').is(':checked')) {
    return true;
   } else {
    return false;
   }
}

function stergereTask(data) {
   $('#' + data).remove() 
    --contor;
    if(contor > 1)
    $("#message").text("La moment ai: " + contor + " tascuri");
    else if(contor == 1)
    $("#message").text("La moment ai: " + contor + " tasc");
    else
    $("#message").text("Ai indeplinit toate tascurile!");
    return false;
}