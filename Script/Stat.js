#pragma strict
/******************************************************************************* 
** File: Stat.js
** Author: Stephanie Ruff
** 
** This file holds data that can be used to store information about the Character. 
**
** Note: attach to any character type; main, support, enemy
**
** Needs Person.js and Mage.js in the same folder.
********************************************************************************/


var level : int;		//--should be moved to Person class
var classType : String; //--currently only magic or non-magic
var status = "alive";	//--can be deleted
var charName : String;	//-give that character a name!!!

//--basic stats used for character creation
var vitality : int;		
var luck : int;
var strength : int;
var magic : int;
var dexterity : int;
var intelligence : int;

var hpMod : int;		//--will be retrieved from an enum

//--will be retrieved from inventory item
var armor : int;		
var weapon : int;

//--should be moved to Person class. for now used to debug
var skillPoints : int;
var defense : int;
var maxHitPoints : int;

var hitPoints : int;	//--character's current hitpoints

var evade : float;		//--evasion rate

var stat : Person;		//--holds most information and formulas for character

function Awake () {
	//--create Magic type character
	if(classType == "Magic")
	{
		stat = new Mage(vitality, luck, strength, magic, dexterity, intelligence, hpMod);
	}
	//--create non-magic type character
	else{
	classType = "non-Magic";
	stat = new Person(vitality, luck, strength, magic, dexterity, intelligence, hpMod);
	}
	
	luck = stat.getLuck();		//--can be deleted
	//--set character's level
	stat.setLevel(level);	
	//--get character's max hp 	
	maxHitPoints = stat.getHP();
	//--start with a full health bar
	hitPoints = maxHitPoints;
	//--SP
	skillPoints = stat.getSP();
	//--get defense. should be moved to Person class
	defense = armor + stat.getDefense();
	//--get evasion rate. should be moved to Person class
	evade = stat.getEvasionRate();
}

function dealDamage(damage : int)
{
	//--get Evasion rate
	var defense = stat.evade();
	//--do no damage if evaded
	if(defense == -1){	}
	//--deal damage if the defense is less than damage
	else{
		if(defense >= damage){	}
		else
		{
			hitPoints -= damage - defense;
		}
	}
}

function Update () {

	if(hitPoints <= 0)
	{
		status = "dead";
	}
	if(status != "dead")
	{
		
	}
}

function LevelUp()
{
	level++;
	stat.setLevel(level);
	maxHitPoints = stat.getHP();
}