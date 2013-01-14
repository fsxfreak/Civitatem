#pragma strict

public class ParkourNode extends MonoBehaviour
{
	protected var _animation : Animation;
	
	public function OnCollisionEnter(collider : Collider)
	{
		var anim : Animation = collider.gameObject.GetComponent("Animation");
		anim.Play();
	}
	
	public function Start() 
	{
	
	}
	
	public function Update()
	{
	
	}
};
