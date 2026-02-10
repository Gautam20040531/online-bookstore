import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase-init.js';

const loginForm = document.getElementById('login-form');
const errorMessageElement = document.getElementById('error-message');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = loginForm.email.value;
    const password = loginForm.password.value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        // Signed in 
        const user = userCredential.user;
        console.log('User logged in:', user);
        window.location.href = 'profile.html'; // Redirect to profile page on successful login
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`Error (${errorCode}):`, errorMessage);
        errorMessageElement.textContent = "Invalid email or password. Please try again."; // A more user-friendly message
        errorMessageElement.style.display = 'block';
    }
});