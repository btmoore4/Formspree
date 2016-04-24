
function myFunction() {
	fname = document.getElementById('fname').value; 
	lname = document.getElementById('lname').value;
	pnum = document.getElementById('pnum').value;
	email = document.getElementById('email').value;
	hschool = document.getElementById('hschool').value;
	grade = document.getElementById('grade').value;
	subject = document.getElementById('subject').value; 
	other = document.getElementById('other').value; 

	if ((fname=="") || (lname=="") || (pnum=="") || (email=="")){
		document.getElementById("p1").innerHTML = "Please fill in the required fields.";
		return; 
	}

	document.getElementById("p1").innerHTML = "Thanks for Sending a Contact Form";
	$.ajax({
		url: "https://formspree.io/btmoore95@gmail.com",
		method: 'POST', 
		data: {
			message: "New Contact Form Response",
			First-Name: fname, 
			Last-Name: lname,
			Phone-Number: pnum, 
		}
	},
	dataType: "json"
	}).done(function(response) {
		console.log(response); 
	}); 
}

