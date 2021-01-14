<template>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <div class="text-right ma-5">
            <v-btn
                class="mx-2"
                fab
                dark
                color="indigo"
                v-bind="attrs"
                v-on="on"
            >
                <v-icon dark>
                mdi-plus
                </v-icon>
            </v-btn>
        </div>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Book Info</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Title"
                  required
                  v-model="title"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Author"
                  required
                  v-model="author"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Lang"
                  required
                  v-model="lang"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Publisher"
                  required
                  v-model="publisher"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="ISBN"
                  required
                  v-model="isbn"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="saveForm"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import axios from "axios";

export default {
    props: {
        items: Array
    },
    methods: {
        saveForm () {
            this.dialog = false
            axios.post("/save", {
                title: this.title,
                author: this.author,
                lang: this.lang,
                publisher: this.publisher,
                isbn: this.isbn
            }).then(response => {
                this.items.push(response.data);

                this.title = null
                this.author = null
                this.lang = null
                this.publisher = null
                this.isbn = null
            });
        }
    },
    data: () => ({
        dialog: false,
        title: null,
        author: null,
        lang: null,
        publisher: null,
        isbn: null
    }),
}
</script>