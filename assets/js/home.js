$('#click').on('click',function(e){
   
    e.preventDefault();

    // console.log(e);
    $.ajax({
        type:'get',
        url:'/add',
        data:"any",
        success: function( data ) {
            // $( "#weather-temp" ).html( "<strong>" + result + "</strong> degrees" );
            console.log("data ",data);
            $( "#addData" ).html(data.count);
        },
        error: function(err){
            console.log(err);
        }
    })

})