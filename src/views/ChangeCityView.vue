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
                                <el-radio-button label="Nome" />
                            </el-radio-group>
                        </div>
                        <div class="partial-views">
                            <div v-if="option == 'Código WOEID'" class="code-woeid">
                                <code-woeid></code-woeid>
                            </div>
                            <div v-else-if="option == 'Geolocalização'" class="geolocation">
                                <geo-location></geo-location>
                            </div>
                            <div v-else-if="option == 'Nome'" class="geolocation">
                                <name-city></name-city>
                            </div>
                        </div>
                    </el-card>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script setup>
import * as Icons from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { reactive, computed, ref, onMounted, watch } from 'vue'
import axios from 'axios';
import API from '../js/api';
import VALIDATE from '../js/validate'; 
import DATABASE from '../js/database';
//components
import CodeWoeid from '@/components/change-city/CodeWoeid.vue';
import GeoLocation from '@/components/change-city/GeoLocation.vue';
import NameCity from '@/components/change-city/NameCity.vue';

const icons = ref(Icons);
const option = ref(DATABASE.getChoose() ? DATABASE.getChoose() : 'Geolocalização');



onMounted(() => {
})

</script>