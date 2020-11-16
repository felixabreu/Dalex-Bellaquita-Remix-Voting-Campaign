// (function() {
//     $('form > input').keyup(function() {

//         var empty = false;
//         $('form > input').each(function() {
//             if ($(this).val() == '') {
//                 empty = true;
//             }
//         });

        
//         if (empty) {
//             $('#register').attr('disabled', 'disabled'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie
//         } else {
//             $('#register').removeAttr('disabled'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie
//         }
//     });
// })()

function setEmail() {
    var closeButton = document.getElementById('closet');
    localStorage.setItem('email', document.getElementById("formemail").value);
    closeButton.click();

}
// function sendEmail() {

//     var email= document.getElementById("formemail").value;
//     var form = document.getElementById("form-body");

//     $.ajax({
//         type: 'post',
//         url: 'https://dalexmusic.com/app/vote.php',
//         data: {
//             "name": name,
//             "email": email,
//             "number": number,
//             "city": city,
//             "country": country
//         },
//         success: function( data ) {
//                 form.innerHTML = "¡Bienvenido a la pagina de Bellaquita Remix!";
//                 setInterval(function(){ 
//                     close.click();
//                 }, 2000); 
//         },
//         error: function(data) {
//             form.innerHTML = "Su solicitud ha sido negada. Actualice la página y asegúrese de que todos los campos de la aplicación se completen correctamente.";
//             console.log(data);
//             close.click();
//             //close modal
//         }
//     });
// }

function voteNow(person) {
    var title = document.getElementById('modal-title');
    var caption = document.getElementById('form-body');
    var modal = document.getElementById("modal-click");
    var modalFooter = document.getElementById('modal-footer');
    var email = localStorage.getItem('email');
    var openYoutube = document.getElementById('openSpotify');

    console.log("voting for person: " + person);

    $.ajax({
        type: 'post',
        url: 'https://richmusicltd.com/app/vote.php',
        data: {
            "email": email,
            "person": person
        },
        success: function( data ) {
                title.innerHTML= '¡Gracias por votar por @' + person + '!';
                caption.style.display = "none";
                modalFooter.style.display = "none";
                modal.click();
                setTimeout(function() {
                    openYoutube.click();
                }, 2000)
        },
        error: function(data) {
            title.innerHTML= '¡Gracias por votar por @' + person + '!';
            caption.style.display = "none";
            modalFooter.style.display = "none";
            modal.click();
            setTimeout(function() {
                openYoutube.click();
            }, 2000)
            console.log(data);
        }
    });




} 

