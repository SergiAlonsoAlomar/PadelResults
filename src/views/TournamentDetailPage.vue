<template>
  <ion-page>
    <!-- Header con fondo verde lima -->
    <ion-header class="ion-no-border">
      <div class="header">
        <h1>{{ tournamentName }}</h1>
      </div>
    </ion-header>

    <ion-content :fullscreen="true">
      <!-- Botón de regreso -->
      <div class="back-button" @click="goBack">
        <ion-icon :icon="arrowBack"></ion-icon>
        <span>BACK</span>
      </div>

      <!-- Pestañas de género -->
      <div class="gender-tabs">
        <div 
          class="tab" 
          :class="{ active: activeTab === 'men' }" 
          @click="activeTab = 'men'"
        >
          MEN
        </div>
        <div 
          class="tab" 
          :class="{ active: activeTab === 'women' }" 
          @click="activeTab = 'women'"
        >
          WOMEN
        </div>
      </div>

      <!-- Contenido basado en datos disponibles -->
      <div v-if="hasData" class="matches-container">
        <!-- Barcelona -->
        <div v-if="tournamentId === 'barcelona'" class="match-group">
          <!-- Partido 1 -->
          <div class="match-card">
            <div class="team">
              <div class="player">
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Padel_Results-gXOYrCwnTIbHOL9jybISIvHInVQoKY.png" alt="Spain flag" class="flag" />
                <span class="player-name">Mike Yanguas</span>
              </div>
              <div class="player">
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Padel_Results-gXOYrCwnTIbHOL9jybISIvHInVQoKY.png" alt="Argentina flag" class="flag argentina" />
                <span class="player-name">Stupaczuk</span>
              </div>
            </div>
            <div class="score">
              <div class="point active"></div>
              <div class="set">6</div>
              <div class="set">2</div>
              <div class="set">0</div>
            </div>
          </div>
          <div class="separator"></div>
          <div class="match-card">
            <div class="team">
              <div class="player">
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Padel_Results-gXOYrCwnTIbHOL9jybISIvHInVQoKY.png" alt="Brazil flag" class="flag brazil" />
                <span class="player-name">Pablo Lima</span>
              </div>
              <div class="player">
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Padel_Results-gXOYrCwnTIbHOL9jybISIvHInVQoKY.png" alt="Spain flag" class="flag" />
                <span class="player-name">Juan Lebron</span>
              </div>
            </div>
            <div class="score">
              <div class="point active"></div>
              <div class="set">4</div>
              <div class="set">6</div>
              <div class="set">6</div>
            </div>
          </div>
          <div class="next-round">
            <div class="arrow">»</div>
          </div>
        </div>

        <!-- Más partidos para Barcelona -->
        <div class="match-group">
          <div class="match-card">
            <div class="team">
              <div class="player">
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Padel_Results-gXOYrCwnTIbHOL9jybISIvHInVQoKY.png" alt="Spain flag" class="flag" />
                <span class="player-name">Javier Leal</span>
              </div>
              <div class="player">
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Padel_Results-gXOYrCwnTIbHOL9jybISIvHInVQoKY.png" alt="Argentina flag" class="flag argentina" />
                <span class="player-name">Maxi Gomez</span>
              </div>
            </div>
            <div class="score">
              <div class="point"></div>
              <div class="set">0</div>
              <div class="set">0</div>
              <div class="set">-</div>
            </div>
          </div>
          <div class="separator"></div>
          <div class="match-card">
            <div class="team">
              <div class="player">
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Padel_Results-gXOYrCwnTIbHOL9jybISIvHInVQoKY.png" alt="Spain flag" class="flag" />
                <span class="player-name">Paquito Navarro</span>
              </div>
              <div class="player">
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Padel_Results-gXOYrCwnTIbHOL9jybISIvHInVQoKY.png" alt="Spain flag" class="flag" />
                <span class="player-name">Pablo Cardona</span>
              </div>
            </div>
            <div class="score">
              <div class="point active"></div>
              <div class="set">6</div>
              <div class="set">6</div>
              <div class="set">-</div>
            </div>
          </div>
          <div class="next-round">
            <div class="arrow">»</div>
          </div>
        </div>

        <!-- Toledo -->
        <div v-if="tournamentId === 'toledo'" class="match-group">
          <!-- Partido 1 -->
          <div class="match-card">
            <div class="team">
              <div class="player">
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Padel_Results-BIvWLufUHQrzEUlK1jGRfD0qNchlxZ.png" alt="Spain flag" class="flag" />
                <span class="player-name">Arturo Coello</span>
              </div>
              <div class="player">
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Padel_Results-BIvWLufUHQrzEUlK1jGRfD0qNchlxZ.png" alt="Argentina flag" class="flag argentina" />
                <span class="player-name">Agustin Tapia</span>
              </div>
            </div>
            <div class="score">
              <div class="point active"></div>
              <div class="set">6</div>
              <div class="set">6</div>
              <div class="set">-</div>
            </div>
          </div>
          <div class="separator"></div>
          <div class="match-card">
            <div class="team">
              <div class="player">
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Padel_Results-BIvWLufUHQrzEUlK1jGRfD0qNchlxZ.png" alt="Spain flag" class="flag" />
                <span class="player-name">Alejandro Ruiz</span>
              </div>
              <div class="player">
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Padel_Results-BIvWLufUHQrzEUlK1jGRfD0qNchlxZ.png" alt="Spain flag" class="flag" />
                <span class="player-name">Jon Sanz</span>
              </div>
            </div>
            <div class="score">
              <div class="point"></div>
              <div class="set">4</div>
              <div class="set">4</div>
              <div class="set">-</div>
            </div>
          </div>
          <div class="next-round">
            <div class="arrow">»</div>
          </div>
        </div>
      </div>

      <!-- Sin datos -->
      <div v-else class="no-data">
        <h2>SIN DATOS</h2>
        <p>PARTICIPANTES POR DEFINIR</p>
      </div>

      <!-- Rondas -->
      <div class="rounds">
        <div class="round active">R16</div>
        <div class="round">QF</div>
        <div class="round">SF</div>
        <div class="round">FINAL</div>
      </div>
    </ion-content>

    <!-- Barra de navegación inferior -->
    <BottomNavBar />
  </ion-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { 
  IonPage, 
  IonHeader, 
  IonContent, 
  IonIcon
} from '@ionic/vue';
import { 
  arrowBackOutline as arrowBack
} from 'ionicons/icons';
import { useRouter, useRoute } from 'vue-router';
import BottomNavBar from '@/components/BottomNavBar.vue';

