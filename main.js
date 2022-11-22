function final_Password(){
function gerspecialCharacters(){
    special_Characters = ["!","@","#","£","¢","%","&","*","+"];
        gerSC1 = Math.round(Math.random()*8);
        gerSC2 =Math.round(Math.random()*8);
        if (gerSC1 == undefined || gerSC2 == undefined){
            this.Math.round(Math.random()*9);
        }
};
function gerLetters(){
    letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",'u',"v","w","x","y","z"];
        gerL1 = Math.round(Math.random()*25);
        gerL2 =Math.round(Math.random()*25);
        finalL1 = letters[gerL1]
        checkBox = document.getElementById('Upper');
        if(checkBox.checked) {
           finall1toUpper = finalL1.toUpperCase();
           finalLetters = finall1toUpper+letters[gerL2]}
else{finalLetters = finalL1+letters[gerL2]};};

function gerNumber(){
    var numbers = ["0","1","2","3","4","5","6","7","8","9"];
        var gerN1 = Math.round(Math.random()*9);
        var gerN2 =Math.round(Math.random()*9);
        var gerN3 =Math.round(Math.random()*9);
        var gerN4 =Math.round(Math.random()*9);
        finalNumber = numbers[gerN1]+numbers[gerN2]+numbers[gerN3]+numbers[gerN4];
};

gerspecialCharacters();
gerLetters();
gerNumber();

final= finalLetters + special_Characters[gerSC1] + finalNumber + special_Characters[gerSC2];
console.log(final);
};

    $(".gerpws").click(function(){
        final_Password();
        $("#generated").html(final);
      });