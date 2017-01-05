
document.getElementById('user_input').value = " ";
document.getElementById('user_input').focus();

function onPress_ENTER()
{
	var keyPressed = event.charCode || event.which;

			        //if ENTER is pressed
			        if(keyPressed==13)
			        {
			        	incre();
			        	keyPressed=null;
			        }
			        else
			        {
			        	return false;
			        }
			    }


			    var count = 0;

			    
			    function incre(){


			    	count += 1;
			    	var text = document.createTextNode(count);

			    	var el = document.createElement("li");

	//get text from input box and create node
	var user_input = document.getElementById('user_input').value;
	var user_input_node = document.createTextNode(user_input);
	
	//create element node span and add user input inside span
	var user_el = document.createElement('span');
	user_el.appendChild(user_input_node);

	//id of list item element
	var id_el = document.getElementById('list_item');

	//append counter inside the li
	el.appendChild(text);
	el.appendChild(user_el);

	id_el.appendChild(el);

	document.getElementById('user_input').value = " ";
	document.getElementById('user_input').focus();

}


