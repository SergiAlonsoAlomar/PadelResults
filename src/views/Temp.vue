<template>
  <ion-page>
    <!-- Header con fondo verde lima -->
    <ion-header class="ion-no-border">
      <div class="header">
        <h1>TOURNAMENTS</h1>
      </div>
    </ion-header>

    <!-- Contenido principal -->
    <ion-content :fullscreen="true" class="ion-padding">
      <!-- Contenedor desplazable para los torneos (60%) -->
      <div class="tournaments-scroll-container">
        <div class="tournaments-grid">
          <!-- Barcelona -->
          <div class="tournament-card" @click="goToTournamentDetail('barcelona')">
            <div class="card-content">
              <img src="@/assets/Barcelona.png" alt="Barcelona" class="city-image" />
            </div>
          </div>

          <!-- Zaragoza -->
          <div class="tournament-card" @click="goToTournamentDetail('zaragoza')">
            <div class="card-content">
              <img src="@/assets/Zaragoza.png" alt="Zaragoza" class="city-image" />
            </div>
          </div>

          <!-- Madrid -->
          <div class="tournament-card" @click="goToTournamentDetail('madrid')">
            <div class="card-content">
              <img src="@/assets/Madrid.png" alt="Madrid" class="city-image" />
            </div>
          </div>

          <!-- Toledo -->
          <div class="tournament-card" @click="goToTournamentDetail('toledo')">
            <div class="card-content">
              <img src="@/assets/Toledo.png" alt="Toledo" class="city-image" />
            </div>
          </div>

          <!-- Málaga -->
          <div class="tournament-card" @click="goToTournamentDetail('malaga')">
            <div class="card-content">
              <img src="@/assets/Malaga.png" alt="Málaga" class="city-image" />
            </div>
          </div>

          <!-- Sevilla -->
          <div class="tournament-card" @click="goToTournamentDetail('sevilla')">
            <div class="card-content">
              <img src="@/assets/Sevilla.png" alt="Sevilla" class="city-image" />
            </div>
          </div>

          <!-- Girona Master Final -->
          <div class="tournament-card girona-card" @click="goToTournamentDetail('girona')">
            <div class="card-content">
              <img src="@/assets/Girona.png" alt="Girona" class="city-image" />
            </div>
          </div>
        </div>
      </div>

      <!-- Mapa interactivo de España con marcadores (20%) -->
      <div class="map-container">
        <div id="map" ref="map"></div>
      </div>
    </ion-content>

    <!-- Barra de navegación inferior -->
    <BottomNavBar />

    <!-- Pop-up de información del torneo -->
    <DetailsTournamentModal 
      :is-open="isModalOpen" 
      :tournament="selectedTournament"
      @close="closeModal"
    />
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { 
  IonPage, 
  IonHeader, 
  IonContent, 
  IonIcon,
  IonModal,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton
} from '@ionic/vue';
import { useRouter } from 'vue-router';
import BottomNavBar from '@/components/BottomNavBar.vue';
import DetailsTournamentModal from '@/views/DetailsTournamentModal.vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const router = useRouter();
const isModalOpen = ref(false);
const selectedTournament = ref<{ name: string, date: string, location: string, description: string } | null>(null);

const tournaments = {
  barcelona: { name: 'Barcelona', date: '15 - 21 JANUARY', location: 'Barcelona, Spain', description: 'Torneo en Barcelona...' },
  madrid: { name: 'Madrid', date: '28 OCTOBER - 3 NOVEMBER', location: 'Madrid, Spain', description: 'Torneo en Madrid...' },
  toledo: { name: 'Toledo', date: '25 NOVEMBER - 1 DECEMBER', location: 'Toledo, Spain', description: 'Torneo en Toledo...' },
  zaragoza: { name: 'Zaragoza', date: '3 - 9 JUNE', location: 'Zaragoza, Spain', description: 'Torneo en Zaragoza...' },
  sevilla: { name: 'Sevilla', date: '9 - 15 DECEMBER', location: 'Sevilla, Spain', description: 'Torneo en Sevilla...' },
  malaga: { name: 'Málaga', date: '2 - 8 DECEMBER', location: 'Málaga, Spain', description: 'Torneo en Málaga...' },
  girona: { name: 'Girona Master Final', date: '23 - 29 DECEMBER', location: 'Girona, Spain', description: 'Torneo en Girona...' }
};

type TournamentKey = keyof typeof tournaments;

const showTournamentInfo = (city: TournamentKey) => {
  selectedTournament.value = tournaments[city];
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const goToTournamentDetail = (city: string) => {
  router.push(`/tournament/${city}`);
};

onMounted(() => {
  const map = L.map('map').setView([40.416775, -3.703790], 6); // Centrado en España

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
  }).addTo(map);

  const markers = [
    { city: 'barcelona', coords: [41.3851, 2.1734] },
    { city: 'madrid', coords: [40.4168, -3.7038] },
    { city: 'toledo', coords: [39.8628, -4.0273] },
    { city: 'zaragoza', coords: [41.6488, -0.8891] },
    { city: 'sevilla', coords: [37.3891, -5.9845] },
    { city: 'malaga', coords: [36.7213, -4.4213] },
    { city: 'girona', coords: [41.9794, 2.8214] }
  ];

  markers.forEach(marker => {
    L.marker(marker.coords).addTo(map)
      .on('click', () => showTournamentInfo(marker.city as TournamentKey));
  });
});
</script>

<style scoped>
/* Estilos generales */
ion-page {
  --background: #2e2e34;
  background-color: #2e2e34;
}

ion-content {
  --background: #2e2e34;
  --padding-bottom: 70px;
}

/* Estilos del encabezado */
.header {
  background-color: #c3ff00;
  padding: 10px 0 20px;
  text-align: center;
}

.header h1 {
  margin: 0;
  font-size: 2.5rem;
  font-style: italic;
  color: #1A1D0E;
  font-family: 'Knewave';
}

/* Contenedor desplazable para los torneos (60%) */
.tournaments-scroll-container {
  height: 55vh; /* 60% de la altura */
  overflow-y: auto;
  padding-right: 5px;
  margin-top: 15px;
}

/* Estilos de la cuadrícula de torneos */
.tournaments-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.tournament-card {
  position: relative;
  aspect-ratio: 1/1;
  border-radius: 20px;
  overflow: hidden;
  
}

.girona-card {
  grid-column: span 2;
}

.card-content {
  position: relative;
  width: fit-content;
  height: fit-content;
  overflow: hidden;
  border-radius: 20px;
}

.city-image {
  
  object-fit: cover;
}

/* Mapa interactivo de España (20%) */
.map-container {
  height: 20vh; /* 20% de la altura */
  border-radius: 15px;
  overflow: hidden;
  border: 2px solid #f8faef;
  margin-top: 20px;
}

#map {
  width: 100%;
  height: 100%;
}
</style>