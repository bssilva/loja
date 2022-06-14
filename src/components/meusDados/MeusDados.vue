<template>
  <div id="meus-dados" v-if="notLogin">
    <h1>Meus Dados</h1>

    <div class="dados">
      <div class="infos">
        <p>Nome: {{client.name}}</p>
        <p>CPF: {{client.cpf}}</p>
        <p>Email: {{client.email}}</p>
        <p>Saldo de pontos: {{client.balance}}</p>
      </div>
    </div>
  </div>
</template>

<script src="./MeusDados.js" />
<style lang="scss" src="./MeusDados.scss"/>