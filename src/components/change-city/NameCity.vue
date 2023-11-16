<template>
    <div>
        <div class="">
            <div style="margin-top:20px"></div>
            <label>Nome da sua cidade - Ex: Cidade, UF</label>
            <el-input v-model="form.name" placeholder="Sobral, CE" @keyup.enter="save"/>
        </div>
        <div class="result">
            <el-alert title="Erros de validação" type="error" :closable="false" v-show="messages" show-icon>
                <p v-html="messages"></p>
            </el-alert>
        </div>
        <div class="btn-save">
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
let messages = ref('');
const form = ref({
    name: '',
})

function save() {
    messages.value = '';
    let validate = VALIDATE.validate([
        'nome da cidade',
    ], [
        form.value.name,
    ], [
        ['required', 'min:5', 'max:50'],
    ]);
    if (!validate) {
        messages.value = VALIDATE.messages;
    } else {
        DATABASE.setCityName(form.value.name);
        ElMessage({
            message: "Em caso de erro no nome a cidade a ser exibida será: São Paulo-SP",
            type: 'warning',
        });
        ElMessage({
            message: "Dados salvos",
            type: 'success',
        });
    }

}
onMounted(() => {
    if (DATABASE.getChoose() == 'Nome') {
        let data = DATABASE.getCityName();
        form.value.name = data.city_name;
    }
})
</script>