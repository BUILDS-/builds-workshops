#pragma strict

public var waiting : boolean = false;
var randomPosition : Vector3;
var moveDelay : float = 1;
//var minx : float; 
//var maxx : float;
//var miny : float; 
//var maxy : float; 
var wayPoint : Vector3;
var minRange : float = 0.9;
var maxRange : float = 2.5;
 var Range= 1.5;
 var height : float = 1.0; 
var footsteps : AudioClip;
var startPoint : Vector3;
var speed : int = 8; 
var animname :String;
var animname2 : String;
function Awake() { 
startPoint = transform.position;
}
function FixedUpdate ()
{
   
    if (waiting == false)// && GameObject.FindGameObjectWithTag("powerupice") == null)
    {
    
        SendMessage("LerpCube");
    }
        else
        {
        //transform.position = Vector3.Lerp (transform.position, randomPosition, Time.deltaTime*1);
        transform.position = Vector3.MoveTowards( transform.position, wayPoint, Time.deltaTime * speed );
    	
    	
        }
}
 
 
function LerpCube()
{
//GetComponent.<Animator>().SetBool("walking", true);
GetComponent.<Animator>().Play(animname, -1);
 wayPoint=   Vector3(Random.Range(startPoint.x - Range, startPoint.x + Range), height, Random.Range(startPoint.z - Range, startPoint.z + Range));
      wayPoint.y = 0;
      //Random.insideUnitSphere*47;
   // randomPosition = Vector3 (Random.Range(minx, maxx), 0, Random.Range( miny, maxy ));
    print(randomPosition);
    moveDelay = Random.Range(minRange, maxRange); 
    transform.LookAt(wayPoint);
//      var targetRotation = Quaternion.LookRotation(wayPoint - transform.position);
//    transform.rotation = Quaternion.Slerp(transform.rotation, targetRotation, 6* Time.deltaTime);
    transform.rotation.z = 0; 
    transform.rotation.x = 0;
    waiting = true;

    print("waiting");
    yield WaitForSeconds (moveDelay);
       GetComponent.<Animator>().Play(animname2); //Play("neutral_idle", -1);
    print("stopping");
    waiting = false;
    print("resuming");
    GetComponent.<Animator>().Play(animname, -1);
    //Debug.Log ("waited");
}


 function Wander()
 { 
    // does nothing except pick a new destination to go to
     
     wayPoint=  Vector3(Random.Range(transform.position.x - Range, transform.position.x + Range), 1, Random.Range(transform.position.z - Range, transform.position.z + Range));
     wayPoint.y = 1;
    // don't need to change direction every frame seeing as you walk in a straight line only
     transform.LookAt(wayPoint);
     Debug.Log(wayPoint + " and " + (transform.position - wayPoint).magnitude);
 }