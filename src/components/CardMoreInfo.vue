<template>
    <div class="card-more-info">
        <el-card class="box-card">
            <div class="btn-back">
                <el-button :icon="icons.Back" circle type="primary" plain @click="emit('back-card', 'back')"></el-button>
            </div>
            <div class="title">
                <h3>{{ props.city_name }}</h3>
            </div>
            <div class="divisor">
                <div class="left">
                    <div>
                        <span class="bold">Humidade:</span> {{ props.humidity }}%
                    </div>
                    <div>
                        <custom-icon icon="thermometer-cool" width="20px" height="20px"></custom-icon>
                        <span class="bold">{{ props.min }}Cº</span>
                    </div>
                    <div>
                        <custom-icon icon="sunrise" width="20px" height="20px"></custom-icon>
                        <span class="bold">{{ props.sunrise }}</span>
                    </div>
                </div>
                <div class="right">
                    <div>
                        <span class="bold">Nebulosidade:</span> {{ props.cloudiness }}%
                    </div>
                    <div>
                        <custom-icon icon="thermometer-hot" width="20px" height="20px"></custom-icon>
                        <span class="bold">{{ props.max }} Cº</span>
                    </div>
                    <div>
                        <custom-icon icon="sunset" width="20px" height="20px"></custom-icon>
                        <span class="bold">{{ props.sunset }}</span>
                    </div>
                </div>
            </div>
            <div class="moon-phase">
                <h4>{{ moon.name }}</h4>
                <img :src="moon.photoSrc" alt="">
            </div>
        </el-card>
    </div>
</template>
<script setup>
import * as Icons from '@element-plus/icons-vue'
import { ref, onMounted,onUpdated } from 'vue'

const icons = ref(Icons);
const emit = defineEmits(['back-card']);

const moon = ref({
    photoSrc: '',
    name: ''
})

const props = defineProps({
    city_name: {
        type: String,
        default: ''
    },
    humidity: {
        type: [Number, String],
        default: 0
    },
    cloudiness: {
        type: [Number, String],
        default: 0
    },
    max: {
        type: [Number, String],
        default: 0
    },
    min: {
        type: [Number, String],
        default: 0
    },
    sunrise: String,
    sunset: String,
    moon_phase: {
        type: String,
        default: 'new'
    },
});

function nameMoonPhaseInPtBr(name){
    switch (name) {
        case 'first_quarter':
            return 'Quarto Crescente';
            break;
        case 'full':
            return 'cheai';
            break;
        case 'last_quarter':
            return 'Quarto Minguante';
            break;
        case 'new':
            return 'Nova';
            break;
        case 'waning_crescent':
            return 'Minguante';
            break;
        case 'waning_gibbous':
            return 'Crescente Gibosa';
            break;
        case 'waxing_crescent':
            return 'Crescente';
            break;
        case 'waxing_gibbous':
            return 'Minguante Gibosa';
            break;
    
        default:
            break;
    }
}


onMounted(() => {
  // Carregando a imagem na montagem do componente
  let interval = setInterval(() => {
    if(props.moon_phase){
        moon.value.photoSrc = require(`../assets/moon-phases/${props.moon_phase}.png`);
        moon.value.name = nameMoonPhaseInPtBr(props.moon_phase);
        clearInterval(interval);
    }
  }, 2000)
});



</script>
<style scoped lang="scss">
div.box-card {
    position: relative;
    width: 332px;

    div.btn-back {
        position: absolute;
        top: 3px;
        left: 5px;
    }
}

div.title h3 {
    text-align: center;
}

div.divisor {
    display: flex;
    justify-content: space-between;

    .left,
    .right {
        display: flex;
        flex-direction: column;
    }
}

div.moon-phase {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>