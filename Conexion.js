
class Conexion {
    
}
    function registrar(){
        var email= document.getElementById('email').value;
        var confirm= document.getElementById('confirm').value;
        firebase.auth().createUserWithEmailAndPassword(email, confirm).then(function(accept){
             alert('Registro Correcto');}).catch(function(error) {
           var errorCode = error.code; 
           var errorMessage = error.message;
           if(errorCode == 'auth/invalid-email'){
               alert('Escribe un correo válido.');
           }
           else{ if (errorCode == 'auth/weak-password') {
          alert('Escribe una contraseña de al menos 6 caracteres.');
        } else {
          alert(errorMessage);
        }}
        console.log(error); 
});
    }

function ingresar(){
      var correo= document.getElementById('correo').value;
      var contraseña= document.getElementById('contraseña').value;
      if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();
        // [END signout]
      } else {
      firebase.auth().signInWithEmailAndPassword(correo, contraseña).then(function(accept){
             alert('Acceso Correcto');}).catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
   if (errorCode === 'auth/wrong-password') {
            alert('Contraseña incorrecta');
          } else {
            alert(errorMessage);
          }
          console.log(error);
});
      }
}