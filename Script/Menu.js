#pragma strict
/******************************************************************************* 
** File: Stat.js
** Author: Stephanie Ruff
** 
**Menu displayed a list of buttons for the user to use for checking or making changes
** while playing the game.
** Activate or hide the menu by pressing M on the keyboard.
** Open the submenus by clicking on the appropriate buttons in the menu.
** Hovering over items in the Inventory menu will highlight the appropriate box and 
** clicking on the item will select it. 
**
** Note: attach to player's character
** Required: object with this scipt attached needs Inventory attached as well.
********************************************************************************/

private var showMenu : boolean;
private var subMenu : boolean;
private var menuTitle : String;

var texture : Texture2D;
var subMenuTex : Texture2D;
var subMenuBox : Texture2D;
var subMenuHighlight : Texture2D;	
var slots = 6;						//--number of items listed per page

private var list : String[];		//--list of items
private var numItems = 0;			//--number of items in the list

private var cursorPosY : float;		//--can be removed
private var cursorPosX : float;		//--can be removed
private var clickedItem : int;		//--can be removed
var itemName = "";
//--names of Menus
var mainMenu = "Menu";
var button1 = "Inventory";
var button2 = "Title 2";
var button3 = "Title 3";

var menuLeft = 10;
var menuTop = 10;
var menuWidth = 200;
var menuHeight = 150;

var sMenuLeft = 250;
var sMenuTop = 10;
var sMenuWidth = 200;
var sMenuHeight = 150;


function Start () {

	//--do not show menu at start
	showMenu = false;
	
	subMenu = false;
	menuTitle = " ";
	
	clickedItem = -1;
}

function Update () {

	//--press M for menu to show	
	if(Input.GetKeyDown(KeyCode.M) && !showMenu)
	{
		showMenu = true;
	}
	//--press M to get rid of Menu
	else if(Input.GetKeyDown(KeyCode.M) && showMenu)
	{
		showMenu = false;
	}
}

/*
* OnGUI calls every frame and is used to draw 2D menus and icons 
* Pre-condition: none
* Post-Condition: draws the menu and HUD icons on the screen. 
*/
function OnGUI () {

	if(showMenu)
	{
    	// Make a background box
   	 	GUI.Box (Rect (menuLeft,menuTop,menuWidth,menuHeight), mainMenu);
   	 	GUI.DrawTexture (Rect (menuLeft,menuTop,menuWidth,menuHeight),texture, ScaleMode.StretchToFill);

    	// Make the first button.
    	if (GUI.Button (Rect (20,40,180,20), button1)) {
    		
    		if(subMenu && menuTitle == button1){ subMenu = false; }
    		else {
    		subMenu = true;
    		menuTitle = button1;
    		}    		
    	}

    	// Make the second button.
    	if (GUI.Button (Rect (20,70,180,20), button2)) {

      		if(subMenu && menuTitle == button2){ subMenu = false; }
    		else {
    		subMenu = true;
    		menuTitle = button2;
    		}			
    	}

    	// Make the third button.
    	if (GUI.Button (Rect (20,100,180,20), button3)) {

       		if(subMenu && menuTitle == button3){ subMenu = false; }
    		else {
    		subMenu = true;
    		menuTitle = button3;
    		}
       	}
    	
    	if(subMenu){
    	GUI.Box(Rect (sMenuLeft,sMenuTop,sMenuWidth,sMenuHeight), menuTitle);
    	if(menuTitle == button1)
    	{
    		var length = GetComponent(Inventory).defaultSize;
    		list = GetComponent(Inventory).inventoryList;
    		var i = 0; var j = 1;
    		for(i = 0; i < length; i++)
    		{
    			//--gets rid of trailing empty slots, breaks menu if holes are in the array
    			if(list[i] != "")
		  			{GUI.Box(Rect(sMenuLeft, (((sMenuHeight/slots) * (j)) + sMenuTop), sMenuWidth, (sMenuHeight/slots)), list[i]);
		  			j++; 
		  		}
    		}
    		//--actual number of items in the list
    		numItems = j - 1;
    	}
    	}
	}
	else{
	subMenu = false;	
	menuTitle = "";
	}    
	//--user clicks on inventory submenu
	if(menuTitle == button1)
	{
		//--get y position relative to the screen
		cursorPosY = Event.current.mousePosition.y;
		//--get x position relative to the screen
		cursorPosX = Event.current.mousePosition.x;

		if(cursorPosX >= sMenuLeft && cursorPosX <= (sMenuLeft + sMenuWidth))
{
			//--get j value relative to the box
			clickedItem = Mathf.Floor((((cursorPosY - sMenuTop) * slots) / sMenuHeight));	

			if((clickedItem >= 1 && clickedItem <= numItems)){			
				GUI.DrawTexture(Rect(sMenuLeft, (((sMenuHeight/slots) * (clickedItem)) + sMenuTop), sMenuWidth, (sMenuHeight/slots)), subMenuHighlight, ScaleMode.StretchToFill);}
			//--convert item number to index
			clickedItem--;
			//if inside submenu
			if(Input.GetMouseButtonDown(0)){
			if((clickedItem >= 0 && clickedItem < numItems))
			{
				itemName = list[clickedItem];
			}
			//--if not in submenu or on item
			else {
			clickedItem = -1;
			itemName = "";
		}}}
	}
}