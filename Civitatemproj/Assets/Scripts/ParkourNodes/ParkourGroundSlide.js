#pragma strict

public class ParkourGroundSlide extends ParkourNode
{
	public function OnTriggerEnter(collider : Collider)
	{
		var anim : Animation = getDesiredAnimation("anim_parkourgroundslide_hacker_char", collider.gameObject.animation);
		Debug.Log(anim.name);
		
	}
	
	public function Start()
	{
	
	}
	
	public function Update()
	{
	
	}
};
