#pragma strict
/*****************************************
** File:    Mage.js 
** Author:  Stephanie Ruff 
**
** Mage is an extension of Person and holds information about
** a magic type character.
** Note: This does not need to be attached to an object. Just leave
**		 it in the script folder.
** Requires Person.js to be in the same folder.
***********************************************/


class Mage extends Person {

	var clssMod = 3; //--will be replaced

	//-------------------------------------------------------
	// Mage is the default constructor
	// PreCondition:  none
	// PostCondition: a magic type character is created
	//---------------------------------------------------------
	public function Mage()
	{	//--call Person's default constructor
		super();
	}

	//-------------------------------------------------------
	// Mage is a constructor
	// PreCondition:  vit, lck, str, mag, dex, and intl are positive values
	// PostCondition: a magic type character object is created with entered values
	//---------------------------------------------------------
	public function Mage(vit : int, lck : int, str : int, mag : int, dex : int, intl : int)
	{
		clssMod = 3; //--will be replaced
		super(vit, lck, str, mag, dex, intl, clssMod);
	}
	//-------------------------------------------------------
	// Mage is a constructor
	// PreCondition:  vit, lck, str, mag, dex, clssmd, and intl are positive values
	// PostCondition: a magic type character object is created with entered values
	//---------------------------------------------------------
	public function Mage(vit : int, lck : int, str : int, mag : int, dex : int, intl : int, clssMd : int)
	{
		super(vit, lck, str, mag, dex, intl, clssMd);
	}
	//-------------------------------------------------------
	// getSP overrides Person's getSP
	// PreCondition:  none
	// PostCondition: skillpoints are returned as an int
	//---------------------------------------------------------	
	public function getSP()
	{
		return (2 * magic) + (2 * level);
	}	
	//-------------------------------------------------------
	// getMagicAttack is a default magic attack and can be removed
	// PreCondition:  none
	// PostCondition: calculates magic attack and returns as an int
	//---------------------------------------------------------		
	public function getMagicAttack()
	{
		return (9 * magic);
	}
}