###Naming (unity and maya) conventions
Materials are prefixed by mat_ , followed by the location of the model_ it is applied to, and finally ended by the type of surface the material is trying to represent. Everything is lowercase.
mat_pipe_rustyiron, mat_neck_bloodyred, mat_lid_plastic

Meshes are prefixed by mesh_ , followed by a categorization_ listed below, a _generalcategorization of the object type, and lastly the name of the mesh. Everything is lowercase.
Categorizations (can be expanded upon):
env_ (for meshes that won’t move [buildings, rocks])
dyn_ ([dynamic]for meshes that we animate)
General Categorizations (list is not all inclusive):
building_
rock_
fence_
body_
desk_
mesh_env_rock_craggy01, mesh_dyn_body_enemy01, mesh_env_building_jail01
Scripts names consist of nouns, which will start with capital letters. The noun describes the object that the script will be attached to, or what its function will be. Nowhere in the name shall the word “script” be mentioned, unless we make a script for a ScriptWriter.
WallRunner, Enemy, Door, Gun
Sounds are prefixed by sound_ , followed by a categorization_ listed below, what object_ the sound applies to, and a description_ of the sound. Everything is lowercase.
Categorizations: (non inclusive)
env_ (ambient sounds)
music_ 
obj_ (sounds triggered by objects)
sound_env_hallwaylevel_ominous, sound_music_startscreen_upbeat, sound_obj_pistol_silenced, sound_obj_rifle_loud, sound_obj_feet_grassy
Prefabs will be simple, descriptive nouns that begin with an uppercase letter.
Textures are prefixed by tex_ , followed by a description_ of the texture, the object_ the texture will be applied to, and finally a categorization of the type of texture file.
Categorizations: 
diffuse (color map)
bump (normal map)
ao (ambient occlusion)
spec (specular map)
transp (transparency/opacity map)
displ (displacement map)
tex_smoothconcrete_wallsmooth02_diffuse, tex_latex_enemybody01_spec
For all of the above naming conventions, object_ refers to the name of the mesh, unless it is an ambient sound, then it will apply to the name of the scene

###Coding and style conventions
Local variable names are written using camelCase, must be descriptive
e.g (var distanceToHouse : int = 33;)
No single letter variables (i, j, k, m, n), except where x,y,z denote coordinates 
Loop variables should be triple of the same letter
iii for the outermost loop, jjj one level in, and kkk one more level in
Loops should rarely be three levels deep and should never be more than four levels deep

Member variable names are written using camelCase and an underscore is used as the first character to denote its member variable status
e.g. (_position)
Boolean member variables should start with _is or _has (e.g. _isHungry)

const variables are ALL_CAPITALS separated by underscores
enum names start with a capital letter, the constants in the enum follow const variable conventions

class names start with a capital letter. This means script names start with capital letters, and are nouns, since the script name is the class name. The script name should be a descriptive noun that says what the script does or is attaching to, and nowhere should the word “script” be mentioned in the name
protected variables should be declared first, then private variables, and lastly, public variables
For functions, the same applies, protected, private, then public
function names start with a lowercase letter
Function names should start with a verb 
Function parameters follow local variable naming conventions
Getters and setters start with get or set, and a logical noun denoting what is get or setted
You can opt to fit getters and setters on one line
e.g. function getGunType() : GunType { return _gunType; }

All bracket use involves this kind of formatting:
	for (var iii = 0; iii < monsters.length; ++iii)
	{
		/* */
}

if (!(!false && true) || false)
{
	/* */
}
else
{
	/* */
}

function eatPizza(pizza : Pizza)
{
	/* */
}

Use Array (var legs = new Array()), not .NET arrays (int[]) 
Avoid static variables in classes unless used to count the number of instances Instantiated
Avoid global variables completely
Comments tell why or how lines of code are doing what they do, not what they do
Ideally, limit all lines to 92 columns
If something like a function declaration does not fit, do this:
function jumpToAnExtremelyHighPositionThatDoesNotHaveSpikes(
	extremelyDescriptiveVariable
     , extremelyLongVariable
     , parameterThatIsTooExtreme)
{

}

Include spaces between mathematical operands, but do not include spaces between a function call and its parameters (do this setPosition(pos) not this 
setPosition ( pos )

If code is reused at least twice, make it a function
Declare variables as close as possible to where they are used
Use pre-increment as opposed to post-increment (++iii vs iii++)
When knowing the exact distance or length of a vector is not crucial, use sqrMagnitude instead of magnitude
Calculating or comparing the distances between two vectors is an examples of when you do not need the exact distance
