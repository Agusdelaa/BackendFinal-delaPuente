const logoutButton = document.getElementById('logoutButton');

logoutButton.addEventListener('click', async function() {
    try {
        const response = await fetch('/api/sessions/logout', {
            method: 'GET'
        });

        if (response.ok) {
            window.location.href = '/userlogin';
        } else {
            const data = await response.json();
            console.log(data);
        }
    } catch (error) {
        console.error('Error al cerrar sesión: ', error);
    }
});


const recoveryButton = document.getElementById("recovery")

const emailToSend = document.getElementById("emailToSend")


recoveryButton.addEventListener('click' , async function() {
    try {
        const email = emailToSend.value
        const response = await fetch(`/api/users/password-recovery/${email}` , {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.ok) {
            swal.fire({
                title: 'Mail Enviado',
                text: 'Revisa la casilla de email!',
                icon: 'success'
            })
        }
    } catch (error) {
        console.error('Error al enviar el mail: ', error);
        
    }
})

