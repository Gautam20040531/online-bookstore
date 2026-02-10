import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase-init.js';

const registerForm = document.getElementById('register-form');
const errorMessageElement = document.getElementById('error-message');

registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = registerForm.email.value;
    const password = registerForm.password.value;
    const confirmPassword = registerForm.confirmpassword.value;

    // Basic validation
    if (password !== confirmPassword) {
        errorMessageElement.textContent = "Passwords do not match.";
        errorMessageElement.style.display = 'block';
        return;
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // Signed in 
        const user = userCredential.user;
        console.log('User registered:', user);
        
        // TODO: Save additional user info (fullname, mobile, address) to a database like Firestore.

        alert('Registration successful! Please login.');
        window.location.href = 'login.html';

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`Error (${errorCode}):`, errorMessage);
        errorMessageElement.textContent = errorMessage;
        errorMessageElement.style.display = 'block';
    }
});