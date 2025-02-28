<template>
  <ion-page>
    <ion-content class="splash-content">
      <!-- Forma rara superior -->
      <div class="shape top-shape"></div>

      <!-- Forma rara inferior -->
      <div class="shape bottom-shape"></div>

      <!-- Texto "PADELRESULTS" -->
      <div class="text-container">
        <span class="padel">PADEL</span>
        <span class="results">RESULTS</span>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from "@ionic/vue";
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

onMounted(() => {
  // Navegación al login después de 2 segundos
  setTimeout(() => {
    router.push("/login");
  }, 2000); // Retardo de 2 segundos
});
</script>

<style scoped>
/* Importar la fuente Knewave directamente en el CSS */
@import url("https://fonts.googleapis.com/css2?family=Knewave&display=swap");

.splash-content {
  --background: #2e2e34; /* Color de fondo */
  display: flex;
  justify-content: center; /* Centra horizontalmente */
  align-items: center; /* Centra verticalmente */
  height: 100vh; /* Ocupa toda la altura de la pantalla */
  position: relative; /* Necesario para posicionar las formas de manera absoluta */
}

/* Estilos para las formas "raras" */
.shape {
  position: absolute;
  width: 100%;
  height: 20%;
  background-color: #c3ff00; /* Color de las formas */
}

/* Forma superior */
.top-shape {
  top: 0;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 80% 100%, 20% 100%, 0 80%);
}

/* Forma inferior */
.bottom-shape {
  bottom: 0;
  clip-path: polygon(0 20%, 20% 0, 80% 0, 100% 20%, 100% 100%, 0 100%);
}

/* Contenedor del texto */
.text-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

/* Estilos del texto */
.padel {
  color: #f8faef; /* Color de "PADEL" */
  font-family: "Knewave", cursive; /* Tipo de letra */
  font-size: 40px; /* Tamaño de letra */
  font-weight: bold;
}

.results {
  color: #c3ff00; /* Color de "RESULTS" */
  font-family: "Knewave", cursive; /* Tipo de letra */
  font-size: 40px; /* Tamaño de letra */
  font-weight: bold;
}
</style>