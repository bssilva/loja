export default {
  data() {
    return {
      items: [
        {
          src: "https://www.sigacred.com.br/imagens/titulo_prog_fidelidade.png",
        }
      ],
      notLogin: false
    };
  },
  created(){
    if(sessionStorage.getItem('establishmentId')){
      this.notLogin = true
    }
  },
  methods:{
    moveComoFunciona(){
      window.scrollTo(0,500)
    },
    moveLogin(){
      window.scrollTo(0,1000)
    },
    logout(){
      sessionStorage.clear()
      location.reload()
    }
  }
};
