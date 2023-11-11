<template>
    <div>
        <el-card class="box-card">
            <div class="title">
                <h2 v-text="props.title"></h2>
            </div>
            <div class="divisor">
                <div class="left">
                    <div>
                        <!-- <custom-icon icon="humidity" width="20px" height="20px"></custom-icon> -->
                        <span class="bold">humidity:</span> 83
                    </div>
                    <div>
                        <custom-icon icon="thermometer-hot" width="20px" height="20px"></custom-icon>
                        <span >40Cº</span>
                    </div>
                    <div>
                        <custom-icon icon="umbrella" width="20px" height="20px"></custom-icon>
                        <span > 0.0</span>% 
                    </div>
                </div>
                <div class="right">
                    <div>
                        <span class="bold">cloudiness:</span> 24.0
                    </div>
                    <div>
                        <custom-icon icon="thermometer-cool" width="20px" height="20px"></custom-icon>
                        <span >40Cº</span>
                    </div>
                    <div>
                        <custom-icon icon="wind" width="20px" height="20px"></custom-icon>
                        <span> 25.5</span> km/h
                    </div>
                </div>
            </div>
            <div class="btn-more">
                <el-button>Ver mais</el-button>
            </div>
        </el-card>
    </div>
</template>
<script setup>
const props = defineProps({
    title:{
        type:String,
        default:'10/11'
    }
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
div.btn-more{
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
}
</style>