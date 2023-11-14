<template>
    <div>
        <div class="">
            <div style="margin-top:20px"></div>
            <label>Informe latitude</label>
            <el-input v-model="form.lat" />
            <div style="margin-top:10px"></div>
            <label>Informe longitude.</label>
            <el-input v-model="form.long" />
            <div style="margin-top:10px"></div>
        </div>
        <div class="result">
            <el-alert title="Erros de validação" type="error" :closable="false" v-show="messages" show-icon>
                <p v-html="messages"></p>
            </el-alert>
        </div>
        <div class="btn-save">
            <el-button type="primary" @click="getLocation">Atualizar dados</el-button>
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
    lat: '',
    long: '',
})

function setPosition(position) {
    form.value.lat = position.coords.latitude;
    form.value.long = position.coords.longitude;
}

function getLocation() {
    if (navigator.geolocation) {
        API.getPositionYourLocation(setPosition);

    } else {
        ElMessage({
            message: "Geolocalização não é suportada neste navegador.",
            type: 'warning',
        });
    }
}
function save() {
    messages.value = '';
    let validate = VALIDATE.validate([
        'latitude',
        'longitude'
    ], [
        form.value.lat,
        form.value.long,
    ], [
        ['required', 'number'],
        ['required', 'number'],
    ]);
    if (!validate) {
        messages.value = VALIDATE.messages;
    } else {
        DATABASE.setGeoLocation(form.value.lat, form.value.long);
        ElMessage({
            message: "Dados salvos",
            type: 'success',
        });
    }

}

onMounted(() => {
    if (DATABASE.getChoose() == 'Geolocalização') {
        let data = DATABASE.getGeoLocation();
        form.value.lat = data.latitude;
        form.value.long = data.longitude;
    }
})
</script>