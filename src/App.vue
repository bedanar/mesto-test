<template>
  <v-app class="app-bg">
    <v-main>
      <v-container>
        <v-row class="align-center">
          <div class="py-4 d-flex flex-wrap align-center col-12 col-lg-10">
            <h2 class="font-weight-bold primary-purple">Ближайшие события</h2>
            <div class="d-flex align-center">
              <span class="pl-md-4 pr-4 grey--text d-flex">Найдено: <span class="primary-purple font-weight-bold">{{events.length}}</span></span>
              <span class="grey--text d-flex">Сегодня: <span class="primary-purple font-weight-bold">{{events.length}}</span></span>
              <button class="font-weight-bold primary-purple text-decoration-underline pl-16 d-md-none">Смотреть все</button>
            </div>
          </div>
          <div class="d-none d-md-flex col-12 col-lg-2">
            <button class="font-weight-bold primary-purple text-decoration-underline">Смотреть все</button>
          </div>
        </v-row>
        <v-row class="d-flex flex-wrap align-start justify-center">
          <template v-for="{type, image, date, time, title, location} in events">
            <v-col :key="title"  :sm="events.length/2" :cols="events.length" lg="3">
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
      { type: 'Zoom', image: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg', date: 'Чт Дек 4', time: '18:00', title: 'Consectetur dskvnsd sdkvjbs adipiscing elit lipsum cras', location: 'St.Petersburg, Russia ', organisation: 'Алексей Кончаловский', organisationPhoto: '',  rating: 0, participants: []},
      { type: 'Youtube', image: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg', date: 'Чт Дек 4', time: '18:00', title: 'Consectetur adipiscing elit cras', location: 'St.Petersburg, Russia ', organisation: 'Алексей Кончаловский', organisationPhoto: '', rating: 0, participants: []},
      { type: 'Youtube', image: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg', date: 'Чт Дек 4', time: '18:00', title: 'Consectetur adipiscing elit lipsum', location: 'St.Petersburg, Russia ', organisation: 'Алексей Кончаловский', organisationPhoto: '', rating: 0, participants: []},
      { type: 'На месте', image: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg', date: 'Чт Дек 4', time: '18:00', title: 'Consectetur adipiscing elit lipsum', location: 'St.Petersburg, Russia ', organisation: 'Алексей Кончаловский', organisationPhoto: '', rating: 0, participants: []},
      { type: 'На месте', image: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg', date: 'Чт Дек 4', time: '18:00', title: 'Consectetur adipiscing elit lipsum', location: 'St.Petersburg, Russia ', organisation: 'Алексей Кончаловский', organisationPhoto: '', rating: 0, participants: []},
      { type: 'Zoom', image: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg', date: 'Чт Дек 4', time: '18:00', title: 'Consectetur adipiscing elit lipsum', location: 'St.Petersburg, Russia ', organisation: 'Алексей Кончаловский', organisationPhoto: '', rating: 0, participants: []},
      { type: 'Zoom', image: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg', date: 'Чт Дек 4', time: '18:00', title: 'Consectetur adipiscing elit lipsum', location: 'St.Petersburg, Russia ', organisation: 'Алексей Кончаловский', organisationPhoto: '', rating: 0, participants: []},
      { type: 'Zoom', image: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg', date: 'Чт Дек 4', time: '18:00', title: 'Consectetur adipiscing elit lipsum', location: 'St.Petersburg, Russia ', organisation: 'Алексей Кончаловский', organisationPhoto: '', rating: 0, participants: []},

    ]
  }),
};
</script>
<style>
  .app-bg{
    background-color: #F1F1F1;
  }
</style>