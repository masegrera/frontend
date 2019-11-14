$(document).ready( function(){

    const car = {
        "modelo": "M850i xDRIVE",
        "color": ["blue", "black", "red", "white"],
        "price": "R$ 799.000,00",
        "images": [
            "car-blue.jpg",
            "car-black.jpg",
            "car-red.jpg",
            "car-white.jpg",
        ]
    }

    $(".color").click(function(){
        const id = $(this).data('id');
       $('.image img').attr("src", "imagem/"+ car.images[id]);
        
       // Remove classe active dos botoes
       $(".color").removeClass("active");

       // Adiciona classe active
       $(`.color[data-id="${id}"]`).addClass("active");

        console.log(id);
    })


})