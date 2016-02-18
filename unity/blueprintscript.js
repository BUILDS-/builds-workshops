#pragma strict
var player : GameObject;
var canvas : GameObject;
function Start () {
player = GameObject.Find("FPSController");
canvas = GameObject.Find("Canvas");
}

function Update () {

if (Vector3.Distance(transform.position, player.transform.position) < 3) { 
canvas.SendMessage("Add1Point");
Destroy(gameObject);
}
}