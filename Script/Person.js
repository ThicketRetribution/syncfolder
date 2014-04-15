#pragma strict
/*****************************************
** File:    Person.js 
** Author:  Stephanie Ruff 
**
** This file contains a class to hold information about a character.
** Note: This does not need to be attached to an object. Just leave
**		 it in the script folder.
***********************************************/

class Person {

	var level = 1;

	var vitality : int;
	var luck : int;
	var strength : int;
	var magic : int;
	var dexterity : int;
	var intelligence : int;

	var classMod = 4;		//--will be replaced
	
	//-------------------------------------------------------
	// Person is the default constructor
	// PreCondition:  none
	// PostCondition: a Person object is created with default values
	//---------------------------------------------------------
	public function Person()
	{
		vitality = 1;
		luck = 1;
		strength = 1;
		magic = 1;
		dexterity = 1;
		intelligence = 1;
	}
	//-------------------------------------------------------
	// Person is a constructor
	// PreCondition:  vit, lck, str, mag, dex, and intl are positive values
	// PostCondition: a Person object is created with entered values
	//---------------------------------------------------------
	public function Person(vit : int, lck : int, str : int, mag : int, dex : int, intl : int)
	{
		vitality = vit;
		luck = lck;
		strength = str;
		magic = mag;
		dexterity = dex;
		intelligence = intl;
	}
	//-------------------------------------------------------
	// Person is a constructor
	// PreCondition:  vit, lck, str, mag, dex, intl, and classmod are positive values
	// PostCondition: a Person object is created with entered values
	//---------------------------------------------------------
	public function Person(vit : int, lck : int, str : int, mag : int, dex : int, intl : int, clssMod : int)
	{
		vitality = vit;
		luck = lck;
		strength = str;
		magic = mag;
		dexterity = dex;
		intelligence = intl;
		classMod = clssMod;
	}
	//-------------------------------------------------------
	// getHP calculates Person's hit points
	// PreCondition:  none
	// PostCondition: hitpoints are returned as an int
	//---------------------------------------------------------
	public function getHP(){
		return (4*vitality) + (level * classMod);
	}
	//-------------------------------------------------------
	// getSP calculates Person's skill points
	// PreCondition:  none
	// PostCondition: skillpoints are returned as an int
	//---------------------------------------------------------	
	public function getSP(){
		return (2 * dexterity) + (2 * level);	
	}			
	//-------------------------------------------------------
	// setLevel replaces the old level with a new value
	// PreCondition:  lvl is above 0 and is higher than the previous
	// PostCondition: level is replaced with a new value
	//---------------------------------------------------------
	public function setLevel(lvl : int){
		level = lvl;
	}
	//-------------------------------------------------------
	// getLuck is an accessor to Person's luck
	// PreCondition:  none
	// PostCondition: luck value is returned
	//---------------------------------------------------------	
	public function getLuck(){
		return luck;
	}
	//-------------------------------------------------------
	// getDefense calculates and returns Person's defense
	// PreCondition:  none
	// PostCondition: defense is returned as an int
	//---------------------------------------------------------
	public function getDefense(){
		return vitality + level + dexterity;
	}
	//-------------------------------------------------------
	// getBaseAttack calculates and returns Person's base attack
	// PreCondition:  none
	// PostCondition: base attack is returned as an int
	//---------------------------------------------------------
	public function getBaseAttack(){
		return 2 * strength;
	}
	//-------------------------------------------------------
	// getEvasionRate calculates and returns Person's evasion rate
	// PreCondition:  none
	// PostCondition: evasion rate is returned as a float
	//---------------------------------------------------------	
	public function getEvasionRate (){
		return (luck * .3) + 1;
	}	
	
	//-------------------------------------------------------
	// evade determines if the Person evades an attack
	// PreCondition:  none
	// PostCondition: returns defense if hit or -1 if evaded
	//---------------------------------------------------------
	public function evade()
	{
		if(Random.Range(0.0, 100.0) <= getEvasionRate())
		{
			return -1;
		}
		else
		{
			return getDefense();
		}
	}
}