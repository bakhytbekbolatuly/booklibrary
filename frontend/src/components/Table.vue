<template>
    <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                Title
              </th>
              <th class="text-left">
                Author
              </th>
              <th class="text-left">
                Language
              </th>
              <th class="text-left">
                Publisher
              </th>
              <th class="text-left">
                ISBN
              </th>
              <th class="text-center">
                Options
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in items"
              :key="index"
            >
              <td>{{ item.title }}</td>
              <td>{{ item.author }}</td>
              <td>{{ item.lang }}</td>
              <td>{{ item.publisher }}</td>
              <td>{{ item.isbn }}</td>
              <td class="text-center">
                <v-btn title="delete" @click="deleteItem(item.id, index)">
                  <v-icon dark color="red">mdi-minus</v-icon>
                </v-btn>
              </td>

            </tr>
          </tbody>
        </template>
    </v-simple-table>
</template>

<script>
import axios from "axios";

export default {
    props: {
        items: Array
    },
    methods: {
      deleteItem(id, index) {
        axios.delete("/delete/" + id).then(() => {
          this.items.splice(index, 1);
        });
      }
    }
}

</script>