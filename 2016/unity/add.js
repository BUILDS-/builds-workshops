#pragma strict
var scoretext : UI.Text;
var score : int = 0;
function Start () {

}

function Update () {

}

function Add1Point ()  { 
score++;
scoretext.text = score.ToString();
}