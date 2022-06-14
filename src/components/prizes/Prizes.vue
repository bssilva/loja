<template>
  <div id="prizes" v-if="notLogin">
    <h1>Prêmios</h1>
    <carousel-3d>
      <slide v-for="(item, i) in prizes" :key="i" :index="i"> 
        <p class="name">{{item.name}}</p>
        <p class="description">{{item.description}}</p>
        <p class="value">{{item.value}} Pontos</p>

        <v-btn class="resgate" @click="resgatar(item)">Resgatar</v-btn>
      </slide>
    </carousel-3d>

    <v-dialog v-model="openModal" max-width="700px">
      <div class="dialog-delete">
        <h1>Confirma resgate do prêmio ?</h1>
        <div class="buttons">
          <v-btn @click="openModal = false">Cancelar</v-btn>
          <v-btn @click="redemptionItem">Confirmar</v-btn>
        </div>
      </div>
    </v-dialog>
  </div>
</template>

<script src="./Prizes.js" />
<style lang="scss" src="./Prizes.scss"/>