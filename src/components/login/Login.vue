<template>
  <div id="login">
    <hr />
    <h1>Área de login</h1>

    <div class="form-login">
      <v-form>
        <v-label>Login</v-label>
        <v-text-field solo></v-text-field>
        <v-label>Senha</v-label>
        <v-text-field solo></v-text-field>
        <v-btn>Login</v-btn>
      </v-form>
    </div>
  </div>
</template>

<script src="./Login.js" />
<style lang="scss" src="./Login.scss"/>