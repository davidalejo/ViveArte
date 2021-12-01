<template>
    <v-container>
     <v-row class="text-center">    
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Registro de Obras</h1>       
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
        >
        </v-text-field>
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
                <v-btn color="warning" class="mr-4" type="submit">Guardar</v-btn>      
            </v-card-actions>
        </form>
    </v-col>
    </v-row>

    </v-container>
</template>
<script>
import axios from 'axios';
export default {
    name:'crearObra',
    data(){
        return{
            articulo:{
                obra:'',
                casasubasta:'',
                fechasubasta:'',
                fuente:''
            }
        };
    },
    methods:{
        guardarArticulo(){
            var router = this.$router;
           const formData = new FormData();
           formData.append('obra',this.articulo.obra);
           formData.append('casasubasta',this.articulo.casasubasta);
           formData.append('fechasubasta',this.articulo.fechasubasta);
           formData.append('fuente',this.articulo.fuente);
           axios.post('http://localhost/apirestKingman/kingman.php',formData)
           .then(()=>{
               router.push('/obras');
           })
           .catch(function(error){
        console.log(error);
            });
        }
    }
}
</script>