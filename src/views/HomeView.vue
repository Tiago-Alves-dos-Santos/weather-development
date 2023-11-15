<template>
  <div class="home">

    <el-row justify="center">
      <div :class="{
        'next-card': animation.card_one.next_card,
        'next-card-show': animation.card_one.rotate_inverse
      }">
        <el-card body-class="card-center face">
          <div class="content-img">
            <img :src="image_file" />
          </div>
          <div class="card-title">
            <span>{{ card_center.description }} </span>
            <span>{{ card_center.date }} as {{ card_center.time }}</span>
          </div>
          <div>
            <h1 style="text-align: center;">{{ card_center.temp }}Cº</h1>
          </div>
          <div class="short-info">
            <div>
              <custom-icon icon="umbrella" width="20px" height="20px"></custom-icon>
              <span style="margin-left: 10px;"> {{ card_center.rain_probability }}</span>%
            </div>
            <div>
              <custom-icon icon="compass" width="20px" height="20px"></custom-icon>
              <span style="margin-left: 3px; position: relative; top: -3px;"> {{ card_center.wind_cardinal }}</span>
            </div>
            <div>
              <custom-icon icon="wind" width="20px" height="20px"></custom-icon>
              <span style="margin-left: 10px;"> {{ card_center.wind_speedy }}</span>
            </div>
          </div>
          <!-- botoes -->
          <div style="display: flex; justify-content: space-between; margin-top: 20px;">
            <span style="position: relative; top: 4px;">{{ card_center.city }}</span>
            <el-button type="primary" plain @click="moreOption('next')">Ver mais</el-button>
          </div>
          <div class="menu">
            <el-dropdown>
              <el-button :icon="icons.Setting" circle type="primary" plain></el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="getLocation">LOCALIZAÇÃO ATUAL </el-dropdown-item>
                  <el-dropdown-item @click="goToPage('city')">MUDAR CIDADE </el-dropdown-item>
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
      }" @back-card="moreOption" :humidity="card_center.humidity" :city_name="card_center.city"
        :cloudiness="card_center.cloudiness" :max="card_center.max" :min="card_center.min" :sunrise="card_center.sunrise"
        :sunset="card_center.sunset" :moon_phase="card_center.moon_phase"></card-more-info>
    </el-row>

    <div style="margin-top: 40px;">
      <h1 style="text-align: center;">Previsões Futuras</h1>
      <div class="futures-cards">
        <card-future v-for="(value, index) in cards_future" :key="index" v-show="index != 0" :title="value.date"
          :weekday="value.weekday" :humidity="value.humidity" :cloudiness="value.cloudiness" :max="value.max"
          :min="value.min" :wind_speedy="value.wind_speedy" :rain_probability="value.rain_probability"></card-future>

      </div>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import CardMoreInfo from '@/components/CardMoreInfo.vue';
import CardFuture from '@/components/CardFuture.vue';
import * as Icons from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus';
import axios from 'axios';
import API from '../js/api';
import VALIDATE from '../js/validate';
import DATABASE from '../js/database';
export default {
  name: 'HomeView',
  components: {
    CardMoreInfo,
    CardFuture
  },
  data() {
    return {
      icons: Icons,
      image_file: '',
      animation: {
        card_one: {
          next_card: false,
          rotate_inverse: false
        },
        card_two: {
          next_card: false,
          rotate_inverse: false
        },
      },
      card_center: {
        img_id: '',
        date: '',
        time: '',
        city: '',
        wind_cardinal: '',
        wind_speedy: '',
        sunrise: '',
        sunset: '',
        moon_phase: '',
        humidity: '',
        cloudiness: '',
        temp: '',
        //subjson
        rain_probability: '',
        max: '',
        min: '',
        description: ''
      },
      cards_future: null,
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
    goToPage(page) {
      this.$router.push({ name: page });
    },
    async locationNow(position) {
      DATABASE.setGeoLocation(position.coords.latitude, position.coords.longitude);
      let request = API.urls.urlLocation(position.coords.latitude, position.coords.longitude);
      const response = await axios.get(request);
      this.loadData(response.data.results);
    },
    getLocation() {
      API.getPositionYourLocation(this.locationNow);
    },
    loadData(results,) {
      let forecastToday = results.forecast[0];
      let forecastFuture = results.forecast;
      this.card_center.img_id = results.img_id;
      this.card_center.date = results.date;
      this.card_center.time = results.time;
      this.card_center.city = results.city;
      this.card_center.img_id = results.img_id;
      this.card_center.humidity = results.humidity;
      this.card_center.cloudiness = results.cloudiness;
      this.card_center.wind_speedy = results.wind_speedy;
      this.card_center.wind_cardinal = results.wind_cardinal;
      this.card_center.sunrise = results.sunrise;
      this.card_center.sunset = results.sunset;
      this.card_center.moon_phase = results.moon_phase;
      this.card_center.temp = results.temp;
      //forecast today
      this.card_center.description = forecastToday.description;
      this.card_center.max = forecastToday.max;
      this.card_center.min = forecastToday.min;
      this.card_center.rain_probability = forecastToday.rain_probability;
      //forecast future
      this.cards_future = forecastFuture;
    },
    async start() {
      let request = null;
      let response = null;
      if (DATABASE.getChoose()) {
        switch (DATABASE.getChoose()) {
          case 'Código WOEID':
            request = API.urls.urlWoeid(DATABASE.getwoeid().woeid);
            response = await axios.get(request);
            this.loadData(response.data.results);
            break;
          case 'Geolocalização':
            // API.getPositionYourLocation(this.locationNow);
            try {
              let location = DATABASE.getGeoLocation();
              let request = API.urls.urlLocation(location.latitude, location.longitude);
              const response = await axios.get(request);
              this.loadData(response.data.results);
            } catch (error) {
              ElMessageBox.confirm(
                'Erro com os dados de latitude e logintude!',
                'Atenção',
                {
                  confirmButtonText: 'Mudar valores',
                  cancelButtonText: 'Recarregar',
                  type: 'warning',
                }
              )
                .then(() => {
                  this.$router.push({ name: 'city' });
                })
                .catch(() => {
                  window.location.reload();
                });
            }
            break;
          case 'Nome':
            request = API.urls.urlCityName(DATABASE.getCityName().city_name);
            response = await axios.get(request);
            this.loadData(response.data.results);
            break;

          default:
            break;
        }
      } else { //first time or empty data
        ElMessageBox.confirm(
          'Informe como deseja obter sua localização!',
          'Localização',
          {
            confirmButtonText: 'Sim, desejo informar',
            cancelButtonText: 'Não desejo informar',
            type: 'info',
          }
        )
          .then(() => {
            this.$router.push({ name: 'city' });
          })
          .catch(() => {
              this.$router.push({ name:'empty' });
          });
      }
    }
  },
  mounted() {
    this.start();

    let interval = setInterval(() => {
      if (this.card_center.img_id) {
        this.image_file = require(`../assets/weather/${this.card_center.img_id}.png`);
        clearInterval(interval);
      }
    }, 2000);

  }
}
</script>
<!-- MENU -->
<!-- Mudar cidade -> geolocalizaçao, codifo woid, nome -->
