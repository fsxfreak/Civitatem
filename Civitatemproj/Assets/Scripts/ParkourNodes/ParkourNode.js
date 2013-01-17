#pragma strict

enum Animations
{
	GROUND_SLIDE,
	LEDGE_GRAB,
	WALL_CLIMB,
	WALL_MANTLE,
	WALL_RUN
};

public class ParkourNode extends MonoBehaviour
{
	/*protected function getDesiredAnimation(name : String, baseAnimation : Animation)
	{
		var anims : Component[] = baseAnimation.GetComponentsInChildren(Animation);
		for (anims : Animation in animations) 
		{
			if (anim.name == name)
			{
				return anim;
				break;
			}
		}
		return false;
	}*/

	public function OnCollisionEnter(collider : Collision)
	{
		//meant to be overloaded by each class, to call respective Animations
		//and to execute special stuff
	}
	
	public function Start() 
	{
	
	}
	
	public function Update()
	{
	
	}
};
