<template>
  <ion-page>
    <ion-content class="ion-padding" :style="{ '--background': '#2e2e34' }">
      <div class="register-container">
        <!-- Logo -->
        <div class="logo">
          <span class="logo-text">
            <span class="padel">PADEL</span><span class="results">RESULTS</span>
          </span>
          <ion-icon :icon="tennisball" class="tennis-ball"></ion-icon>
        </div>

        <!-- Get Started text -->
        <h1>Get Started</h1>

        <!-- Register form -->
        <form @submit.prevent="handleRegister">
          <ion-item>
            <ion-icon :icon="personOutline" slot="start"></ion-icon>
            <ion-input
              type="text"
              placeholder="Name"
              v-model="name"
            ></ion-input>
          </ion-item>

          <ion-item>
            <ion-icon :icon="lockClosedOutline" slot="start"></ion-icon>
            <ion-input
              type="text"
              placeholder="Username"
              v-model="username"
            ></ion-input>
          </ion-item>

          <ion-item>
            <ion-icon :icon="mailOutline" slot="start"></ion-icon>
            <ion-input
              type="email"
              placeholder="Email"
              v-model="email"
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

          <ion-button expand="block" type="submit">Sign Up</ion-button>
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

        <!-- Login link -->
        <ion-text>
          <p class="login-link">
            Already have an account? <a href="/login">Sign In</a>
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
  mailOutline,
} from 'ionicons/icons';
import { useRouter } from 'vue-router'; // Importar useRouter

const router = useRouter(); // Obtener el enrutador

const name = ref('');
const username = ref('');
const email = ref('');
const password = ref('');

const handleRegister = () => {
  // Implement registration logic here
  console.log('Registration attempt', {
    name: name.value,
    username: username.value,
    email: email.value,
    password: password.value
  });

  // Redirigir a la página de torneos
  router.push('/tournaments');
};
</script>

<style scoped>
.register-container {
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

.social-login {
  margin-top: 2rem;
  text-align: center;
}

.social-login p {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f8faef; /* Blanco */
}

.social-login p::before,
.social-login p::after {
  content: "";
  flex: 1;
  height: 1px;
  background-color: rgba(248, 250, 239, 0.3); /* Blanco con 30% de opacidad */
  margin: 0 10px;
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

.login-link {
  text-align: center;
  margin-top: 2rem;
  color: #f8faef; /* Blanco */
}

.login-link a {
  color: #c3ff00; /* Verde lima */
  text-decoration: none;
}

/* Estilos adicionales para mejorar la apariencia en dispositivos móviles */
@media (max-width: 768px) {
  .register-container {
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
    color: rgba(248, 250, 239); /* Blanco con 60% de opacidad */
  }

  .social-login {
    margin-top: 1rem;
  }

  .login-link {
    margin-top: 1rem;
  }
}
</style>