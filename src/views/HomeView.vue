<template>
  <div class="home">
    <el-row justify="center">
      <el-card body-class="card-center">
        <div class="content-img">
          <img src="../assets/weather/10.png" />
        </div>
        <div class="card-title">
          <span>Chuva Forte </span>
          <span>10/11/2023</span>
        </div>
        <div>
          <h1 style="text-align: center;">31Cº</h1>
        </div>
        <div class="short-info">
          <div>
            <custom-icon icon="umbrella" width="20px" height="20px"></custom-icon> 
            <span> 0.0</span>%
          </div>
          <div>
            <custom-icon icon="compass"  width="20px" height="20px"></custom-icon>
            <span> SE</span>
          </div>
          <div>
            <custom-icon icon="wind"  width="20px" height="20px"></custom-icon>
            <span> 27.7</span> Km/h
          </div>
        </div>
        <!-- botoes -->
        <div style="display: flex; justify-content: space-between; margin-top: 20px;">
          <span style="position: relative; top: 4px;">Itapecerica da Serra, SP</span>
          <el-button type="primary" plain>Ver mais</el-button>
        </div>
        <div class="menu">
          <el-dropdown>
            <el-button :icon="icons.Setting" circle type="primary" plain ></el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="console.log('teste')">LOCALIZAÇÃO ATUAL </el-dropdown-item>
                <el-dropdown-item>MUDAR CIDADE </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-card>
      <card-more-info></card-more-info>
    </el-row>

    <div class="futures-cards">
      
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import CardMoreInfo from '@/components/CardMoreInfo.vue';
import * as Icons from '@element-plus/icons-vue'
export default {
  name: 'HomeView',
  data() {
    return {
      icons: Icons
    }
  },
  components: {
    CardMoreInfo
  }
}
</script>
<!-- MENU -->
<!-- Mudar cidade -> geolocalizaçao, codifo woid, nome -->
