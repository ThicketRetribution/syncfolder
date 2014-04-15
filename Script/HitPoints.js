#pragma strict
/******************************************************************************* 
** File: HitPoints.js
** Author: Stephanie Ruff
** 
** HitPoints displays the Hitpoints of the Player character as well as the targetted
** 	enemy. 
**
** Note: Attach HitPoints to any object that will stay active during the level; Main Camera,
**	Player's character. 
** 		Filling the player and enemy is not needed as the code will do this at runtime.
********************************************************************************/

var player : GameObject; 
var enemy : Transform;
var width = 50;
var height = 30;
var top = 30;
var sideShift = 10;
var style : GUIStyle; // style used for nametags. Needs to be set manually

function Start () {
	//--get player by tag
	player = GameObject.FindWithTag ("Player");
}

function OnGUI () {
	//--draw player's hitbar box
	GUI.Box (Rect (sideShift,top,width, height), 
	player.GetComponent(Stat).hitPoints + " / " + player.GetComponent(Stat).maxHitPoints);
	GUI.TextField((Rect (sideShift,10,width, 20)), player.GetComponent(Stat).charName, style);

	//--display enemy if player is targetting it	
	enemy = player.GetComponent(PlayerAttack).attacking;
	if(enemy != null)
	{
		//--make enemy box on the far right side
		GUI.Box (Rect ((Screen.width - width - sideShift),top,width, height), 
		enemy.GetComponent(Stat).hitPoints + " / " + enemy.GetComponent(Stat).maxHitPoints);
		GUI.TextField((Rect ((Screen.width - width - sideShift),10,width, 20)), enemy.GetComponent(Stat).charName, style);
	}
}