//your JS code here. If required.
let age=document.getElementById("age")
let nam=document.getElementById("name")
let btn=document.getElementById("btn");

let form=document.querySelector("form")
form.addEventListener("submit",check)

function check(e){
	 e.preventDefault()
	 if (isNaN(age) || age === 0 || name.trim() === '') {
                alert('Both age and name fields are required.');
                return;
            }
	let age1=age.value
	let name1=nam.value
	let promise = new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(age1>18){
				resolve(name1)
			}
			else{
				reject(name1)
			}
		},4000)
	})	

	promise
	.then((data)=>{
		alert("Welcome, "+data+". You can vote.")
	})
	.catch((error)=>{
		alert("Oh sorry "+error+". You aren't old enough")
	})
	
	// return promise
}

// function check1(e){
// 	let pr = check()
// 	pr.then((data)=>{
// 		alert(data)
// 	})
// }

