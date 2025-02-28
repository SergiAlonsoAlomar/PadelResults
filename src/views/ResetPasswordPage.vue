<template>
    <ion-page>
      <ion-content class="ion-padding" :style="{ '--background': '#2e2e34' }">
        <div class="reset-password-container">
          <!-- Logo -->
          <div class="logo">
            <span class="logo-text">
              <span class="padel">PADEL</span><span class="results">RESULTS</span>
            </span>
            <ion-icon :icon="tennisball" class="tennis-ball"></ion-icon>
          </div>
  
          <!-- Reset password text -->
          <h1>Reset your password</h1>
          <p class="instructions">
            Enter a new password below.
          </p>
  
          <!-- Reset password form -->
          <form @submit.prevent="handleResetPassword">
            <ion-item>
              <ion-icon :icon="lockClosedOutline" slot="start"></ion-icon>
              <ion-input
                type="password"
                placeholder="New Password"
                v-model="newPassword"
              ></ion-input>
            </ion-item>
  
            <ion-item>
              <ion-icon :icon="lockClosedOutline" slot="start"></ion-icon>
              <ion-input
                type="password"
                placeholder="Repeat password"
                v-model="confirmPassword"
              ></ion-input>
            </ion-item>
  
            <ion-button expand="block" type="submit" :disabled="!isFormValid">
              Reset password
            </ion-button>
          </form>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  import {
    IonPage,
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    IonIcon,
    toastController
  } from '@ionic/vue';
  import {
    lockClosedOutline,
    tennisball,
  } from 'ionicons/icons';
  import { useRouter } from 'vue-router';
  
  const newPassword = ref('');
  const confirmPassword = ref('');
  const router = useRouter();
  
  // Validate form
  const isFormValid = computed(() => {
    return newPassword.value.length >= 6 && newPassword.value === confirmPassword.value;
  });
  
  const presentToast = async (message: string, color: string) => {
    const toast = await toastController.create({
      message: message,
      duration: 3000,
      color: color
    });
    await toast.present();
  };
  
  const handleResetPassword = async () => {
    if (!isFormValid.value) {
      if (newPassword.value.length < 6) {
        await presentToast('Password must be at least 6 characters long', 'danger');
        return;
      }
      
      if (newPassword.value !== confirmPassword.value) {
        await presentToast('Passwords do not match', 'danger');
        return;
      }
    }
    
    // Implement password reset logic here
    console.log('Password reset with new password:', newPassword.value);
    
    await presentToast('Password has been reset successfully', 'success');
    
    // Redirect to login page after successful password reset
    setTimeout(() => {
      router.push('/login');
    }, 2000);
  };
  </script>
  
  <style scoped>
  .reset-password-container {
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
  
  ion-button[disabled] {
    --background: rgba(195, 255, 0, 0.5);
    --color: rgba(26, 29, 14, 0.5);
  }
  
  /* Estilos adicionales para mejorar la apariencia en dispositivos móviles */
  @media (max-width: 768px) {
    .reset-password-container {
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