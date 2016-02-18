#pragma strict

	var target: GameObject;
	
	// Speed in units per sec.
	var speed: float;
	var dist : float;
	function Awake () { 
	target  = GameObject.Find("FPSController");
 }
	
	function Update () {
		// The step size is equal to speed times frame time.
		if (Vector3.Distance(target.transform.position, transform.position) < dist) { 
		var step = speed * Time.deltaTime;
		transform.LookAt(target.transform);
		// Move our position a step closer to the target.
		transform.position = Vector3.MoveTowards(transform.position, target.transform.position, step);
		}
		}
