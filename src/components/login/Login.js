export default {
  name: "Login",
  data: () => ({
    items: [
      {
        src: "https://www.sigacred.com.br/imagens/titulo_prog_fidelidade.png",
      },
    ],
    users: null,
    email: "",
    senha: "",
    notLogin: false
  }),
  async created() {
    if(sessionStorage.getItem('establishmentId')){
      this.notLogin = true
      return
    }
    let getClients = await this.API.client.getAllCustomer();
    this.users = getClients;
  },
  methods: {
    async login() {
      for (const user of this.users) {
        if (user.email === this.email && user.password === this.senha) {
          sessionStorage.setItem('establishmentId', user.establishmentId)
          sessionStorage.setItem('idCustomer', user.cpf)
          this.$toasted.global.success({ msg: `Login realizado com sucesso!` });
          setTimeout(() => {
            location.reload();
          }, 800);
          return;
        }
      }
    },
  },
};
