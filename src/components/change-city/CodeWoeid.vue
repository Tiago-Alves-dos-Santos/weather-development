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
            <el-alert title="Erros de validação" type="error" :closable="false" v-show="messages" show-icon>
                <p v-html="messages"></p>
            </el-alert>
        </div>
        <div class="btn-save">
            <el-button type="primary" @click="getWoeid">Buscar</el-button>
            <el-button type="success" @click="save">Salvar</el-button>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import API from '../../js/api';
import VALIDATE from '../../js/validate';

let messages = ref('');
const form = ref({
    code: '',
    city: ''
});
function getWoeid() {
    messages.value = '';
    let validate = VALIDATE.validate([
        'cidade'
    ], [
        form.value.city,
    ], [
        ['required','min:5','max:20']
    ]);
    if (!validate) {
        messages.value = VALIDATE.messages;
    } else {
        API.change_city.getWoeid(form.value.city).then(response => {
            form.value.code = response.woeid;
            form.value.city = response.name;
        })
    }
}
function save() {
    console.log('save');
}
</script>