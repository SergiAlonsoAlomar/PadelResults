<template>
  <div class="modal-backdrop" v-if="isOpen" @click="closeModal">
    <div class="modal-content" @click.stop>
      <div class="tournament-header">
        <div class="tournament-name">{{ tournament?.name }}</div>
        <div class="close-button" @click="closeModal">
          <ion-icon :icon="chevronDown"></ion-icon>
        </div>
      </div>
      
      <div class="event-details">
        <p class="date">{{ tournament?.date }}</p>
        <p class="location">Ubicación: {{ tournament?.location }}</p>
        <p class="description">{{ tournament?.description }}</p>
        <div class="highlights">
          <h3>Lo más destacado:</h3>
          <ul>
            <li>Los mejores jugadores del mundo compitiendo.</li>
            <li>Actividades para toda la familia.</li>
            <li>Puestos de comida y música en vivo.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IonIcon } from '@ionic/vue';
import { chevronDown } from 'ionicons/icons';

defineProps<{
  isOpen: boolean;
  tournament: {
    name: string;
    date: string;
    location: string;
    description: string;
  } | null;
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

.event-details {
  padding: 20px;
}

.date {
  font-size: 1.2rem;
  font-weight: bold;
  color: #c3ff00;
}

.location {
  font-size: 1rem;
  color: #f8faef;
  margin-top: 10px;
}

.description {
  font-size: 1rem;
  line-height: 1.6;
  margin-top: 20px;
}

.highlights {
  margin-top: 30px;
}

.highlights h3 {
  font-size: 1.1rem;
  color: #c3ff00;
  margin-bottom: 10px;
}

.highlights ul {
  list-style-type: disc;
  padding-left: 20px;
}

.highlights li {
  font-size: 1rem;
  line-height: 1.6;
  color: #f8faef;
}
</style>