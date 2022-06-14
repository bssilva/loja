import Vue from 'vue';
import Toasted from 'vue-toasted';

Vue.use(Toasted);

Vue.toasted.register('error',
  (payload) => !payload.msg ? 'Algo deu errado!' : payload.msg,
  {
    type: 'error',
    duration: 4000,
    keepOnHover: true,
    position: 'top-right'
  }
);

Vue.toasted.register('success',
  (payload) => !payload.msg ? 'Sucesso ... A operação foi realizada' : payload.msg,
  {
    type: 'success',
    duration: 4000,
    keepOnHover: true,
    position: 'top-right'
  }
);
