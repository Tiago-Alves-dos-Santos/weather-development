<template>
  <div class="home">

    <el-row justify="center">
      <div :class="{
        'next-card': animation.card_one.next_card,
        'next-card-show': animation.card_one.rotate_inverse
      }">
        <el-card body-class="card-center face">
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
              <custom-icon icon="compass" width="20px" height="20px"></custom-icon>
              <span> SE</span>
            </div>
            <div>
              <custom-icon icon="wind" width="20px" height="20px"></custom-icon>
              <span> 27.7</span> Km/h
            </div>
          </div>
          <!-- botoes -->
          <div style="display: flex; justify-content: space-between; margin-top: 20px;">
            <span style="position: relative; top: 4px;">Itapecerica da Serra, SP</span>
            <el-button type="primary" plain @click="moreOption('next')">Ver mais</el-button>
          </div>
          <div class="menu">
            <el-dropdown>
              <el-button :icon="icons.Setting" circle type="primary" plain></el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="console.log('teste')">LOCALIZAÇÃO ATUAL </el-dropdown-item>
                  <el-dropdown-item @click="goPage('city')">MUDAR CIDADE </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </el-card>
      </div>
      <card-more-info :class="{
        'absolute': true,
        'd-none': !animation.card_two.next_card,
        'd-flex': animation.card_two.next_card,
        'next-card-show': animation.card_two.rotate_inverse,
        'next-card': animation.card_two.next_card
      }" @back-card="moreOption"></card-more-info>
    </el-row>

    <div style="margin-top: 40px;">
        <h1 style="text-align: center;">Previsões Futuras</h1>
      <div class="futures-cards">
        <card-future title="12/12"></card-future>
        <card-future></card-future>
        <card-future></card-future>
        <card-future></card-future>
        <card-future></card-future>
        <card-future></card-future>
      </div>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import CardMoreInfo from '@/components/CardMoreInfo.vue';
import CardFuture from '@/components/CardFuture.vue';
import * as Icons from '@element-plus/icons-vue'
export default {
  name: 'HomeView',
  components: {
    CardMoreInfo,
    CardFuture
  },
  data() {
    return {
      icons: Icons,
      animation: {
        card_one: {
          next_card: false,
          rotate_inverse: false
        },
        card_two: {
          next_card: false,
          rotate_inverse: false
        },

      }
    }
  },
  methods: {
    moreOption(direction) {
      switch (direction) {
        case 'next':
          this.animation.card_one.next_card = true;
          this.animation.card_two.rotate_inverse = true;

          this.animation.card_one.rotate_inverse = false;
          this.animation.card_two.next_card = true
          break;
        case 'back':
          this.animation.card_one.rotate_inverse = true;
          this.animation.card_two.next_card = true

          this.animation.card_one.next_card = false;
          this.animation.card_two.rotate_inverse = false;
          break;

        default:
          break;
      }
    },
    goPage(name) {
      this.$router.push({name:name});
    }
  },

}
</script>
<!-- MENU -->
<!-- Mudar cidade -> geolocalizaçao, codifo woid, nome -->