const router = useRouter();
const route = useRoute();
const activeTab = ref('men');

// Obtener el ID del torneo de los parámetros de la ruta
const tournamentId = computed(() => {
  const id = route.params.id as string;
  if (!id) {
    router.push('/tournaments'); // Redirige si no hay un ID válido
    return '';
  }
  return id;
});

// Determinar si hay datos disponibles para este torneo
const hasData = computed(() => {
  return tournamentId.value && ['barcelona', 'toledo'].includes(tournamentId.value);
});

// Obtener el nombre del torneo basado en el ID
const tournamentName = computed(() => {
  const names: Record<string, string> = {
    'barcelona': 'BARCELONA MAJOR',
    'madrid': 'MADRID OPEN',
    'toledo': 'TOLEDO P1',
    'zaragoza': 'ZARAGOZA MASTER',
    'sevilla': 'SEVILLA OPEN',
    'malaga': 'MALAGA MASTER',
    'girona': 'GIRONA MASTER FINAL'
  };
  return names[tournamentId.value] || 'TORNEO DESCONOCIDO'; // Valor predeterminado
});

// Funciones de navegación
const goBack = () => {
  router.go(-1); // Vuelve a la página anterior
};
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

/* Estilos de la barra de estado */
.status-bar {
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  background-color: #c3ff00;
  color: #2e2e34;
  font-weight: bold;
}

.time {
  font-size: 1.2rem;
}

.icons {
  display: flex;
  gap: 10px;
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
  font-weight: 900;
  font-style: italic;
  color: #1A1D0E;
}

/* Botón de regreso */
.back-button {
  display: inline-flex;
  align-items: center;
  background-color: #c3ff00;
  color: #2e2e34;
  padding: 8px 15px;
  border-radius: 20px;
  margin: 15px;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
}

.back-button ion-icon {
  margin-right: 5px;
}

/* Pestañas de género -->*/
.gender-tabs {
  display: flex;
  margin: 15px;
  background-color: #2e2e34;
  border-radius: 20px;
  overflow: hidden;
}

.tab {
  flex: 1;
  text-align: center;
  padding: 10px;
  font-weight: bold;
  font-size: 1.5rem;
  color: #f8faef;
  cursor: pointer;
}

.tab.active {
  background-color: #c3ff00;
  color: #2e2e34;
}

/* Contenedor de partidos -->*/
.matches-container {
  padding: 0 15px;
}

.match-group {
  background-color: #1a1d0e;
  border-radius: 15px;
  margin-bottom: 20px;
  overflow: hidden;
  position: relative;
}

.match-card {
  display: flex;
  justify-content: space-between;
  padding: 15px;
}

.team {
  flex: 1;
}

.player {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.flag {
  width: 30px;
  height: 20px;
  margin-right: 10px;
  object-fit: cover;
}

.flag.argentina {
  background-color: #75aadb;
}

.flag.brazil {
  background-color: #009c3b;
}

.player-name {
  color: #f8faef;
  font-weight: bold;
  font-style: italic;
  font-size: 1.2rem;
}

.score {
  display: flex;
  align-items: center;
}

.point {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 15px;
}

.point.active {
  background-color: #c3ff00;
}

.set {
  width: 25px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #f8faef;
}

.separator {
  height: 2px;
  background-color: rgba(195, 255, 0, 0.3);
  margin: 0 15px;
}

.next-round {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.arrow {
  width: 40px;
  height: 40px;
  background-color: #c3ff00;
  color: #2e2e34;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  font-weight: bold;
  margin-right: -20px;
}

/* Sin datos -->*/
.no-data {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
  color: #c3ff00;
  text-align: center;
}

.no-data h2 {
  font-size: 3rem;
  font-weight: 900;
  font-style: italic;
  margin-bottom: 20px;
}

.no-data p {
  font-size: 1.5rem;
  font-weight: bold;
}

/* Rondas -->*/
.rounds {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  position: fixed;
  bottom: 70px;
  left: 0;
  right: 0;
}

.round {
  font-weight: bold;
  color: #f8faef;
  padding: 5px 10px;
}

.round.active {
  background-color: #c3ff00;
  color: #2e2e34;
  border-radius: 5px;
}
</style>