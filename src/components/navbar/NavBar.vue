<template>
  <div id="navbar">
    <div class="header">
      <router-link to="/">
        <img src="../../assets/SGPF.png" alt="" />
      </router-link>

      <div class="items-menu">
        <v-btn>Página inicial</v-btn>
        <v-btn @click="moveComoFunciona">Como funciona</v-btn>
        <!-- <v-btn >Prêmios</v-btn> -->
        <v-btn @click="moveLogin" v-if="!notLogin">Login</v-btn>
        <v-btn @click="moveLogin" v-if="notLogin">Prêmios</v-btn>
      </div>
    </div>
    <div class="banner">
      <v-carousel>
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script src="./NavBar.js" />
<style lang="scss" src="./NavBar.scss"/>