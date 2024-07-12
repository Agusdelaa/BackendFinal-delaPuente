async function addToCart(productId, cartId, quantity, ownerId, userId) {
    try {
        quantity = parseInt(quantity);

        if (!cartId) {
            window.location.replace('/userlogin');
            return;
        }

        if (ownerId === userId) {
            swal.fire({
                title: 'No Fue Posible Agregar El producto',
                text: 'No puedes agregar Productos de tu propiedad',
                icon: 'error'
            })
            return;
        }
        
        const response = await fetch(`/api/cart/${cartId}/products/${productId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ quantity })
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('No se pudo agregar producto al carrito:', errorData);
        } else {
            swal.fire({
                title: 'Producto Agregado',
                icon: 'success'
            })
        }

    } catch (error) {
        console.error('Error al agregar producto al carrito:', error);
    }
}

async function deleteProduct(productId) {
    try {
        const response = await fetch(`/api/products/${productId}` , {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (!response.ok) {
            const errorData = await response.json();
            console.error('No se pudo eliminar el producto', errorData);
        } else {
            swal.fire({
                title: 'Producto Eliminado',
                icon: 'success'
            }).then(()=> {
                location.reload();
            })
        }
    } catch (error) {
        
    }
}


    


