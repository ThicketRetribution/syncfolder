#pragma strict
/******************************************************************************* 
** File: PlayerAttack.js
** Author: Stephanie Ruff
** 
** PlayerAttack allows the user to attack enemy targets by clicking on them. 
** The player character will only deal damage if it is within attacking range. 
**
** Note: attach to the user's character.
**
** Needs to have Stat.js attached to the same character.
********************************************************************************/

var canAttack = false;		//--able to attack
var attacking : Transform;	//--targetted enemy
var baseAttack : int;		//--player's base attack 
var weapon : int;			//--weapon damage
var reach : float;			//--max distance to hit enemy
var distance : float;		//--can be deleted

var stat : Person;			//--holds player stats

private var hit : RaycastHit;
function Start () {
	
	stat = GetComponent(Stat).stat;	
	weapon = GetComponent(Stat).weapon;
	baseAttack = weapon + stat.getBaseAttack();
}

function Update () {
	//--get a target if mouse is clicked
	if(Input.GetMouseButtonDown(0))
	{ 
    	var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
	}
	//--check if user clicked on an enemy
	if (Physics.Raycast(ray, hit) && hit.transform.CompareTag("Enemy")){
		attacking = hit.transform;
		Attack();
     }
}
function Attack()
{
	//check distance
	distance = Vector3.Distance(attacking.position, transform.position);
	if(distance <= reach)
	{
		canAttack = true;
		attacking.GetComponent(Stat).dealDamage(baseAttack);
	}
	else {
		canAttack = false; 
	}
}
