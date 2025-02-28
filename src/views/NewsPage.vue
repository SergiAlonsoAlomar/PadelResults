<template>
  <ion-page>
    <!-- Encabezado -->
    <div class="header">
      <h1>NEWS</h1>
    </div>

    <!-- Contenido principal -->
    <ion-content>
      <!-- Noticias principales (deslizable vertical) -->
      <div class="vertical-scroll-container">
        <div class="main-news">
          <div 
            v-for="(news, index) in mainNews" 
            :key="index"
            class="news-card"
            @click="goToNewsDetail(news)"
          >
            <img :src="getVerticalImage(news.id)" :alt="news.title" class="news-image" />
            <div class="news-title">{{ news.title }}</div>
          </div>
        </div>
      </div>

      <!-- Noticias secundarias (deslizable horizontal) -->
      <div class="horizontal-scroll-container">
        <div class="horizontal-news">
          <div 
            v-for="(news, index) in secondaryNews" 
            :key="index"
            class="horizontal-news-card"
            @click="goToNewsDetail(news)"
          >
            <img :src="getHorizontalImage(news.id)" :alt="news.title" class="horizontal-news-image" />
            <div class="horizontal-news-title">{{ news.title }}</div>
          </div>
        </div>
      </div>
    </ion-content>

    <!-- Barra de navegación inferior -->
    <BottomNavBar />
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import BottomNavBar from '@/components/BottomNavBar.vue';

const router = useRouter();

// Interfaz para las noticias
interface News {
  id: number;
  title: string;
  content: string;
  type: 'vertical' | 'horizontal';
  bullets?: string[];
}

// Noticias principales (deslizable vertical)
const mainNews = ref<News[]>([
  {
    id: 1,
    title: 'ARAUJO & ORTEGA TAKE CENTER STAGE IN THE SEMI-FINALS',
    content: `“Third set tiebreak” - some of the most exciting words in the world of padel - perfectly encapsulates the historic semifinals of the GNP Mexico Major Premier Padel - and one of the most memorable days in the history of Premier Padel. And the fact is that today's day was lived not in one, but in two nail-biting semi-finals, with almost every point featuring intense rallies, demonstrations of skill and tension until the last minute. It was a day in which the best male and female players in the world showed the best of the sport, setting the stage for a day of electrifying action tomorrow.

Sofia Araujo will become the first non-Spanish or Argentine player to play in the final of a Premier Padel Major alongside her partner Marta Ortega. In a thrilling three-set match against Ari Sanchez and Paula Josemaria (#1) - which included five match points between the two pairings - the combination of Araujo's cold-blooded winners and Ortega's defensive play made the difference against the winners of the rest of the season's Majors. 

Sofia Araujo reflected on her team's unwavering commitment after a difficult match, saying, “This win goes to the whole team that is here with us, that is in Madrid, that works day in and day out for matches like today's, which we had a tough time. This team is fight, smiles and dedication, we will continue with everything tomorrow”.`,
    type: 'vertical'
  },
  {
    id: 2,
    title: 'ARI & PAULA CROWNED #1 PAIR FOR 2024',
    content: 'Ari Sanchez and Paula Josemaria have been officially crowned as the number one pair for the 2024 season after their impressive performance throughout the year...',
    type: 'vertical'
  },
  {
    id: 3,
    title: 'BELA & TINO ROAD TO THE FINAL IN TOLEDO',
    content: 'Fernando Belasteguin and Arturo Coello have secured their spot in the final of the Toledo P1 tournament after defeating Juan Lebron and Alejandro Galan in a thrilling semifinal match...',
    type: 'vertical'
  },
  {
    id: 4,
    title: 'BELA: "SINCE THE 6 YEARS I AM WITHIN A PADEL TRACK"',
    content: 'In an exclusive interview, Fernando Belasteguin shares his journey in padel, revealing that he has been playing the sport since he was just 6 years old...',
    type: 'vertical'
  },
  {
    id: 5,
    title: 'THIS HAS BEEN THE SECOND DAY IN BARCELONA',
    content: 'The second day of the Barcelona Master has concluded with several surprising results and impressive performances from both established stars and rising talents...',
    type: 'vertical'
  }
]);

// Noticias secundarias (deslizable horizontal)
const secondaryNews = ref<News[]>([
  {
    id: 6,
    title: '',
    content: "The International Padel Federation (FIP) today announced the launch of an inaugural new inter-continental cup competition – the equivalent of golf's Ryder Cup and tennis' Laver Cup – which will see the best players from the Americas take on the best from Europe in a new biennial tournament starting in 2025.",
    type: 'horizontal',
    bullets: [
      'Major new biennial tournament for top & emerging players in Americas vs Europe competition.',
      "€700,000 prize money equally distributed across men's and women's competitions.",
      'Tenders for locations, branding, promoters and partnerships starting shortly.',
      "Globalisation and major growth of padel continues, propelling forward FIP's Olympic ambitions for the sport."
    ]
  },
  {
    id: 7,
    title: 'TOLEDO P1',
    content: "The Toledo P1 tournament is underway with the world's best players competing for the prestigious title and valuable ranking points...",
    type: 'horizontal'
  },
  {
    id: 8,
    title: 'ANOTHER MVP FOR MARTIN',
    content: 'Martin Di Nenno has been named MVP of the tournament after his outstanding performance throughout the competition...',
    type: 'horizontal'
  },
  {
    id: 9,
    title: '100,000 SPECTATORS!',
    content: 'A record-breaking 100,000 spectators attended the Premier Padel event, marking a significant milestone for the sport and demonstrating its growing popularity worldwide...',
    type: 'horizontal'
  }
]);

// Función para obtener la imagen vertical correspondiente
const getVerticalImage = (id: number) => {
  return new URL(`../assets/VNew${id}.png`, import.meta.url).href;
};

// Función para obtener la imagen horizontal correspondiente
const getHorizontalImage = (id: number) => {
  return new URL(`../assets/HNew${id}.png`, import.meta.url).href;
};

// Función para navegar a la página de detalle de noticia
const goToNewsDetail = (news: News) => {
  router.push({
    name: 'NewsDetail',
    params: { id: news.id.toString() },
    query: { newsData: JSON.stringify(news) }
  });
};
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
  color: #1A1D0E;
  font-family: 'Knewave';
}

/* Contenido principal */
ion-content {
  --background: #2e2e34;
  --padding-bottom: 70px; /* Espacio para el menú inferior */
}

/* Noticias principales (deslizable vertical) */
.vertical-scroll-container {
  height: 60vh; /* Altura fija para el contenedor vertical */
  overflow-y: auto; /* Deslizamiento vertical */
  padding: 15px;
}

.main-news {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.news-card {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  border: 2px solid #c3ff00;
  height: 200px;
  cursor: pointer;
}

.news-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.news-title {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  font-size: 1.2rem;
  font-style: italic;
  font-family: 'Knewave';
}

/* Noticias secundarias (deslizable horizontal) */
.horizontal-scroll-container {
  margin-top: auto;
  padding: 15px;
}

.horizontal-news {
  display: flex;
  overflow-x: auto; /* Deslizamiento horizontal */
  gap: 15px;
  padding-bottom: 15px;
  scrollbar-width: none; /* Firefox */
}

.horizontal-news::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}

.horizontal-news-card {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  border: 2px solid #c3ff00;
  min-width: 250px;
  height: 150px;
  flex-shrink: 0;
  cursor: pointer;
}

.horizontal-news-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.horizontal-news-title {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 8px;
  font-size: 1rem;
  font-style: italic;
  font-family: 'Knewave';
}
</style>