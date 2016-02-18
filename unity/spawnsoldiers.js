#pragma strict
public var soldier : GameObject;
var numsoldiers : int = 0;
var maxsoldiers : int = 100;

function Update () {
if (numsoldiers < maxsoldiers){

StartCoroutine("spawnobjects",0);
numsoldiers++;
}
if (numsoldiers == maxsoldiers) {
StopCoroutine("spawnobjects");
}

}
function spawnobjects () {
var position = Vector3(Random.Range(166,420), Random.Range(214.09,214.09),Random.Range(200,400));

var clone:GameObject = Instantiate(soldier, position, Quaternion.identity);
//clone.transform.position.y = Terrain.activeTerrain.SampleHeight(transform.position) + 1;
clone.transform.rotation.y = Random.Range(0,360);

}
