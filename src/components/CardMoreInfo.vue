<template>
    <div class="card-more-info">
        <el-card class="box-card">
            <div class="btn-back">
                <el-button :icon="icons.Back" circle type="primary" plain @click="emit('back-card', 'back')"></el-button>
            </div>
            <div class="title">
                <h3>Itapecerica da Serra, SP</h3>
            </div>
            <div class="divisor">
                <div class="left">
                    <div>
                        <span class="bold">humidity:</span> 83
                    </div>
                    <div>
                        <custom-icon icon="thermometer-cool" width="20px" height="20px"></custom-icon>
                        <span class="bold">40Cº</span> 
                    </div>
                    <div>
                        <custom-icon icon="sunrise" width="20px" height="20px"></custom-icon>
                        <span class="bold">6:20 pm</span> 
                    </div>
                </div>
                <div class="right">
                    <div>
                        <span class="bold">cloudiness:</span> 24.0
                    </div>
                    <div>
                        <custom-icon icon="thermometer-hot" width="20px" height="20px"></custom-icon>
                        <span class="bold">40Cº</span> 
                    </div>
                    <div>
                        <custom-icon icon="sunset" width="20px" height="20px"></custom-icon>
                        <span class="bold">6:20 pm</span> 
                    </div>
                </div>
            </div>
            <div class="moon-phase">
                <h4>MInguante crescente</h4>
                <img src="../assets/moon-phases/waning_crescent.png" alt="">
            </div>
        </el-card>
    </div>
</template>
<script setup>
import * as Icons from '@element-plus/icons-vue'
import { ref } from 'vue'
const icons = ref(Icons);
const emit = defineEmits(['back-card']);


</script>
<style scoped lang="scss">
div.card-more-info {
   
}

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