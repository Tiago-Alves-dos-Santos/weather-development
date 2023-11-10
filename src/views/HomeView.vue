<template>
  <div class="home">
    <el-row justify="center">
      <el-card :body-style="{ padding: '0px' }" body-class="card-center">
        <div class="content-img">
          <img src="../assets/weather/10.png"
          class="image" />
        </div>
        <div style="padding: 14px">
          <span>Description</span>
          <div class="bottom">
            <time class="time">2001/02/89</time>
            <el-button text class="button">Operating</el-button>
          </div>
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
      </el-card>
    </el-row>
  </div>
</template>
<style>
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>

<script>
// @ is an alias to /src
// import GlassCard from '@/components/GlassCard.vue';
export default {

  name: 'HomeView',
  components: {
  }
}
</script>

<!-- Fazer nascer e por do sol visual -->
<!-- nebulosidade -->
<!-- temperaturea atual maxima e minima -->
<!-- humidade -->
<!-- fase da lua -->
