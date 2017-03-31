//function that takes the string variable of s
function rev(s){
	s = s.split(''); //splits s into characters separated by commas
	s = s. reverse(); //reverses s 
	s = s. join(''); //joins the reversed strings by removing the commas
return s;
}

//function that execute the rev() function by getting the string value of s and passing it into the rev()function
function doRev(){
	var s =document.getElementById('input').value;
		if(s.length == ''){// check if input string is empty
			alert('cannot reverse an empty string');
		}else{
			alert("" + rev(s));
		}
}