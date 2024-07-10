const resetPasswordForm = document.querySelector('#resetPasswordForm');

resetPasswordForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const token = resetPasswordForm.token.value
    const password = resetPasswordForm.password.value;
    try {
        const response = await fetch (`/api/users/reset-password/${token}`, {
            method: "post",
            body: JSON.stringify({  newPassword: password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.ok) {
            swal.fire({
                title: 'Constraseña Restablecida',
                text: 'Su contraseña fue modificada, será redirigido a su perfil!',
                icon: 'success'
            }).then(() => {
                window.location.href = '/userprofile'
            })
        }
    } catch (error) {
    }
})