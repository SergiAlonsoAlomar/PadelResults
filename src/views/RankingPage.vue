<template>
  <ion-page>
    <!-- Encabezado -->
    <ion-header class="ion-no-border">
      <div class="header">
        <h1>RANKING</h1>
      </div>
    </ion-header>

    <!-- Pestañas de categoría -->
    <div class="tabs">
      <div class="tab active">MEN</div>
      <div class="tab">WOMEN</div>
    </div>

    <!-- Lista deslizable de jugadores -->
    <ion-content>
      <div class="player-list">
        <div 
          class="player-item" 
          :class="{ 'first-player': player.position === 1 }"
          v-for="player in players" 
          :key="player.id"
          @click="showPlayerDetail(player)"
        >
          <div class="player-number">{{ player.position }}</div>
          <div class="player-name">{{ player.name }}</div>
          <div class="player-image">
            <img :src="player.image" :alt="player.name" />
          </div>
        </div>
      </div>
    </ion-content>

    <!-- Barra de navegación inferior -->
    <BottomNavBar />

    <!-- Modal de detalle del jugador -->
    <PlayerDetailModal 
      :is-open="isModalOpen" 
      :player="selectedPlayer"
      @close="closeModal"
    />
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonIcon, IonHeader } from '@ionic/vue';
import { 
  triangleOutline, 
  wifiOutline, 
  batteryFullOutline
} from 'ionicons/icons';
import { ref } from 'vue';
import PlayerDetailModal from './PlayerDetailModal.vue';
import BottomNavBar from '@/components/BottomNavBar.vue';

// Importar imágenes desde la carpeta assets
import PaquitoNavarro from '@/assets/PaquitoNavarro.png';
import DiNenno from '@/assets/DiNenno.png';
import Jugador from '@/assets/Jugador.png';

// Definir la interfaz para el jugador
interface Player {
  id: number;
  position: number;
  name: string;
  image: string;
  details?: {
    position: string;
    height: string;
    bornIn: string;
    dateOfBirth: string;
  };
  stats?: {
    matchesPlayed: number;
    won: number;
    lost: number;
    titles: number;
  };
  tournaments?: Array<{
    name: string;
    category: string;
    round: string;
    points: number;
  }>;
}

// Estado para el modal
const isModalOpen = ref(false);
const selectedPlayer = ref<Player | undefined>(undefined);

// Función para mostrar el detalle del jugador
const showPlayerDetail = (player: Player) => {
  selectedPlayer.value = {
    ...player,
    details: {
      position: player.position === 1 ? 'LEFT' : 'RIGHT',
      height: player.position === 1 ? '1.81' : '1.78',
      bornIn: player.position === 1 ? 'SEVILLA' : 'MADRID',
      dateOfBirth: player.position === 1 ? '10/2/1989' : '15/5/1990'
    },
    stats: {
      matchesPlayed: player.position === 1 ? 115 : 98,
      won: player.position === 1 ? 83 : 70,
      lost: player.position === 1 ? 32 : 28,
      titles: player.position === 1 ? 23 : 18
    },
    tournaments: player.position === 1 ? [
      {
        name: 'Barcelona',
        category: 'MAJOR',
        round: 'WINNER',
        points: 2000
      },
      {
        name: 'Zaragoza',
        category: 'P1',
        round: 'WINNER',
        points: 1000
      },
      {
        name: 'Madrid',
        category: 'P1',
        round: 'WINNER',
        points: 1000
      }
    ] : [
      {
        name: 'Barcelona',
        category: 'MAJOR',
        round: 'FINALIST',
        points: 1200
      },
      {
        name: 'Zaragoza',
        category: 'P1',
        round: 'SEMIFINAL',
        points: 500
      },
      {
        name: 'Madrid',
        category: 'P1',
        round: 'WINNER',
        points: 1000
      }
    ]
  };
  isModalOpen.value = true;
};

// Función para cerrar el modal
const closeModal = () => {
  isModalOpen.value = false;
};

// Datos de ejemplo para los jugadores
const players = ref<Player[]>([
  { 
    id: 1, 
    position: 1, 
    name: 'Paquito Navarro', 
    image: PaquitoNavarro 
  },
  { 
    id: 2, 
    position: 2, 
    name: 'Martin Di Nenno', 
    image: DiNenno 
  },
  { 
    id: 3, 
    position: 3, 
    name: 'Franco Stupaczuk', 
    image: Jugador 
  },
  { 
    id: 4, 
    position: 4, 
    name: 'Juan Lebron', 
    image: Jugador 
  },
  {
    id: 5,
    position: 5,
    name: 'Pablo Cardona',
    image: Jugador
  },
  { 
    id: 6, 
    position: 6, 
    name: 'Mike Yanguas', 
    image: Jugador 
  },
  { 
    id: 7, 
    position: 7, 
    name: 'Sanyo Gutierrez', 
    image: Jugador 
  },
  { 
    id: 8, 
    position: 8, 
    name: 'Jorge Nieto', 
    image: Jugador 
  },
  { 
    id: 9, 
    position: 9, 
    name: 'Migandro Ruiz', 
    image: Jugador 
  },
  { 
    id: 10, 
    position: 10, 
    name: 'Lucas Bergamini', 
    image: Jugador 
  }
]);
</script>

<style scoped>
/* Aplicar la fuente Knewave a todo el texto */
body {
  font-family: 'Knewave';
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
  color: black;
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
  font-style: italic;
  color: #1A1D0E;
  font-family: 'Knewave';
}

/* Pestañas */
.tabs {
  display: flex;
  background-color: #2e2e34;
  padding: 10px 20px;
}

.tab {
  flex: 1;
  text-align: center;
  padding: 10px;
  font-size: 1.2rem;
  color: #f8faef;
  font-family: 'Knewave';
}

.tab.active {
  background-color: #c3ff00;
  border-radius: 5px;
  color: black;
}

/* Lista de jugadores */
ion-content {
  --background: #2e2e34;
  --padding-bottom: 70px; /* Asegurar que el contenido no sea tapado por el menú inferior */
}

.player-list {
  padding: 10px;
}

.player-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  background-color: #1A1D0E;
  border-radius: 20px;
  padding: 10px;
  border: 2px solid #c3ff00;
  cursor: pointer;
}

.player-item.first-player {
  padding: 15px; /* Más grande para el primer jugador */
}

.player-number {
  font-size: 3rem;
  color: #c3ff00;
  width: 60px;
  text-align: center;
  font-family: 'Knewave';
}

.player-name {
  flex: 1;
  font-size: 1.8rem;
  font-style: italic;
  color: #f8faef;
  padding-left: 10px;
  font-family: 'Knewave';
}

.player-image {
  width: 60px; /* Tamaño reducido de las imágenes */
  height: 60px;
  border-radius: 5px;
  overflow: hidden;
}

.player-image img {
  width: fit-content;
  height: fit-content;
  object-fit: cover;
}

/* Estilos adicionales para el primer jugador */
.player-item.first-player .player-image {
  width: fit-content; /* Tamaño más grande para el primer jugador */
  height: fit-content;
}
</style>