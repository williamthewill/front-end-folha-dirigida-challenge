<template>
  <div class="book">
    <el-row>
      <el-col :span="22" key="o" :offset="1">
        <el-card>
          <img :src="getImgUrl(this.book.image)" class="image" />
          <div class="data-book">
            <span>
              <strong>Preço: {{getPrice(this.book.price)}}</strong>
            </span>
            <br />
            <span>
              <strong>{{this.book.name}}</strong>
            </span>
            <br />
            <br />
            <span>
              <strong>Categorias:</strong>
            </span>
            <br />
            <div class="categories" v-for="(category) in book.categories" :key="category.name">
              <span>{{category.name}}</span>
            </div>
            <br />
            <span>{{this.book.synopsis}}</span>
            <br />
            <br />
            <span>
              <strong>Authores:</strong>
            </span>
            <br />
            <div class="authors" v-for="(author) in book.authors" :key="author.name">
              <span>{{author.name}}</span>
              <br />
              <span>{{author.description}}</span>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Book",
  data() {
    return {
      currentDate: new Date(),
      book: {}
    };
  },
  beforeMount() {
    axios
      .get(`http://localhost:4000/book/?id=${this.$route.params.id}`)
      .then(resp => {
        this.book = resp.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    getImgUrl(image) {
      return image;
    },
    getPrice(price) {
      if (price) {
        let pFormated = price.toString().replace(".", ",");
        pFormated =
          pFormated.indexOf(",") === -1 ? `${pFormated},00` : pFormated;
        return `R$ ${pFormated}`;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.book .el-col-8 {
  max-width: 16%;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 20%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.el-card {
  position: relative;
  height: 800px;
}

.book img {
  position: absolute;
  left: 10px;
}

.book .data-book {
  position: absolute;
  right: 10px;
  max-width: 75%;
  text-align: left;
}

@media only screen and (max-width: 900px) {
  .book .el-col-8 {
    max-width: 20%;
  }
}
@media only screen and (max-width: 600px) {
  .book .el-col-8 {
    max-width: unset;
  }
}
</style>
