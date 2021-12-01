<template>
  <v-container>
    <v-row class="text-center">    
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Editar Obra</h1>       
      </v-col>     
    </v-row>
    <v-row>
        <v-col>         
            <form v-on:submit.prevent="guardarArticulo()">
            <v-text-field
                v-model="articulo.obra"        
                label="Nombre de la Obra"
                outlined
                required        
            ></v-text-field>
            <v-text-field
                v-model="articulo.casasubasta"        
                label="Casa de Subasta"
                outlined
                required         
            ></v-text-field>
            <v-text-field
                v-model="articulo.fechasubasta"        
                label="Fecha de Subasta"
                outlined
                required       
            ></v-text-field>
            <v-text-field
                v-model="articulo.fuente"        
                label="Fuente"
                outlined
                required       
            ></v-text-field>
            <v-card-actions>
            <v-btn color="yellow accent-4" class="mr-4" type="submit">Guardar</v-btn>      
            </v-card-actions>
            </form>         
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
    name:'editarObra',
    mounted(){
      this.id = this.$route.params.id;
      console.log(this.$route);
      axios.get('http://localhost/apirestKingman/kingman.php?id='+this.id)
      .then(r =>{
        this.articulo = r.data;
      })
      .catch(function(error){
        console.log(error);
      });
    },
    data(){
      return{
        id:null,
        articulo:{
          obra:'',
          casasubasta:'',
          fechasubasta:'',
          fuente:''
        }
      }
    },
    methods:{
      guardarArticulo(){
         var router =  this.$router;
        axios.put('http://localhost/apirestKingman/kingman.php?id='+this.id+'&obra='+this.articulo.obra+'&casasubasta='+this.articulo.casasubasta+'&fechasubasta='+this.articulo.fechasubasta+'&fuente='+this.articulo.fuente)
        .then(function(){
           router.push('/obras'); 
        })
        .catch(function(error){
        console.log(error);
        });
      }
    }
}
</script>