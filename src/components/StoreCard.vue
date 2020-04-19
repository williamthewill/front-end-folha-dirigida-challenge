<template>
  <div class="card">
    <el-card class="box-card">
      <div class="items">
        <div v-for="o in 4" :key="o" class="item">
          <img
            class="book-img"
            src="https://assets.wizardingworld.com/frontend/_next/static/images/rectangle-2-312-d69c5cce3cdf1a37a03b312c38335ad1.png"
          />
          <div class="item-container">
            <ul>
              <li>{{`Livro ${o}` }}</li>
              <li>{{`Preço: R$ ${o}` }}</li>
              <li></li>
            </ul>
            <div class="remove-item" title="Remover item do carrinho">
              <i class="el-icon-delete-solid"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="subtotal">{{`R$ ${'10,00'}` }}</div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  height: 500px;
  width: 100%;
  position: absolute;
  right: 0;
  z-index: 99;
}
.card .items {
  width: 100%;
  height: 450px;
  overflow: auto;
}
.card .subtotal {
  width: 100%;
  height: 50px;
  text-align: center;
  padding-top: 25px;
  background-color: #9ed0ee;
  font-size: 25px;
}
.card .items .item {
  height: 100px;
  border: 1px solid rgba(210, 202, 202, 0.5);
  -webkit-background-clip: padding-box; /* for Safari */
  background-clip: padding-box;
  padding: 2px;
  position: relative;
}
.card .items .item img {
  height: 100%;
  float: left;
}
.card .items .item .item-container {
  float: left;
  width: 80%;
  height: 100%;
}
.card .items .item .item-container ul {
  height: 100%;
  position: absolute;
  right: 10%;
  width: 75%;
  margin: 0;
  padding: 0;
}
.card .items .item .item-container ul li {
  text-align: center;
}
.card .items .item .item-container ul li:first-child {
  margin-top: 30px;
}
.card .items .item .item-container .remove-item {
  width: 10%;
  position: absolute;
  right: 0;
  bottom: 8px;
}
.card .items .item .item-container .remove-item:hover {
  cursor: pointer;
}
.card .box-card ul li {
  list-style: none;
}
</style>
