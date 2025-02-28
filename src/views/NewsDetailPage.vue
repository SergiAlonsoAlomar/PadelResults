<template>
  <ion-page>
    <!-- Encabezado -->
    <div class="header">
      <h1>NEWS</h1>
    </div>

    <!-- Botón de volver -->
    <div class="back-button-container">
      <button class="back-button" @click="goBack">
        <ion-icon :icon="arrowBack"></ion-icon>
        BACK
      </button>
    </div>

    <!-- Contenido principal -->
    <ion-content v-if="newsItem">
      <div class="news-detail">
        <img :src="getNewsImage(newsItem.id)" :alt="newsItem.title" class="news-image" />
        
        <h2 class="news-title">{{ newsItem.title }}</h2>
        
        <div class="news-content">
          <p>{{ newsItem.content }}</p>
          
          <ul v-if="newsItem.bullets && newsItem.bullets.length > 0">
            <li v-for="(bullet, index) in newsItem.bullets" :key="index">
              {{ bullet }}
            </li>
          </ul>
        </div>
      </div>
    </ion-content>

    <!-- Barra de navegación inferior -->
    <BottomNavBar />
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonFooter, IonIcon } from '@ionic/vue';
import { 
  triangleOutline, 
  wifiOutline, 
  batteryFullOutline, 
  trophy, 
  podium, 
  gameController, 
  list,
  arrowBack
} from 'ionicons/icons';
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import BottomNavBar from '@/components/BottomNavBar.vue';

const router = useRouter();
const route = useRoute();

// Interfaz para las noticias
interface News {
  id: number;
  title: string;
  image: string;
  content: string;
  type: 'vertical' | 'horizontal';
  bullets?: string[];
}

// Estado para la noticia actual
const newsItem = ref<News | null>(null);

// Función para volver a la página anterior
const goBack = () => {
  router.back();
};

// Función para obtener la imagen de la noticia
const getNewsImage = (id: number) => {
  return new URL(`../assets/${newsItem.value?.type === 'vertical' ? 'VNew' : 'HNew'}${id}.png`, import.meta.url).href;
};

// Cargar la noticia al montar el componente
onMounted(() => {
  // Intentar obtener la noticia de los query params
  const newsData = route.query.newsData;
  if (typeof newsData === 'string') {
    try {
      newsItem.value = JSON.parse(newsData);
    } catch (error) {
      console.error('Error parsing news data:', error);
    }
  }

  // Si no se pudo obtener de los query params, usar datos de ejemplo
  if (!newsItem.value) {
    const newsId = Number(route.params.id);
    
    // Aquí podrías hacer una llamada a una API para obtener los detalles de la noticia
    // Por ahora, usamos datos de ejemplo
    if (newsId === 1) {
      newsItem.value = {
        id: 1,
        title: 'ARAUJO & ORTEGA TAKE CENTER STAGE IN THE SEMI-FINALS',
        image: 'VNew1.png',
        content: `“Third set tiebreak” - some of the most exciting words in the world of padel - perfectly encapsulates the historic semifinals of the GNP Mexico Major Premier Padel - and one of the most memorable days in the history of Premier Padel. And the fact is that today's day was lived not in one, but in two nail-biting semi-finals, with almost every point featuring intense rallies, demonstrations of skill and tension until the last minute. It was a day in which the best male and female players in the world showed the best of the sport, setting the stage for a day of electrifying action tomorrow.

Sofia Araujo will become the first non-Spanish or Argentine player to play in the final of a Premier Padel Major alongside her partner Marta Ortega. In a thrilling three-set match against Ari Sanchez and Paula Josemaria (#1) - which included five match points between the two pairings - the combination of Araujo's cold-blooded winners and Ortega's defensive play made the difference against the winners of the rest of the season's Majors. 

Sofia Araujo reflected on her team's unwavering commitment after a difficult match, saying, “This win goes to the whole team that is here with us, that is in Madrid, that works day in and day out for matches like today's, which we had a tough time. This team is fight, smiles and dedication, we will continue with everything tomorrow”. `,
        type: 'vertical'
      };
    } else if (newsId === 6) {
      newsItem.value = {
        id: 6,
        title: 'INTERNATIONAL PADEL FEDERATION LAUNCHES RYDER CUP AND LAVER CUP OF PADEL WITH NEW INTER-CONTINENTAL CUP COMPETITION SET FOR 2025 SEASON',
        image: 'HNew6.png',
        content: "The International Padel Federation (FIP) today announced the launch of an inaugural new inter-continental cup competition – the equivalent of golf's Ryder Cup and tennis' Laver Cup – which will see the best players from the Americas take on the best from Europe in a new biennial tournament starting in 2025.",
        type: 'horizontal',
        bullets: [
          'Major new biennial tournament for top & emerging players in Americas vs Europe competition.',
          "€700,000 prize money equally distributed across men's and women's competitions.",
          'Tenders for locations, branding, promoters and partnerships starting shortly.',
          "Globalisation and major growth of padel continues, propelling forward FIP's Olympic ambitions for the sport."
        ]
      };
    }
  }
});
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
  color: black;
  font-family: 'Knewave';
}

/* Botón de volver */
.back-button-container {
  background-color: #2e2e34;
  padding: 15px;
}

.back-button {
  display: flex;
  align-items: center;
  background-color: #c3ff00;
  border: none;
  border-radius: 8px;
  padding: 8px 15px;
  font-size: 1rem;
  font-style: italic;
  color: black;
  cursor: pointer;
  font-family: 'Knewave';
}

.back-button ion-icon {
  margin-right: 5px;
}

/* Contenido principal */
ion-content {
  --background: #2e2e34;
}

.news-detail {
  padding: 15px;
  padding-bottom: 65px;
  color: white;
}

.news-image {
  width: 100%;
  border-radius: 15px;
  margin-bottom: 15px;
}

.news-title {
  font-size: 1.8rem;
  font-style: italic;
  margin-bottom: 20px;
  font-family: 'Knewave';
}

.news-content {
  font-size: 1.1rem;
  line-height: 1.6;
}

.news-content p {
  margin-bottom: 15px;
}

.news-content ul {
  padding-left: 20px;
  margin-bottom: 15px;
}

.news-content li {
  margin-bottom: 10px;
  list-style-type: disc;
}
</style>