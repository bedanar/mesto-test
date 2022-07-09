<template>
    <v-card max-height="350" 
    height="256" width="256"
    class="fill-height">
        <v-img height="128px" :src="image" class="image-positioning">
            <v-chip class="event-type py-1 px-2 rounded-sm white--text subtitle-2 blue" v-if="type == 'Zoom'" v-text="type"></v-chip>
            <v-chip class="event-type py-1 px-2 rounded-sm white--text subtitle-2 red" v-else-if="type == 'Youtube'" v-text="type"></v-chip>
            <v-chip class="event-type py-1 px-2 rounded-sm white--text subtitle-2 primary" v-else v-text="type"></v-chip>
        </v-img>
        <div class="pa-4">
            <v-card-text class="pl-3">
                <v-row align="center" class="primary-purple font-weight-bold pl-0">
                    <div class="" v-text="date"></div>
                    <div class="mx-2">/</div>
                    <div class="" v-text="time"></div>
                </v-row>
            </v-card-text>
            <div>
                <p class="secondary-black subtitle-2 overflow-hidden font-weight-bold title-limited"
                v-text="title"></p>
            </div>
            <v-card-text class="pl-0 py-0 grey--text font-weight-medium caption" v-text="location"></v-card-text>
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
}
.image-positioning{
    position: relative;
}
.event-type{
    position: absolute;
    top: 3px;
    right: 3px;
}
.title-limited{
    max-height: 38px;
    -webkit-line-clamp: 2;
}
</style>