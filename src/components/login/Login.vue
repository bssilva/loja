<template>
  <div id="login" v-if="!notLogin">
    <hr />
    <h1>Área de login</h1>

    <div class="form-login">
      <v-form>
        <v-label>Login</v-label>
        <v-text-field solo v-model="email"></v-text-field>
        <v-label>Senha</v-label>
        <v-text-field solo v-model="senha"></v-text-field>
        <v-btn @click="login">Login</v-btn>
      </v-form>
    </div>
  </div>
</template>

<script src="./Login.js" />
<style lang="scss" src="./Login.scss"/>