async function deleteUser(email) {
    try {
        const response = await fetch(`/api/users/${email}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            const userElement = document.querySelector(`[data-email="${email}"]`);
            if (userElement) {
                userElement.remove();
            } else {
                console.error(`No se encontró elemento HTML para el usuario con email ${email}`);
            }
        } else {
            console.error(`No se pudo eliminar usuario con email: ${email}`);
        }
    } catch (error) {
        console.error('Error al eliminar usuario:', error);
    }
}

async function upgradeUser(email) {
    try {
        const response = await fetch (`/api/users/upgradeUser/${email}`, {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json',
            },
        })
        if (response.ok) {
            swal.fire({
                title: 'Rol del Usuario Modificado!',
                icon: 'success'
            })
        }
    } catch (error) {
        console.error('Error al modificar el rol: ', error);
    }
}


const cleanUserButton = document.getElementById("cleanUsers")

console.log(cleanUserButton)

cleanUserButton.addEventListener('click', async function() {
    try {
        const response = await fetch("/api/users/deleteUsers", {
            method: "DELETE" ,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.ok) {
            swal.fire({
                title: 'Usuarios eliminados',
                icon: 'success'
            })
        }

    } catch (error) {
        console.error('Error al eliminar usuarios: ', error);
        
    }
})