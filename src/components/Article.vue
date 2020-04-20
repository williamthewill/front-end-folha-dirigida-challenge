<template>
  <div class="article">
    <el-row>
      <div v-for="(book, index) in books" :key="book.id" :book-index="index">
        <router-link :to="getRoute(book)" class="dropdown-item">
          <el-col :span="8" :offset="2">
            <el-card>
              <img :src="getImgUrl(book.image)" class="image" />
              <div style="padding: 14px;">
                <span>{{book.name}}</span>
                <br />
                <span>
                  <strong>Preço: {{getPrice(book.price)}}</strong>
                </span>
              </div>
            </el-card>
          </el-col>
        </router-link>
      </div>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Article",
  props: {},
  data() {
    return {
      currentDate: new Date(),
      books: []
    };
  },
  methods: {
    getRoute(book) {
      return {
        path: `book/${book.id}`,
        params: { id: book.id }
      };
    },
    getImgUrl(image) {
      return image;
    },
    getPrice(price) {
      let pFormated = price.toString().replace(".", ",");
      pFormated = pFormated.indexOf(",") === -1 ? `${pFormated},00` : pFormated;
      return `R$ ${pFormated}`;
    }
  },
  beforeMount() {
    axios
      .get("http://localhost:4000/books")
      .then(resp => {
        this.books = resp.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.article .el-col-8 {
  max-width: 16%;
  margin-bottom: 10px;
}
article .time {
  font-size: 13px;
  color: #999;
}

article .bottom {
  margin-top: 13px;
  line-height: 12px;
}

article .button {
  padding: 0;
  float: right;
}

.el-card {
  height: 500px;
}

.image {
  max-height: 350px;
  max-width: 100%;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

@media only screen and (max-width: 900px) {
  .article .el-col-8 {
    max-width: 20%;
  }
}
@media only screen and (max-width: 600px) {
  .article .el-col-8 {
    max-width: unset;
  }
}
</style>
