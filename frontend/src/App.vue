<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title>{{ this.title }}</v-toolbar-title>
      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main>
      <Form v-bind:items="items"/>
      <Table v-bind:items="items"/>
    </v-main>
    <v-footer class="text-center">
        <div>Peter the Great St. Petersburg Polytechnic University</div>
        <v-spacer></v-spacer>
        <div> {{ new Date().getFullYear() }}  - <span>Bakhyt Bekbolatuly</span></div>
    </v-footer>
  </v-app>
</template>

<script>
import Form from './components/Form';
import Table from './components/Table';
import axios from "axios";

export default {
  name: 'App',

  components: {
    Form, 
    Table,
  },

  data: () => ({
    title: 'Peer-graded Assignment: Web Application design (Web Development with Java Spring Framework)',
    items: []
  }),
  methods: {
      getList () {
        axios.get("/list").then(response => {
          this.items = response.data;
        })
      }
    },
    created () {
      this.getList();
      document.title = this.title;
    }
};
</script>
