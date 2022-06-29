<template>
    <v-card max-height="350">
        <v-img height="128px" :src="image" class="image-positioning">
            <span class="event-type blue" v-if="type == 'Zoom'" v-text="type"></span>
            <span class="event-type red" v-else-if="type == 'Youtube'" v-text="type"></span>
            <span class="event-type primary-purple-bg" v-else v-text="type"></span>
        </v-img>
        <div class="pa-4">
            <v-card-text class="pl-3">
                <v-row align="center" class="primary-purple font-weight-bold pl-0">
                    <div class="" v-text="date"></div>
                    <div class="mx-2">/</div>
                    <div class="" v-text="time"></div>
                </v-row>
            </v-card-text>
            <div height="38px" class="overflow-hidden">
                <p class="secondary-black"
                v-text="title"></p>
            </div>
            <v-card-text class="pl-0 py-0 grey-text-location" v-text="location"></v-card-text>
        </div>
    </v-card>
</template>
<script>
export default{
    name: 'EventCard',
    props: {
        type: String,
        image: String,
        date: String,
        time: String,
        title: String,
        location: String
    }
}
</script>
<style>
.primary-purple{
    color: #4A0A52;
}
.primary-purple-bg {
    background: #4A0A52;
}
.secondary-black {
    color: #16061C;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
}
.image-positioning{
    position: relative;
}
.event-type{
    padding: 1px 3px;
    border-radius: 4px;
    color: white;
    position: absolute;
    top: 3px;
    right: 3px;
    font-size: 14px;
}
.grey-text-location{
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #727272;
}
</style>