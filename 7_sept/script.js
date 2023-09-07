


let card = document.querySelector('.card');


(async () => {
    try {


        const response = await fetch("https://rickandmortyapi.com/api/character");
        console.log(response)

        const result = await response.json();
        
        
	    //console.log(result.results[0])
        
        result.results.forEach(element => {
            
			
            card.innerHTML += '<div class="container">' +
                '<h4 class="ime"><b>' + element.name + '</b></h4>' +
                '<p class="status">' + element.status + '</p>' +
                '</div>';
				

            
        });
        
        
        console.log(result);


    } catch (error) {
        console.error("Error:", error);
    }
})();

