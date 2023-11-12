<template>
    <div class="city">
        <el-row>
            <el-col :span="24">
                <div class="card-city">
                    <el-card class="box-city">
                        <div class="back-button">
                            <el-button :icon="icons.Back" circle type="primary" plain @click="$router.push({name:'home'})"></el-button>
                        </div>
                        <div class="title">
                            <h1>Mudar cidade</h1>
                            <h5>Informe como deseja obter a nova cidade!</h5>
                        </div>
                        <div class="options">
                            <el-radio-group v-model="option">
                                <el-radio-button label="Código WOEID"/>
                                <el-radio-button label="Geolocalização" checked />
                                <el-radio-button label="IP" />
                                <el-radio-button label="Nome" />
                            </el-radio-group>
                        </div>
                    </el-card>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script setup>
import * as Icons from '@element-plus/icons-vue'
import { reactive, computed, ref, onMounted, watch } from 'vue' 
const icons = ref(Icons);
const option = ref('Geolocalização');
</script>