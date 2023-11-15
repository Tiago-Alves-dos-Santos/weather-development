<template>
    <div>
        <el-card class="box-card">
            <div class="title">
                <h2>
                    {{ props.weekday }} - {{ props.title }}
                </h2>
            </div>
            <div class="divisor">
                <div class="left">
                    <div>
                        <!-- <custom-icon icon="humidity" width="20px" height="20px"></custom-icon> -->
                        <span class="bold">Humidade:</span> {{ props.humidity }} %
                    </div>
                    <div>
                        <custom-icon icon="thermometer-hot" width="20px" height="20px"></custom-icon>
                        <span >{{props.max}}Cº</span>
                    </div>
                    <div>
                        <custom-icon icon="umbrella" width="20px" height="20px"></custom-icon>
                        <span > {{ props.rain_probability }} </span>% 
                    </div>
                </div>
                <div class="right">
                    <div>
                        <span class="bold">Nebulosidade:</span> {{ props.cloudiness }}%
                    </div>
                    <div>
                        <custom-icon icon="thermometer-cool" width="20px" height="20px"></custom-icon>
                        <span >{{props.min}}Cº</span>
                    </div>
                    <div>
                        <custom-icon icon="wind" width="20px" height="20px"></custom-icon>
                        <span> {{ props.wind_speedy }} </span>
                    </div>
                </div>
            </div>
        </el-card>
    </div>
</template>
<script setup>
const props = defineProps({
    title:{
        type:String,
        default:''
    },
    weekday:{
        type:String,
        default:''
    },
    humidity:{
        type:[String, Number],
        default:''
    },
    cloudiness:{
        type:[String, Number],
        default:''
    },
    min:{
        type:[String, Number],
        default:0
    },
    max:{
        type:[String, Number],
        default:0
    },
    rain_probability:{
        type:[String, Number],
        default:0
    },
    wind_speedy:{
        type:String,
        default:'0'
    },
});
</script>
<style lang="scss" scoped>
div.box-card {
    width: 331px;
    margin: 5px;
}

div.title h2{
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
</style>