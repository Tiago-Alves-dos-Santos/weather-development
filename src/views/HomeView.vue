<template>
  <div class="home">
    <el-row justify="center">
      <el-card body-class="card-center">
        <div class="content-img">
          <img src="../assets/weather/10.png" />
        </div>
        <div class="card-title">
          <span>Description </span>
          <time>2001/02/89</time>
        </div>

        <div>
          <ul>
            <li>
              <!-- probablildade guarda chuva icone -->
              <span>Chuva</span> 0.0
            </li>
            <li>
              <!-- Direção do vento, seta icone -->
              <span>Direção</span> 0.0
            </li>
            <li>
              <!-- vento icone -->
              <span>Vento</span> 0.0
            </li>
          </ul>
        </div>
        <!-- botoes -->
        <div style="display: flex; justify-content: flex-end;">
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
