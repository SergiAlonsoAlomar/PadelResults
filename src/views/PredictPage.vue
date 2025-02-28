<template>
  <ion-page>
    <!-- Encabezado -->
    <div class="header">
      <h1>PREDICT</h1>
    </div>

    <!-- Formulario de predicciones -->
    <ion-content>
      <!-- Botón de mis predicciones -->
      <div class="my-predictions-button-container">
        <button class="my-predictions-button" @click="showMyPredictions">
          MY PREDICTIONS
        </button>
      </div>
      <div class="predictions-form">
        <!-- Partido 1 -->
        <div class="match-container">
          <div class="team-option">
            <div class="radio-container">
              <input 
                type="radio" 
                id="match1-team1" 
                name="match1" 
                value="team1"
                v-model="predictions.match1"
                :disabled="predictionsSaved"
              />
              <label for="match1-team1" class="radio-label"></label>
            </div>
            <label for="match1-team1" class="team-name">Paquito Navarro & Pablo Cardona</label>
          </div>
          <div class="divider"></div>
          <div class="team-option">
            <div class="radio-container">
              <input 
                type="radio" 
                id="match1-team2" 
                name="match1" 
                value="team2"
                v-model="predictions.match1"
                :disabled="predictionsSaved"
              />
              <label for="match1-team2" class="radio-label"></label>
            </div>
            <label for="match1-team2" class="team-name">Pablo Araujo & Fernando Bela</label>
          </div>
        </div>

        <!-- Partido 2 -->
        <div class="match-container">
          <div class="team-option">
            <div class="radio-container">
              <input 
                type="radio" 
                id="match2-team1" 
                name="match2" 
                value="team1"
                v-model="predictions.match2"
                :disabled="predictionsSaved"
              />
              <label for="match2-team1" class="radio-label"></label>
            </div>
            <label for="match2-team1" class="team-name">Alejandra Salazar & Castello</label>
          </div>
          <div class="divider"></div>
          <div class="team-option">
            <div class="radio-container">
              <input 
                type="radio" 
                id="match2-team2" 
                name="match2" 
                value="team2"
                v-model="predictions.match2"
                :disabled="predictionsSaved"
              />
              <label for="match2-team2" class="radio-label"></label>
            </div>
            <label for="match2-team2" class="team-name">Ari Sanchez & Paula Jose Maria</label>
          </div>
        </div>

        <!-- Botón de guardar -->
        <div class="save-button-container" v-if="!predictionsSaved">
          <button 
            class="save-button" 
            @click="savePredictions" 
            :disabled="!allPredictionsMade"
          >
            SAVE
          </button>
        </div>
      </div>
    </ion-content>

    <!-- Barra de navegación inferior -->
    <BottomNavBar />

    <!-- Modal de mis predicciones -->
    <MyPredictionsModal 
      :is-open="isModalOpen" 
      @close="closeModal"
    />
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonIcon } from '@ionic/vue';
import { 
  triangleOutline, 
  wifiOutline, 
  batteryFullOutline
} from 'ionicons/icons';
import { ref, computed } from 'vue';
import MyPredictionsModal from '../views/MyPredictionsModal.vue';
import BottomNavBar from '@/components/BottomNavBar.vue';

// Estado para las predicciones
const predictions = ref({
  match1: '',
  match2: ''
});

// Estado para controlar si las predicciones ya fueron guardadas
const predictionsSaved = ref(false);

// Estado para el modal
const isModalOpen = ref(false);

// Computed para verificar si todas las predicciones fueron hechas
const allPredictionsMade = computed(() => {
  return predictions.value.match1 !== '' && predictions.value.match2 !== '';
});

// Función para guardar las predicciones
const savePredictions = () => {
  if (allPredictionsMade.value) {
    // Aquí podrías enviar las predicciones a un servidor
    // Por ahora, solo marcamos como guardadas
    predictionsSaved.value = true;
    
    // Guardar en localStorage para simular persistencia
    localStorage.setItem('predictions', JSON.stringify(predictions.value));
    localStorage.setItem('predictionsSaved', 'true');
  }
};

// Función para mostrar el modal de mis predicciones
const showMyPredictions = () => {
  isModalOpen.value = true;
};

// Función para cerrar el modal
const closeModal = () => {
  isModalOpen.value = false;
};

// Cargar predicciones guardadas al iniciar
const loadSavedPredictions = () => {
  const savedPredictions = localStorage.getItem('predictions');
  const savedStatus = localStorage.getItem('predictionsSaved');
  
  if (savedPredictions) {
    predictions.value = JSON.parse(savedPredictions);
  }
  
  if (savedStatus === 'true') {
    predictionsSaved.value = true;
  }
};

// Llamar a la función de carga al iniciar
loadSavedPredictions();
</script>

<style scoped>
/* Aplicar la fuente Knewave a todo el texto */
body {
  font-family: 'Knewave', cursive;
}

/* Colores principales de la aplicación */
:root {
  --primary-color: #c3ff00;
  --dark-bg: #2e2e34;
  --dark-accent: #1a1d0e;
  --light-text: #f8faef;
}

/* Barra de estado */
.status-bar {
  background-color: #c3ff00;
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  font-weight: bold;
  color: black;
  font-family: 'Knewave', cursive;
}

.status-icons {
  display: flex;
  gap: 10px;
}

/* Encabezado */
.header {
  background-color: #c3ff00;
  padding: 10px 0 20px;
  text-align: center;
}

.header h1 {
  margin: 0;
  font-size: 2.5rem;
  font-weight: 900;
  font-style: italic;
  color: #1A1D0E;
  font-family: 'Knewave', cursive;
}

/* Botón de mis predicciones */
.my-predictions-button-container {
  display: flex;
  justify-content: center;
  padding: 15px;
  background-color: #2e2e34;
}

.my-predictions-button {
  background-color: #c3ff00;
  color: black;
  border: none;
  border-radius: 10px;
  padding: 12px 20px;
  font-size: 1.2rem;
  font-style: italic;
  width: 80%;
  cursor: pointer;
  font-family: 'Knewave', cursive;
}

/* Contenido principal */
ion-content {
  --background: #2e2e34;
}

.predictions-form {
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
}

/* Contenedor de partido */
.match-container {
  background-color: #1a1d0e;
  border-radius: 15px;
  overflow: hidden;
}

/* Opción de equipo */
.team-option {
  display: flex;
  align-items: center;
  padding: 15px;
}

/* Radio button personalizado */
.radio-container {
  position: relative;
  width: 30px;
  height: 30px;
  margin-right: 15px;
}

input[type="radio"] {
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.radio-label {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid white;
  border-radius: 50%;
  background-color: transparent;
}

input[type="radio"]:checked + .radio-label {
  background-color: white;
}

input[type="radio"]:disabled + .radio-label {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Nombre del equipo */
.team-name {
  color: white;
  font-size: 1.2rem;
  font-style: italic;
  font-family: 'Knewave', cursive;
}

/* Divisor entre equipos */
.divider {
  height: 2px;
  background-color: #c3ff00;
  margin: 0 15px;
}

/* Botón de guardar */
.save-button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.save-button {
  background-color: #c3ff00;
  color: black;
  border: none;
  border-radius: 10px;
  padding: 12px 40px;
  font-size: 1.5rem;
  font-style: italic;
  cursor: pointer;
  font-family: 'Knewave', cursive;
}

.save-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>