import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

//importamos vue-router
import VueRouter from 'vue-router';

//importamos nuestros componentes
import inicio from './components/Inicio';
import listarObras from './components/ListarObras';
import crearObra from './components/CrearObra';
import editarObra from './components/EditarObra';
import contacto from './components/Contacto';


//creamos nuestros componentes
Vue.component('inicio', inicio);
Vue.component('listarObras', listarObras);
Vue.component('crearObra', crearObra);
Vue.component('editarObra', editarObra);
Vue.component('contacto', contacto);


//uso de vue-router
Vue.use(VueRouter);

//definimos las rutas
const routes = [
  {path:'/', component:inicio},
  {path:'/inicio',component:inicio},
  {path:'/obras', component:listarObras},
  {path:'/crear', component:crearObra, name:'crearObra'},
  {path:'/editar/:id', component:editarObra, name:'editarObra'},
  {path:'/contacto',component:contacto},
  {path:'/redes',component:contacto}
]

//crearmos el objeto router
const router = new VueRouter({
  routes,
  mode:'history'
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
