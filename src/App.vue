<template class="app-bg">
  <v-app>
    <v-main>
      <v-container>
        <v-row class="align-center">
          <div class="py-4 d-flex flex-wrap align-center col-12 col-sm-10">
            <h2 class="title font-weight-bold primary--text">Ближайшие события</h2>
            <div class="d-flex align-center">
              <span class="pl-0 pl-sm-4 pr-4 font-weight-medium caption grey--text d-flex">Найдено: <span class="primary-purple font-weight-bold">{{events.length}}</span></span>
              <span class="grey--text font-weight-medium caption d-flex">Сегодня: <span class="primary--text font-weight-bold">{{events.length}}</span></span>
              <button class="font-weight-bold text-decoration-underline primary--text pl-16 d-flex d-sm-none">Смотреть все</button>
            </div>
          </div>
          <div class="d-none d-sm-flex col-12 col-sm-2">
            <button class="font-weight-bold primary--text text-decoration-underline">Смотреть все</button>
          </div>
        </v-row>
        <v-row class="d-flex flex-wrap justify-center justify-sm-start">
          <template v-for="{type, image, date, time, title, location} in events">
            <v-col :key="title" :cols="events.length" :sm="parseInt(events.length/2)" lg="3">
              <EventCard :type='type' :image="image" :title="title" :date="date" :time="time" :location="location" />
            </v-col>
          </template>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import EventCard from './components/EventCard.vue'
export default {
  name: 'App',

  components: {
    EventCard
  },

  data: () => ({
    events : [
      { type: 'Zoom', image: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg', date: 'Чт Дек 4', time: '18:00', title: 'Consectetur dfkjnd dfkjgn sdkjfn dfjgs urghsj rugh uwrhr urghieug ug eugeughe dskvnsd sdkvjbs adipiscing elit lipsum cras', location: 'St.Petersburg, Russia ', organisation: 'Алексей Кончаловский', organisationPhoto: '',  rating: 0, participants: []},
      { type: 'Youtube', image: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg', date: 'Чт Дек 4', time: '18:00', title: 'Consectetur adipiscing elit cras', location: 'St.Petersburg, Russia ', organisation: 'Алексей Кончаловский', organisationPhoto: '', rating: 0, participants: []},
      { type: 'Youtube', image: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg', date: 'Чт Дек 4', time: '18:00', title: 'Consectetur adipiscing elit lipsum', location: 'St.Petersburg, Russia ', organisation: 'Алексей Кончаловский', organisationPhoto: '', rating: 0, participants: []},
      { type: 'На месте', image: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg', date: 'Чт Дек 4', time: '18:00', title: 'Consectetur adipiscing elit lipsum', location: 'St.Petersburg, Russia ', organisation: 'Алексей Кончаловский', organisationPhoto: '', rating: 0, participants: []},
      { type: 'На месте', image: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg', date: 'Чт Дек 4', time: '18:00', title: 'Consectetur aывмыдт кшу кшуауркdipiscing elit lipsum', location: 'St.Petersburg, Russia ', organisation: 'Алексей Кончаловский', organisationPhoto: '', rating: 0, participants: []},
      { type: 'Zoom', image: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg', date: 'Чт Дек 4', time: '18:00', title: 'Consectetur adipiscing elit lipsum', location: 'St.Petersburg, Russia ', organisation: 'Алексей Кончаловский', organisationPhoto: '', rating: 0, participants: []},
      { type: 'Zoom', image: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg', date: 'Чт Дек 4', time: '18:00', title: 'Consectetur adipiscing elit lipsum', location: 'St.Petersburg, Russia ', organisation: 'Алексей Кончаловский', organisationPhoto: '', rating: 0, participants: []},
      { type: 'Zoom', image: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg', date: 'Чт Дек 4', time: '18:00', title: 'Consectetur adipiscing elit lipsum', location: 'St.Petersburg, Russia ', organisation: 'Алексей Кончаловский', organisationPhoto: '', rating: 0, participants: []},
      // { type: 'Zoom', image: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg', date: 'Чт Дек 4', time: '18:00', title: 'Consectetur adipiscing elit lipsum', location: 'St.Petersburg, Russia ', organisation: 'Алексей Кончаловский', organisationPhoto: '', rating: 0, participants: []},
 
    ]
  }),
};
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');
  @import url('./main.scss');
  body{
    font-family: 'Manrope', sans-serif;
  }
  .app-bg{
    background-color: #F1F1F1;
  }
</style>