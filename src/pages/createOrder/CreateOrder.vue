<template>
  <div class="create_order">
    <Header title="生成訂單" />
    <van-contact-card
      type="edit"
      :name="currentContact.name"
      :tel="currentContact.tel"
      @click="onEdit"
    />
    <div class="content">
      <div v-for="i in store.state.orderList" :key="i">
        <van-card
          :num="i.num"
          :price="i.price"
          :title="i.title"
          :thumb="i.pic"
        />
      </div>
    </div>
    <div class="pay-wrap">
      <div class="price">
        <span>商品金額</span>
        <span>￥{{ allPrice }}</span>
      </div>
      <van-button
        class="pay-btn"
        type="primary"
        @click="handleCreateOrder"
        color="#ffc400"
        block
      >
        生成訂單
      </van-button>
    </div>
  </div>
</template>

<script>
import Header from "../../components/Header.vue";
import { toRefs, reactive, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from 'vue-router';
import { Dialog } from 'vant';
export default {
  components: {
    Header,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    let data = reactive({
      currentContact: {
        name: "",
        tel: "",
      },
      allPrice: 0,
    });

    // 用户資訊初始化
    const initUser = () => {
      store.state.userAddress.forEach((item) => {
        if (item.isDefault) {
          data.currentContact.name = item.name;
          data.currentContact.tel = item.tel;
        }
      });
    };

    const initPrice = () => {
      let price = 0;
      if (store.state.orderList.length) {
        store.state.orderList.forEach((item) => {
          price += item.num * item.price;
        });
        data.allPrice = price;
      }
    };
    onMounted(() => {
      initPrice();
      initUser();
    });

    //地址編輯按鈕
    const onEdit = () => {
      router.push('./address')
    };

    // 生成訂單按鈕
    const handleCreateOrder = () => {
      Dialog.alert({
        title: "提示",
        message: "恭喜！您的訂單已完成",
      }).then(() => {
        let newList = store.state.cartList.filter((item) => {
          return !route.query.list.includes(item.id + "");
        });
        store.commit("DELETE", newList);
        store.commit("UPDATEORDER");
        router.push("./order");
      });
    };
    return {
      ...toRefs(data),
      onEdit,
      store,
      handleCreateOrder,
    };
  },
};
</script>

<style lang='less' scoped>
.create_order {
  display: flex;
  flex-flow: column;
  height: 100%;
  .content {
    flex: 1;
    overflow-y: auto;
  }
  .pay-wrap {
    padding: 10px 0;
    width: 100%;
    background: #fff;
    border-top: 1px solid #e9e9e9;
    > div {
      display: flex;
      justify-content: space-between;
      padding: 0 5%;
      margin: 10px 0;
      font-size: 14px;
      span:nth-child(2) {
        color: red;
        font-size: 18px;
      }
    }
    .pay-btn {
      width: 90%;
      margin: 0 auto;
    }
  }
}
</style>