const firebaseConfig = {
  apiKey: "AIzaSyCgRnbmUKPG84OFSRrIlHnoWHcCnQNS9Ek",
  authDomain: "teste93-97.firebaseapp.com",
  databaseURL: "https://teste93-97-default-rtdb.firebaseio.com",
  projectId: "teste93-97",
  storageBucket: "teste93-97.appspot.com",
  messagingSenderId: "199592495195",
  appId: "1:199592495195:web:6f8e0da06238ada2d0d77e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//Utilize o código 'localStorage.getItem' para pegar o nome do usuário dentro do localStorage

user_name = ???("user_name");

/*Na linha 32 do kwitter.room.html, você está definindo o id para o nome do usuário
Digite esse id na linha abaixo.
Você precisa utilizar esse id, pois é nele que será mostrado o nome do usuário na tela
*/
document.getElementById("???").innerHTML = "Bem-vindo(a) " + user_name + "!";

/* Crie a função que acontece quando o botão da linha 39 (Kwitter.room.html) for clicado*/
//???
{
  //Adicione o nome do id da linha 36 do kwitter_room.html
  //Além disso, adicione o código 'value', pois você precisa pegar o texto que está dentro do input
  room_name = document.getElementById("???").???;

  //Utilize 'firebase.database().ref("/")' para enviar o nome da sala para o firebase
  ???.child(room_name).update({
    purpose : "adicionar sala"
  });

  /*Coloque o código que adiciona um item no localStorage
  Lembrando que você usou esse item no código 'kwitter.js'*/
    ???.setItem("room_name", room_name);
    
    /*Utilize o código ' window.location', pois ele abre uma nova tela*/
   ??? = "kwitter_page.html";
}

//Utilize o código 'firebase.database().ref("/")' para referenciar o firebase
function getData() { 
   ???.on('value', function(snapshot) {
     document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  
  //Utilize o código que envia um item para o localStorage
 ???("room_name", name);
 //Utilize o código que abre uma nova de tela
    ??? = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
//Acima, você programou que:
//Quando a função logout acontecer, você irá remover o nome do usuário
//Faça o mesmo com o nome da sala
//???
//Além disso, programe que:
//Abra uma nova tela e essa nova tela será a: 'index.html'
    window.location = "index.html";
}
