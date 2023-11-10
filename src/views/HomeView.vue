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
          <span style="position: relative; top: 4px;">GRANJA-CE</span>
          <el-button type="primary" plain>Ver mais</el-button>
        </div>
        <div class="menu">
          <el-dropdown>
            <el-button :icon="icons.Setting" circle type="primary" plain ></el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="console.log('teste')">LOCALIZAÇÃO ATUAL </el-dropdown-item>
                <el-dropdown-item>MUDAR CIDADE </el-dropdown-item>
                <el-dropdown-item>DIAS - FUTUROS </el-dropdown-item>
                <el-dropdown-item>DIAS - PASSADO  </el-dropdown-item>
                <el-dropdown-item>DATA - PERÍODO </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-card>
    </el-row>



  </div>
</template>


<script>
// @ is an alias to /src
// import GlassCard from '@/components/GlassCard.vue';
import * as Icons from '@element-plus/icons-vue'
export default {
  name: 'HomeView',
  data() {
    return {
      icons: Icons
    }
  },
  components: {
  }
}
</script>

<!-- Fazer nascer e por do sol visual -->
<!-- nebulosidade -->
<!-- temperaturea atual maxima e minima -->
<!-- humidade -->
<!-- fase da lua -->


<!-- MENU -->
<!-- Mudar cidade -> geolocalizaçao, codifo woid, nome -->
