<template>
  <div class="modal-backdrop" v-if="isOpen" @click="closeModal">
    <div class="modal-content" @click.stop>
      <div v-if="player">
        <div class="player-header">
          <div class="player-number">{{ player.position }}</div>
          <div class="player-name-container">
            <div class="player-name">{{ player.name }}</div>
          </div>
          <div class="player-image">
            <img :src="player.image" alt="Player photo" />
          </div>
        </div>
        
        <div class="divider"></div>
        
        <div v-if="player.details" class="info-section">
          <div class="info-item">
            <div class="info-label">Position</div>
            <div class="info-value">{{ player.details.position }}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Height</div>
            <div class="info-value">{{ player.details.height }}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Born in</div>
            <div class="info-value">{{ player.details.bornIn }}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Date of birth</div>
            <div class="info-value">{{ player.details.dateOfBirth }}</div>
          </div>
        </div>
        
        <div v-if="player.stats" class="info-section">
          <div class="info-item">
            <div class="info-label">Match Played</div>
            <div class="info-value">{{ player.stats.matchesPlayed }}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Won</div>
            <div class="info-value">{{ player.stats.won }}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Lost</div>
            <div class="info-value">{{ player.stats.lost }}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Titles</div>
            <div class="info-value">{{ player.stats.titles }}</div>
          </div>
        </div>
        
        <div v-if="player.tournaments" class="tournament-section">
          <div class="tournament-header">
            <div class="tournament-label">TOURNAMENT</div>
            <div class="tournament-label">CATEGORY</div>
            <div class="tournament-label">ROUND</div>
            <div class="tournament-label">POINTS</div>
          </div>
          <div 
            class="tournament-row" 
            v-for="tournament in player.tournaments" 
            :key="tournament.name"
          >
            <div class="tournament-value">{{ tournament.name }}</div>
            <div class="tournament-value">{{ tournament.category }}</div>
            <div class="tournament-value">{{ tournament.round }}</div>
            <div class="tournament-value">{{ tournament.points }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

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

const props = defineProps<{
  isOpen: boolean;
  player?: Player;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const closeModal = () => {
  emit('close');
};
</script>

<style scoped>
/* Aplicar la fuente Knewave a todo el texto */
body {
  font-family: 'Knewave', cursive;
}

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
  background-color: #1a1d0e;
  border-radius: 20px;
  padding: 20px;
  max-height: 90vh;
  overflow-y: auto;
}

.player-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.player-number {
  font-size: 5rem;
  color: #c3ff00;
  font-style: italic;
  margin-right: 10px;
  font-family: 'Knewave';
}

.player-name-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.player-name {
  font-size: 2.5rem;
  color: white;
  font-style: italic;
  line-height: 1;
  font-family: 'Knewave';
}

.player-image {
  width: 120px;
  height: 120px;
  overflow: hidden;
  border-radius: 10px;
  margin-left: 10px;
  display: flex;
  justify-content: center;
}

.player-image img {
  width: fit-content;
  height: fit-content;
  object-fit: cover;
}

.divider {
  height: 2px;
  background-color: #c3ff00;
  margin: 15px 0;
}

.info-section {
  display: flex;
  flex-wrap: wrap;
  background-color: #1a1d0e;
  border: 2px solid #c3ff00;
  border-radius: 15px;
  padding: 10px;
  margin-bottom: 15px;
}

.info-item {
  width: 25%;
  text-align: center;
  padding: 5px;
}

.info-label {
  color: #c3ff00;
  font-size: 0.9rem;
  font-style: italic;
  margin-bottom: 5px;
  font-family: 'Knewave';
}

.info-value {
  color: white;
  font-size: 1rem;
  font-family: 'Knewave';
}

.tournament-section {
  background-color: #1a1d0e;
  border: 2px solid #c3ff00;
  border-radius: 15px;
  padding: 10px;
}

.tournament-header {
  display: flex;
  margin-bottom: 10px;
}

.tournament-label {
  flex: 1;
  color: #c3ff00;
  font-size: 0.9rem;
  font-style: italic;
  text-align: center;
  font-family: 'Knewave';
}

.tournament-row {
  display: flex;
  margin-bottom: 10px;
}

.tournament-value {
  flex: 1;
  color: white;
  font-size: 1rem;
  text-align: center;
  font-family: 'Knewave';
}
</style>