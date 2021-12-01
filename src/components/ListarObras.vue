<template>
    <v-container>
    <v-row class="text-center">      
      <v-col class="mb-4">
        <h2 class="display-2 font-weight-bold mb-3">
          Obras Eduardo Kingman 
        </h2>       
      </v-col>        
    </v-row>
    <v-row>
    <v-col class="mb-1">
       <v-btn :to="{name:'crearObra'}" class="mx-2" fab dark color="indigo darken-4">
         <v-icon dark>mdi-plus</v-icon>
       </v-btn>
    </v-col>
    </v-row>
    <v-row class="text-center">
    <v-col cols="12">
        <v-simple-table fixed-header class="elevation-3">
        <template v-slot:default>
        <thead>
            <tr>
            <th class="text-center">ID</th>
            <th class="text-center">Obra</th>
            <th class="text-center">Casa Subasta</th>
            <th class="text-center">Fecha Subasta </th>
            <th class="text-center">Fuente </th>
            <th class="text-center">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="articulo in kingman" :key="articulo.id">
                <td>{{articulo.id}}</td>
                <td>{{articulo.obra}}</td>
                <td>{{articulo.casasubasta}}</td>
                <td>{{articulo.fechasubasta}}</td>
                <td>{{articulo.fuente}}</td>
                <td>
                    <v-btn :to="{name:'editarObra', params:{id:articulo.id}}" fab small color="yellow accent-4"><v-icon>mdi-pencil</v-icon></v-btn>
                    <v-btn @click.stop="dialog=true" @click="id=articulo.id" fab small color="red darken-4"><v-icon>mdi-delete</v-icon></v-btn>
                </td>
            </tr>
         </tbody>   
        </template>
        </v-simple-table>
    </v-col>
    </v-row>
    <!-- ventana de diálogo para eliminar registros -->
    <v-dialog v-model="dialog" max-width="350">
        <v-card>
            <v-card-title class="headline">¿Desea eliminar el registro?</v-card-title>
            <v-card-actions>
            <v-spacer></v-spacer>
                <v-btn @click="dialog = false">Cancelar</v-btn>
                <v-btn @click="confirmarBorrado(id)" color="red darken-4">Aceptar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
    <!-- componente snackbar para mostrar mensaje de eliminación -->
    <v-snackbar v-model="snackbar" color="success"> {{textsnack}}
        <template v-slot:action="{attrs}">
            <v-btn text v-bind="attrs" @click="snackbar = false">Cerrar</v-btn>
        </template>
    </v-snackbar>
    </v-container>
</template>
<script>
import axios from 'axios';
export default {
    name:'listarObras',
    mounted(){
        this.obtenerArticulos();
    },
    data(){
        return{            
            dialog:false,
            kingman:null,
            id:null,
            snackbar:false,
            textsnack:'¡Registro Eliminado!'
        }
    },
    methods:{
        obtenerArticulos(){
            axios.get('http://localhost/apirestKingman/kingman.php')
            .then(r => {
                this.kingman = r.data;
                console.log(this.kingman);
            })
            .catch(function(error){
                console.log(error);
            })

        },
        confirmarBorrado(id){            
            axios.delete('http://localhost/apirestKingman/kingman.php?id='+id)
            .then(()=>{
                    this.obtenerArticulos();
                    this.dialog = false;
                    this.snackbar = true
            })
            .catch(function(error){
                console.log(error);
            });    
        }
    }
}
</script>