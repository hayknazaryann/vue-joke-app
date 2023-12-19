<template>
    <v-layout>
        <v-app id="inspire">
            <v-app-bar class="bg-grey-darken-4" title="Application">

            </v-app-bar>
            <v-main class="d-flex justify-center" style="min-height: 500px;">
                <router-view></router-view>
            </v-main>
        </v-app>
    </v-layout>
</template>

<script>
export default {
    name: "App",
    data: () => ({
        links: [
            'Home',
            'About Us',
            'Team',
            'Services',
            'Blog',
            'Contact Us',
        ],
        icons: [
            'mdi-facebook',
            'mdi-twitter',
            'mdi-linkedin',
            'mdi-instagram',
        ],
    }),
}
</script>

<style scoped>

</style>
