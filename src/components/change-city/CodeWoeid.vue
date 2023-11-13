<template>
    <div>
        <div class="">
            <div style="margin-top:20px"></div>
            <label>Informe seu código WOEID.</label>
            <el-input v-model="form.code" />
            <div style="margin-top:10px"></div>
            <label>Não sabe? Informe a cidade.</label>
            <el-input v-model="form.city" />
        </div>
        <div class="result">

        </div>
        <div class="btn-save">
            <el-button type="primary" @click="getWoeid">Buscar</el-button>
            <el-button type="success" >Salvar</el-button>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import API from '../../js/api';

const form = ref({
    code: '',
    city: ''
});
function getWoeid() {
    API.change_city.getWoeid(form.value.city).then(resultado => {
        console.log('Resultado final:', resultado);
        form.value.code = resultado.woeid;
        form.value.city = resultado.name;
    })
    console.log(form.value.code);
}
</script>