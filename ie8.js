navicon
<link href="http://fonts.googleapis.com/css?family=Bitter&subset=latin" rel="stylesheet" type="text/css">


<script type="text/javascript">

	// Extra function to control menu state from anywhere on your page/ inside your script
	function expandfullscreenmenu(action){ //param: 'open', 'close', or empty to toggle menu state
		var togglebox = document.getElementById("togglebox")
		var newstate =	(action == 'open')? true : (action == 'close')? false : !togglebox.checked
		togglebox.checked = newstate
	}

</script>

<!--[if lte IE 8]>

	<style type="text/css">

	/* IE8 specific CSS */

	label#navtoggler{
	  border-width: 0.6em;
	}

nav#expand-fullpagemenu label#closex{
	font-size: 2em;
	text-indent: 0;
}

	#expand-fullpagemenu{
		visibility: hidden;
	}

	</style>

	<script type="text/javascript">
	 // IE8 MENU COMPATIBILITY CODE:
	document.createElement("nav")

	function expandfullscreenmenu(action){
		var nav = document.getElementById("expand-fullpagemenu")
		var newstate =	(action == 'open')? 'visible' : (action == 'close')? 'hidden' : nav.style.visibility == 'hidden'? 'visible' : 'hidden'
		nav.style.visibility = newstate
	}

	window.attachEvent("onload", function(){
		document.getElementById("navtoggler").onclick = function(){
			expandfullscreenmenu('open')
		}
		document.getElementById("closex").onclick = function(){
			expandfullscreenmenu('close')
		}
	})

	</script>

<![endif]-->
