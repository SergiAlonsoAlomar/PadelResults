<template>
    <ion-footer class="nav-footer">
      <div class="nav-bar">
        <!-- Tournaments -->
        <div class="nav-item" @click="navigateTo('/tournaments')">
          <div v-if="currentRoute === '/tournaments'" class="center-button">
            <ion-icon :icon="trophy" class="active-icon"></ion-icon>
          </div>
          <template v-else>
            <ion-icon :icon="trophy"></ion-icon>
            <div class="nav-label">Tournaments</div>
          </template>
        </div>
  
        <!-- Ranking -->
        <div class="nav-item" @click="navigateTo('/ranking')">
          <div v-if="currentRoute === '/ranking'" class="center-button">
            <ion-icon :icon="podium" class="active-icon"></ion-icon>
          </div>
          <template v-else>
            <ion-icon :icon="podium"></ion-icon>
            <div class="nav-label">Ranking</div>
          </template>
        </div>
  
        <!-- Predict -->
        <div class="nav-item" @click="navigateTo('/predict')">
          <div v-if="currentRoute === '/predict'" class="center-button">
            <ion-icon :icon="gameController" class="active-icon"></ion-icon>
          </div>
          <template v-else>
            <ion-icon :icon="gameController"></ion-icon>
            <div class="nav-label">Predict</div>
          </template>
        </div>
  
        <!-- News -->
        <div class="nav-item" @click="navigateTo('/news')">
          <div v-if="currentRoute === '/news'" class="center-button">
            <ion-icon :icon="newspaper" class="active-icon"></ion-icon>
          </div>
          <template v-else>
            <ion-icon :icon="newspaper"></ion-icon>
            <div class="nav-label">News</div>
          </template>
        </div>
      </div>
    </ion-footer>
  </template>
  
  <script setup lang="ts">
  import { 
    IonFooter, 
    IonIcon 
  } from '@ionic/vue';
  import { 
    trophy, 
    podium, 
    gameController, 
    newspaper
  } from 'ionicons/icons';
  import { ref, onMounted, watch } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  
  const router = useRouter();
  const route = useRoute();
  const currentRoute = ref('');
  
  // Función para navegar a una ruta
  const navigateTo = (path: string) => {
    router.push(path);
  };
  
  // Actualizar la ruta actual cuando cambie
  const updateCurrentRoute = () => {
    const path = route.path;
  
    // Verificar si la ruta es /news o una subruta de /news
    if (path.startsWith('/news')) {
      currentRoute.value = '/news';
    } else if (path.startsWith('/tournament/')) {
      currentRoute.value = '/tournaments';
    } else {
      currentRoute.value = path;
    }
  };
  
  // Actualizar la ruta al montar el componente
  onMounted(() => {
    updateCurrentRoute();
  });
  
  // Observar cambios en la ruta
  watch(() => route.path, () => {
    updateCurrentRoute();
  });
  </script>
  
  <style scoped>
  .nav-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
  }
  
  .nav-bar {
    display: flex;
    background-color: #c3ff00;
    padding: 10px 0;
    position: relative;
    height: 60px;
  }
  
  .nav-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #2e2e34;
    font-size: 0.8rem;
    font-weight: bold;
    cursor: pointer;
    position: relative;
  }
  
  .nav-item ion-icon {
    font-size: 24px;
    margin-bottom: 4px;
  }
  
  .center-button {
    background-color: #2e2e34;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    border: 3px solid #c3ff00;
    z-index: 10;
  }
  
  .active-icon {
    color: #c3ff00;
    font-size: 30px;
  }
  
  .nav-label {
    font-size: 12px;
    font-weight: bold;
  }
  </style>