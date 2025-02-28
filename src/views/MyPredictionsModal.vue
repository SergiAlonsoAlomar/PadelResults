<template>
    <div class="modal-backdrop" v-if="isOpen" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="tournament-header">
          <div class="tournament-name">TOLEDO P1</div>
          <div class="close-button" @click="closeModal">
            <ion-icon :icon="chevronDown"></ion-icon>
          </div>
        </div>
        
        <!-- Partido 1 -->
        <div class="match-container">
          <div class="team-option" :class="{ 'selected': true, 'correct': true }">
            <div class="radio-container">
              <div class="radio-selected"></div>
            </div>
            <div class="team-name">Paquito Navarro & Pablo Cardona</div>
            <div class="result-icon correct">
              <ion-icon :icon="checkmarkCircle"></ion-icon>
            </div>
          </div>
          <div class="divider"></div>
          <div class="team-option">
            <div class="radio-container">
              <div class="radio-unselected"></div>
            </div>
            <div class="team-name">Javier Leal & Maxi Gomez</div>
          </div>
        </div>
        
        <!-- Partido 2 -->
        <div class="match-container">
          <div class="team-option">
            <div class="radio-container">
              <div class="radio-unselected"></div>
            </div>
            <div class="team-name">Pablo Araujo & Fernando Bela</div>
          </div>
          <div class="divider"></div>
          <div class="team-option" :class="{ 'selected': true, 'incorrect': true }">
            <div class="radio-container">
              <div class="radio-selected"></div>
            </div>
            <div class="team-name">Eduardo Alonso & Di Nenno</div>
            <div class="result-icon incorrect">
              <ion-icon :icon="closeCircle"></ion-icon>
            </div>
          </div>
        </div>
        
        <!-- Partido 3 -->
        <div class="match-container">
          <div class="team-option" :class="{ 'selected': true, 'correct': true }">
            <div class="radio-container">
              <div class="radio-selected"></div>
            </div>
            <div class="team-name">Ari Sanchez & Paula Jose Maria</div>
            <div class="result-icon correct">
              <ion-icon :icon="checkmarkCircle"></ion-icon>
            </div>
          </div>
          <div class="divider"></div>
          <div class="team-option">
            <div class="radio-container">
              <div class="radio-unselected"></div>
            </div>
            <div class="team-name">Delfi Brea & Bea Gonzalez</div>
          </div>
        </div>
        
        <!-- Partido 4 -->
        <div class="match-container">
          <div class="team-option" :class="{ 'selected': true, 'correct': true }">
            <div class="radio-container">
              <div class="radio-selected"></div>
            </div>
            <div class="team-name">Alejandra Salazar & Castello</div>
            <div class="result-icon correct">
              <ion-icon :icon="checkmarkCircle"></ion-icon>
            </div>
          </div>
          <div class="divider"></div>
          <div class="team-option">
            <div class="radio-container">
              <div class="radio-unselected"></div>
            </div>
            <div class="team-name">Gemma Triay & Fernandez</div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps, defineEmits } from 'vue';
  import { IonIcon } from '@ionic/vue';
  import { chevronDown, checkmarkCircle, closeCircle } from 'ionicons/icons';
  
  const props = defineProps<{
    isOpen: boolean;
  }>();
  
  const emit = defineEmits<{
    (e: 'close'): void;
  }>();
  
  const closeModal = () => {
    emit('close');
  };
  </script>
  
  <style scoped>
/* Estilos generales */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  width: 90%;
  max-width: 400px;
  background-color: #2e2e34;
  border-radius: 20px;
  overflow: hidden;
  max-height: 90vh;
  overflow-y: auto;
}

/* Aplicar la fuente Knewave */
.tournament-header,
.team-name {
  font-family: 'Knewave', cursive; /* Fuente Knewave con fallback a cursive */
}

.tournament-header {
  background-color: #c3ff00;
  padding: 15px;
  display: flex;
  justify-content: center; /* Centrar el contenido */
  align-items: center;
  position: relative; /* Necesario para el posicionamiento absoluto del botón de cierre */
}

.tournament-name {
  font-size: 1.5rem;
  font-weight: bold;
  font-style: italic;
  color: #1a1d0e;
  text-align: center; /* Centrar el texto */
  flex: 1; /* Ocupar todo el espacio disponible */
}

.close-button {
  cursor: pointer;
  font-size: 1.5rem;
  position: absolute; /* Posicionamiento absoluto */
  right: 15px; /* Distancia desde la derecha */
  top: 50%; /* Centrar verticalmente */
  transform: translateY(-50%); /* Ajuste fino para centrar verticalmente */
}

.close-button ion-icon {
  color: #1a1d0e;
}

.match-container {
  background-color: #1a1d0e;
  margin: 15px;
  border-radius: 15px;
  overflow: hidden;
}

.team-option {
  display: flex;
  align-items: center;
  padding: 15px;
  position: relative;
}

.team-option.selected {
  background-color: #1a1d0e;
}

.radio-container {
  width: 30px;
  height: 30px;
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.radio-selected {
  width: 30px;
  height: 30px;
  border: 2px solid white;
  border-radius: 50%;
  background-color: white;
}

.radio-unselected {
  width: 30px;
  height: 30px;
  border: 2px solid white;
  border-radius: 50%;
  background-color: transparent;
}

.team-name {
  color: white;
  font-size: 1.2rem;
  font-style: italic;
  flex: 1;
}

.result-icon {
  font-size: 1.8rem;
  margin-left: 10px;
}

.result-icon.correct {
  color: #c3ff00;
}

.result-icon.incorrect {
  color: #ff0000;
}

.divider {
  height: 2px;
  background-color: #c3ff00;
  margin: 0 15px;
}
</style>