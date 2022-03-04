let screen=document.getElementById('screen');
buttons=document.querySelectorAll('buttton');
for(item of buttons){
	item.addEventListener('click', (e)=>{
		buttonText = e.target.innerText;
		console.log('buttontesxt is',buttonText);
		
		
	})
}
