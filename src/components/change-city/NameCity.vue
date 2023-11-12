<template>
    <div>
        <div class="">
            <div style="margin-top:20px"></div>
            <label>Nome da sua cidade</label>
            <el-input v-model="form.name" />
        </div>
        <div class="result">

        </div>
        <div class="btn-save">
            <el-button type="success">Salvar</el-button>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const form = ref({
    name: '',
})
</script>