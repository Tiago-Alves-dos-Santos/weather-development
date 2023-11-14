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

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            form.value.lat = position.coords.latitude;
            form.value.long = position.coords.longitude;
        }, function (error) {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    ElMessage({
                        message: 'Acesso negado ao tentar obter à localicação',
                        type: 'error',
                    });
                    break;
                case error.POSITION_UNAVAILABLE:
                    ElMessage({
                        message: "Informações de localização indisponíveis.",
                        type: 'error',
                    });
                    break;
                case error.TIMEOUT:
                    ElMessage({
                        message: "Tempo para obter a localização expirou.",
                        type: 'error',
                    });
                    break;
                case error.UNKNOWN_ERROR:
                    ElMessage({
                        message: "Erro desconhecido ao obter a localização.",
                        type: 'error',
                    });
                    break;
            }
        });
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