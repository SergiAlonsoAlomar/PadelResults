<template>
  <ion-page>
    <ion-content class="ion-padding" :style="{ '--background': '#2e2e34' }">
      <div class="forgot-password-container">
        <!-- Logo -->
        <div class="logo">
          <span class="logo-text">
            <span class="padel">PADEL</span><span class="results">RESULTS</span>
          </span>
          <ion-icon :icon="tennisball" class="tennis-ball"></ion-icon>
        </div>

        <!-- Forgot password text -->
        <h1>Forgot your password?</h1>
        <p class="instructions">
          Enter your email to receive password reset instructions.
        </p>

        <!-- Forgot password form -->
        <form @submit.prevent="handleResetPassword">
          <ion-item>
            <ion-icon :icon="mailOutline" slot="start"></ion-icon>
            <ion-input
              type="email"
              placeholder="Email"
              v-model="email"
            ></ion-input>
          </ion-item>

          <ion-button expand="block" type="submit">Send</ion-button>
        </form>
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
  IonIcon,
} from '@ionic/vue';
import {
  mailOutline,
  tennisball,
} from 'ionicons/icons';
import { useRouter } from 'vue-router';

const email = ref('');
const router = useRouter();

const handleResetPassword = () => {
  // Implement password reset logic here
  console.log('Password reset attempt for email:', email.value);
  
  // Después de enviar el correo, redirige a la página de verificación
  router.push('/verification-code');
};
</script>

<style scoped>
.forgot-password-container {
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
  margin-bottom: 3rem;
}

.logo-text {
  font-size: 2.5rem;
  font-weight: bold;
  font-style: italic;
}

.padel {
  color: white;
}

.results {
  color: #c3ff00;
}

.tennis-ball {
  font-size: 30px;
  margin-left: 5px;
  color: #c3ff00;
}

h1 {
  color: white;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
}

.instructions {
  color: white;
  text-align: center;
  margin-bottom: 3rem;
  font-size: 1.1rem;
}

form {
  width: 100%;
}

ion-item {
  --background: transparent;
  --border-color: #c3ff00;
  --border-radius: 25px;
  --border-width: 1px;
  --padding-start: 16px;
  margin-bottom: 1rem;
}

ion-input {
  --color: white;
  --placeholder-color: rgba(255, 255, 255, 0.6);
}

ion-icon {
  color: rgba(255, 255, 255, 0.6);
}

ion-button {
  --background: #c3ff00;
  --color: #1a1d0e;
  --border-radius: 25px;
  margin-top: 1rem;
  font-weight: bold;
}

/* Estilos adicionales para mejorar la apariencia en dispositivos móviles */
@media (max-width: 768px) {
  .forgot-password-container {
    padding: 10px;
  }

  .logo-text {
    font-size: 2rem;
  }

  h1 {
    font-size: 2rem;
  }

  .instructions {
    font-size: 1rem;
  }
}
</style>