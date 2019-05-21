$('.dog-form').on('submit', (e)=>{
	e.preventDefault();
	$('.dogs').empty()
	
	let num = $('.numOfDogs').val()
	
	fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
		.then(response => response.json())
		.then(responseJson => {
			let dogArray = responseJson.message
			
			for (let i = 0 ; i < dogArray.length; i++){
				let dogSRC = dogArray[i]
				
				console.log(dogSRC)
				$('.dogs').append(`<img src="${dogSRC}">`)
			}
	})
	
})

$('.randombreed-form').on('submit', (e)=>{
	e.preventDefault();
	$('.dogs').empty()

	
	let breed = $('.random-breed').val()
	
	console.log(breed)
	
	fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
		.then(response => {
			if (response.status === 200){
				return response.json()	
			} else {
				throw new Error(response.status)
			}
			
		})
		.then(responseJson => {
		
			let dogSRC = responseJson.message
			
			$('.dogs').append(`<img src="${dogSRC}">`)

	}).catch(error => {
		alert(`Something went wrong! ${error}`)
	})
})

