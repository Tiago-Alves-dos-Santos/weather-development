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

        </div>
        <div class="btn-save">
            <el-button type="primary" @click="getLocation">Obter dados</el-button>
            <el-button type="success">Salvar</el-button>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus'
import axios from 'axios';
import API from '../../js/api';
import VALIDATE from '../../js/validate';

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
</script>