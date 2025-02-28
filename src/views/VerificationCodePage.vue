<template>
    <ion-page>
      <ion-content class="ion-padding" :style="{ '--background': '#2e2e34' }">
        <div class="verification-container">
          <!-- Logo -->
          <div class="logo">
            <span class="logo-text">
              <span class="padel">PADEL</span><span class="results">RESULTS</span>
            </span>
            <ion-icon :icon="tennisball" class="tennis-ball"></ion-icon>
          </div>
  
          <!-- Verification text -->
          <h1>Email has been sent!</h1>
          <p class="instructions">
            Please check your inbox and introduce the code below.
          </p>
  
          <!-- Verification code input -->
          <div class="code-input-container">
            <input 
              v-for="(digit, index) in codeDigits" 
              :key="index"
              type="text" 
              maxlength="1" 
              v-model="codeDigits[index]"
              @input="onDigitInput($event, index)"
              @keydown="onKeyDown($event, index)"
              ref="digitInputs"
              class="code-digit"
            />
          </div>
  
          <!-- Submit button -->
          <ion-button expand="block" @click="verifyCode">Send</ion-button>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import {
    IonPage,
    IonContent,
    IonButton,
    IonIcon,
  } from '@ionic/vue';
  import {
    tennisball,
  } from 'ionicons/icons';
  import { useRouter } from 'vue-router';
  
  // Array to store each digit of the verification code
  const codeDigits = ref(['', '', '', '', '', '', '']);
  const digitInputs = ref<HTMLInputElement[]>([]);
  
  // Focus on the first input when component mounts
  onMounted(() => {
    if (digitInputs.value[0]) {
      digitInputs.value[0].focus();
    }
  });
  
  // Handle input in each digit field
  const onDigitInput = (event: Event, index: number) => {
    const input = event.target as HTMLInputElement;
    
    // Ensure only one character is entered
    if (input.value.length > 1) {
      input.value = input.value.slice(0, 1);
      codeDigits.value[index] = input.value;
    }
    
    // Move focus to next input if available
    if (input.value && index < codeDigits.value.length - 1) {
      digitInputs.value[index + 1].focus();
    }
  };
  
  // Handle keyboard navigation between inputs
  const onKeyDown = (event: KeyboardEvent, index: number) => {
    // Move to previous input on backspace if current is empty
    if (event.key === 'Backspace' && !codeDigits.value[index] && index > 0) {
      digitInputs.value[index - 1].focus();
    }
    
    // Move to next input on right arrow
    if (event.key === 'ArrowRight' && index < codeDigits.value.length - 1) {
      digitInputs.value[index + 1].focus();
    }
    
    // Move to previous input on left arrow
    if (event.key === 'ArrowLeft' && index > 0) {
      digitInputs.value[index - 1].focus();
    }
  };
  
  const router = useRouter();
  
  // Verify the entered code
  const verifyCode = () => {
    const code = codeDigits.value.join('');
    console.log('Verifying code:', code);
    
    // Aquí implementarías la lógica real de verificación
    // Si la verificación es exitosa, redirige a la página de restablecimiento de contraseña
    router.push('/reset-password');
  };
  </script>
  
  <style scoped>
  .verification-container {
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
  
  .code-input-container {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-bottom: 2rem;
    width: 100%;
  }
  
  .code-digit {
    width: 30px;
    height: 40px;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #c3ff00;
    color: white;
    font-size: 1.5rem;
    text-align: center;
    outline: none;
  }
  
  .code-digit:focus {
    border-bottom: 2px solid white;
  }
  
  ion-button {
    --background: #c3ff00;
    --color: #1a1d0e;
    --border-radius: 25px;
    font-weight: bold;
    width: 100%;
  }
  
  /* Estilos adicionales para mejorar la apariencia en dispositivos móviles */
  @media (max-width: 768px) {
    .verification-container {
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
    
    .code-digit {
      width: 25px;
      height: 35px;
      font-size: 1.2rem;
    }
  }
  </style>