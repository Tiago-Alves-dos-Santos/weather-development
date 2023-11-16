<template>
    <div>
        <div class="">
            <div style="margin-top:20px"></div>
            <label>Informe seu código WOEID.</label>
            <el-input v-model="form.code" @keyup.enter="save"/>
            <div style="margin-top:10px"></div>
            <label>Não sabe? Informe a cidade.</label>
            <el-input v-model="form.city" @keyup.enter="save"/>
        </div>
        <div class="result">
            <el-alert title="Erros de validação" type="error" :closable="false" v-show="messages" show-icon>
                <p v-html="messages"></p>
            </el-alert>
        </div>
        <div class="btn-save">
            <el-button type="primary" @click="getWoeid">Atualizar</el-button>
            <el-button type="success" @click="save">Salvar</el-button>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { ElMessage } from 'element-plus'
import axios from 'axios';
import API from '../../js/api';
import VALIDATE from '../../js/validate';
import DATABASE from '../../js/database';

const messages = ref('');
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
        ['required', 'min:5', 'max:20']
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
    messages.value = '';
    let validate = VALIDATE.validate([
        'código'
    ], [
        form.value.code,
    ], [
        ['required', 'integer']
    ]);
    if (!validate) {
        messages.value = VALIDATE.messages;
    } else {
        if (!form.value.code) {
            API.change_city.getWoeid(form.value.city).then(response => {
                form.value.code = response.woeid;
                form.value.city = response.name;
            });
        }
        DATABASE.setWoeid(form.value.code);
        ElMessage({
            message: "Dados salvos",
            type: 'success',
        });
    }
}
onMounted(() => {
    if (DATABASE.getChoose() == 'Código WOEID') {
        let data = DATABASE.getwoeid();
        form.value.code = data.woeid;
        console.log(typeof form.value.code, form.value.code);
    }
})
</script>