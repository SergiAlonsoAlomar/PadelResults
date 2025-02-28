<template>
  <ion-page>
    <ion-content class="ion-padding" :style="{ '--background': '#2e2e34' }">
      <div class="login-container">
        <!-- Logo -->
        <div class="logo">
          <span class="logo-text">
            <span class="padel">PADEL</span><span class="results">RESULTS</span>
          </span>
          <ion-icon :icon="tennisball" class="tennis-ball"></ion-icon>
        </div>

        <!-- Welcome text -->
        <h1>Welcome back!</h1>

        <!-- Login form -->
        <form @submit.prevent="handleLogin">
          <ion-item>
            <ion-icon :icon="personOutline" slot="start"></ion-icon>
            <ion-input
              type="text"
              placeholder="Username"
              v-model="username"
            ></ion-input>
          </ion-item>

          <ion-item>
            <ion-icon :icon="lockClosedOutline" slot="start"></ion-icon>
            <ion-input
              type="password"
              placeholder="Password"
              v-model="password"
            ></ion-input>
          </ion-item>

          <ion-button expand="block" type="submit">Sign In</ion-button>

          <ion-text>
            <p class="forgot-password">
              <a href="/forgot-password">Forgot password?</a>
            </p>
          </ion-text>
        </form>

        <!-- Social login -->
        <div class="social-login">
          <ion-text>
            <p>Sign in with</p>
          </ion-text>
          <div class="social-buttons">
            <img src="@/assets/google-icon.png" alt="Google" class="social-icon" />
            <img src="@/assets/facebook-icon.png" alt="Facebook" class="social-icon" />
          </div>
        </div>

        <!-- Sign up link -->
        <ion-text>
          <p class="sign-up">
            Don't have an account? <a href="/register">Sign Up</a>
          </p>
        </ion-text>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
  IonPage,
  IonContent,
  IonItem,
  IonInput,
  IonButton,
  IonText,
  IonIcon,
} from '@ionic/vue';
import {
  personOutline,
  lockClosedOutline,
  tennisball,
} from 'ionicons/icons';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref('');
const password = ref('');

const handleLogin = () => {
  // Aquí puedes agregar la lógica de autenticación si es necesario
  console.log('Login attempt', { username: username.value, password: password.value });

  // Redirigir a la página de torneos
  router.push('/tournaments');
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  max-width: 320px;
  margin: 0 auto;
  padding: 20px;
}

.logo {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

.logo-text {
  font-size: 2.5rem;
  font-weight: bold;
  font-style: italic;
}

.padel {
  color: #f8faef; /* Blanco */
}

.results {
  color: #c3ff00; /* Verde lima */
}

.tennis-ball {
  font-size: 30px;
  margin-left: 5px;
  color: #c3ff00; /* Verde lima */
}

h1 {
  color: #f8faef; /* Blanco */
  font-size: 2rem;
  margin-bottom: 2rem;
}

form {
  width: 100%;
}

ion-item {
  --background: transparent;
  --border-color: #c3ff00; /* Verde lima */
  --border-radius: 25px;
  --border-width: 1px;
  --padding-start: 16px;
  margin-bottom: 1rem;
}

ion-input {
  --color: #f8faef; /* Blanco */
  --placeholder-color: rgba(248, 250, 239, 0.6); /* Blanco con 60% de opacidad */
}

ion-icon {
  color: rgba(248, 250, 239, 0.6); /* Blanco con 60% de opacidad */
}

ion-button {
  --background: #c3ff00; /* Verde lima */
  --color: #1a1d0e; /* Negro */
  --border-radius: 25px;
  margin-top: 1rem;
  font-weight: bold;
}

.forgot-password {
  text-align: center;
  margin-top: 1rem;
  color: #f8faef; /* Blanco */
}

.forgot-password a {
  color: #f8faef; /* Blanco */
  text-decoration: none;
}

.social-login {
  margin-top: 2rem;
  text-align: center;
}

.social-buttons {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  gap: 20px; /* Espacio entre los íconos */
}

.social-link {
  text-decoration: none;
  color: inherit; /* Mantener el color original del ícono */
}

.social-icon {
  width: 24px; /* Tamaño de los íconos */
  height: 24px;
}

.sign-up {
  text-align: center;
  margin-top: 2rem;
  color: #f8faef; /* Blanco */
}

.sign-up a {
  color: #c3ff00; /* Verde lima */
  text-decoration: none;
}

/* Estilos adicionales para mejorar la apariencia en dispositivos móviles */
@media (max-width: 768px) {
  .login-container {
    padding: 10px;
  }

  .logo-text {
    font-size: 2rem;
  }

  h1 {
    font-size: 2rem;
  }

  ion-button {
    margin-top: 0.5rem;
  }

  ion-icon {
    color: rgba(248, 250, 239);
  }

  .social-login {
    margin-top: 1rem;
  }

  .sign-up {
    margin-top: 1rem;
  }
}
</style>