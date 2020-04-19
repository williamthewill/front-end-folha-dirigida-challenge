<template>
  <div class="article">
    <el-row>
      <el-col :span="8" v-for="(o) in 9" :key="o" :offset="2">
        <el-card>
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <div style="padding: 14px;">
            <span>Yummy hamburger</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">Operating</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Article",
  props: {
    msg: String
  },
  data() {
    return {
      currentDate: new Date()
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.article .el-col-8 {
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
  width: 100%;
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
