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
            <label>Seu IP local (opcional).</label>
            <el-input v-model="form.ip" />
        </div>
        <div class="result">

        </div>
        <div class="btn-save">
            <el-button type="primary">Obter dados</el-button>
            <el-button type="success">Salvar</el-button>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const form = ref({
    lat: '',
    long:'',
    ip:''
})
</script>