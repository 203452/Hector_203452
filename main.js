function clickLogin(){
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;
    if(user == 'hector' && password == '1234'){
        window.open("index.html")
    }
    else{
        alert('Credenciales incorrectas');
    }
}

function sendParams() {

  const  con = require('./connect');

}

function addData() {
    // Crear query para INSERT, SELECT, UPDATE O DELETE
    const nombre = document.getElementById('nombre').value;
    const ap_pat = document.getElementById('apellido_pat').value;
    const ap_mat = document.getElementById('apellido_mat').value;
    const edad = document.getElementById('edad').value;

    $query = `INSERT INTO persona (nombre, apellido_pat, apellido_mat, edad) VALUES (${nombre},${ap_pat},${ap_mat},${edad} )`;

    con.query($query, function (err, rows, fields) {

        if (err) {
            console.log('Error Query');
            console.log(err);
            return;
        }

        console.log("Query exitoso", rows);
    });

    con.end(function () {
        // Conexión Finalizada 
    });

    // Input data conection database
}