var x8_formularios = document.forms;
var x8_def = "sabão";
var x8_tipos = {email:"email@gmail.com", password:"123"};
var x8_nomes = {email:"email@gmail.com", telefone:"4444444444"};
function tipo_campo(x8_camp)
{
	var x8_bitch = "";
	if(x8_bitch == "")
	{
		for(var index in x8_tipos) 
		{ 
		   if (x8_tipos.hasOwnProperty(index)) 
		   {	
		       if(x8_camp.type == index)
		       {
		       	x8_bitch =  x8_tipos[index];
		       	break;
		       }	   
		   }
		}
	}	

	if(x8_bitch == "")
	{
		for(var index in x8_nomes) 
		{ 
		   if (x8_nomes.hasOwnProperty(index)) 
		   {	
		       if(x8_camp.name == index)
		       {
		       	x8_bitch =  x8_nomes[index];
		       	break;
		       }	   
		   }
		}
	}

	if(x8_bitch == "")
	{
		x8_bitch = x8_camp.name+"_"+x8_def;	
	}

	return x8_bitch;
}

for (i = 0; i < x8_formularios.length; i++) 
{ 
   var x8_campos = x8_formularios[i].elements; 
   for (e = 0; e < x8_campos.length; e++ ) 
   {
	    if(x8_campos[e].name != "")
	    {	
		    var x8_todos_campos = document.getElementsByName(x8_campos[e].name);
		    if(!x8_campos[e].hasAttribute("value"))
			{   
				var x8_att = document.createAttribute("value");       
				x8_att.value = tipo_campo(x8_campos[e]);                       
				x8_campos[e].setAttributeNode(x8_att);
			}
			else
			{
				x8_campos[e].value = tipo_campo(x8_campos[e])
			}	
		   	console.log(x8_campos[e].tagName+"> name: "+x8_campos[e].name+" : - OK");
	   	}
   }
}
