<!-- =========================================================================================
  File Name: AddNewDataSidebar.vue
  Description: Add New Data - Sidebar component
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->
<!-- 주문생성 팝업 -->
<template>
  <vs-popup class="holamundo" title="주문" :active.sync="popupActive">
    <div class="p-6">
      <!-- 날짜 & 시간 -->
      <flat-pickr
        :config="configdateTimePicker"
        class="w-full"
        label="주문 날짜 및 시간"
        v-model="datetime"
        placeholder="주문 날짜 및 시간"
      />
      <!-- <span
                  class="text-danger text-sm"
                  v-show="errors.has('item-name')"
                  >{{ errors.first("item-name") }}</span
                > -->

      <!-- 떡 선택 -->
      <div class="vx-row mt-6" v-for="(dduck, index) in dducks" :key="index">
        <div class="vx-col flex-1 mb-2">
          <v-select
            taggable
            placeholder="떡"
            name="order-item"
            v-model="dduck.item"
            v-validate="'required'"
            :options="dduckList"
            :dir="$vs.rtl ? 'rtl' : 'ltr'"
          />
        </div>
        <div class="vx-col flex-1 mb-2">
          <vs-input-number v-model="dduck.amount" label="수량:" />
        </div>
        <div class="vx-col flex-1 mb-2">
          <v-select
            taggable
            placeholder="단위"
            name="order-item"
            v-model="dduck.unit"
            v-validate="'required'"
            :options="unitList"
            :dir="$vs.rtl ? 'rtl' : 'ltr'"
          />
        </div>
        <feather-icon
          icon="TrashIcon"
          svgClasses="w-5 h-5 hover:text-danger stroke-current"
          class="ml-2"
          @click="deleteRow(index)"
        />
      </div>

      <!-- 떡 추가 버튼 -->
      <vs-divider class="mt-2">
        <vs-button
          radius
          type="border"
          icon-pack="feather"
          icon="icon-plus"
          @click="addRow"
        ></vs-button>
      </vs-divider>

      <div class="vx-row mt-6">
        <div class="vx-col flex-1 mb-2">
          <label>스티커</label>
          <vs-switch
            v-model="stickerflg"
            icon-pack="feather"
            vs-icon-on="icon-check-circle"
            vs-icon-off="icon-slash"
          >
            <span slot="on"></span>
            <span slot="off"></span>
          </vs-switch>
        </div>
        <div class="vx-col flex-1 mb-2">
          <label>OPP</label>
          <vs-switch
            v-model="oppflg"
            icon-pack="feather"
            vs-icon-on="icon-check-circle"
            vs-icon-off="icon-slash"
          >
            <span slot="on"></span>
            <span slot="off"></span>
          </vs-switch>
        </div>
        <div class="vx-col flex-1 mb-2">
          <ul class="centerx">
            <li>
              <vs-radio v-model="pickflg" vs-value="픽업">픽업</vs-radio>
            </li>
            <li>
              <vs-radio v-model="pickflg" vs-value="배달">배달</vs-radio>
            </li>
            <li>
              <vs-radio v-model="pickflg" vs-value="퀵">퀵</vs-radio>
            </li>
          </ul>
        </div>
        <div class="vx-col flex-1 mb-2">
          <ul class="centerx">
            <li>
              <vs-radio v-model="cashflg" vs-value="현금">현금</vs-radio>
            </li>
            <li>
              <vs-radio v-model="cashflg" vs-value="카드">카드</vs-radio>
            </li>
          </ul>
        </div>
        <div class="vx-col flex-1 mb-2">
          <ul class="centerx">
            <li>
              <vs-radio v-model="checkflg" vs-value="선불">선불</vs-radio>
            </li>
            <li>
              <vs-radio v-model="checkflg" vs-value="후불">후불</vs-radio>
            </li>
          </ul>
        </div>
      </div>

      <!-- 주문자 이름 -->
      <div class="vx-row mb-2">
        <div class="vx-col w-full">
          <vs-input
            class="w-full"
            icon-pack="feather"
            icon="icon-user"
            icon-no-border
            label-placeholder="주문자 이름"
            v-model="name"
          />
        </div>
      </div>
      <!-- 주문자 전화번호 -->
      <div class="vx-row mb-2">
        <div class="vx-col w-full">
          <vs-input
            class="w-full"
            icon-pack="feather"
            icon="icon-smartphone"
            icon-no-border
            label-placeholder="전화번호"
            v-model="mobile"
          />
        </div>
      </div>
      <!-- 주문자 주소 -->
      <div class="vx-row mb-8">
        <div class="vx-col w-full">
          <vs-input
            class="w-full"
            icon-pack="feather"
            icon="icon-home"
            icon-no-border
            label-placeholder="주소"
            v-model="address"
          />
        </div>
      </div>

      <vs-textarea class="mt-2" label="상세내용" v-model="note" />

      <!-- 가격 -->
      <vx-input-group class="mb-base w-full">
        <template slot="prepend">
          <div class="mt-5 w-full prepend-text bg-primary">
            <span>₩</span>
          </div>
        </template>

        <vs-input
          placeholder="합계"
          class="mt-5 w-full"
          v-model="price"
          v-validate="{ required: true, regex: /\d+(\.\d+)?$/ }"
          name="item-price"
        />

        <template slot="append">
          <div class="mt-5 w-full append-text bg-primary">
            <span>원</span>
          </div>
        </template>
      </vx-input-group>

      <div class="flex flex-wrap items-center p-6" slot="footer">
        <vs-row vs-align="center" vs-type="flex" vs-justify="center" vs-w="12">
          <vs-button class="mr-6" @click="onAddData" :disabled="!isFormValid"
            >저장</vs-button
          >
          <vs-button type="border" color="danger" @click="popupActive = false"
            >취소</vs-button
          >
        </vs-row>
      </div>
    </div>
  </vs-popup>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";

export default {
  props: {
    // isSidebarActive: {
    isPopupActive: {
      type: Boolean,
      required: true,
    },
    data: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    VuePerfectScrollbar,
  },
  data() {
    return {
      dataId: null,
      dataName: "",
      dataCategory: null,
      dataImg: null,
      dataOrder_status: "pending",
      dataPrice: 0,

      category_choices: [
        { text: "Audio", value: "audio" },
        { text: "Computers", value: "computers" },
        { text: "Fitness", value: "fitness" },
        { text: "Appliance", value: "appliance" },
      ],

      order_status_choices: [
        { text: "Pending", value: "pending" },
        { text: "Canceled", value: "canceled" },
        { text: "Delivered", value: "delivered" },
        { text: "On Hold", value: "on_hold" },
      ],
      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: 0.6,
      },
    };
  },
  watch: {
    isSidebarActive(val) {
      if (!val) return;
      if (Object.entries(this.data).length === 0) {
        this.initValues();
        this.$validator.reset();
      } else {
        const { category, id, img, name, order_status, price } = JSON.parse(
          JSON.stringify(this.data)
        );
        this.dataId = id;
        this.dataCategory = category;
        this.dataImg = img;
        this.dataName = name;
        this.dataOrder_status = order_status;
        this.dataPrice = price;
        this.initValues();
      }
      // Object.entries(this.data).length === 0 ? this.initValues() : { this.dataId, this.dataName, this.dataCategory, this.dataOrder_status, this.dataPrice } = JSON.parse(JSON.stringify(this.data))
    },
  },
  computed: {
    isSidebarActiveLocal: {
      get() {
        return this.isSidebarActive;
      },
      set(val) {
        if (!val) {
          this.$emit("closeSidebar");
          // this.$validator.reset()
          // this.initValues()
        }
      },
    },
    isFormValid() {
      return (
        !this.errors.any() &&
        this.dataName &&
        this.dataCategory &&
        this.dataPrice > 0
      );
    },
    scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    },
  },
  methods: {
    initValues() {
      if (this.data.id) return;
      this.dataId = null;
      this.dataName = "";
      this.dataCategory = null;
      this.dataOrder_status = "pending";
      this.dataPrice = 0;
      this.dataImg = null;
    },
    submitData() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          const obj = {
            id: this.dataId,
            name: this.dataName,
            img: this.dataImg,
            category: this.dataCategory,
            order_status: this.dataOrder_status,
            price: this.dataPrice,
          };

          if (this.dataId !== null && this.dataId >= 0) {
            this.$store.dispatch("dataList/updateItem", obj).catch((err) => {
              console.error(err);
            });
          } else {
            delete obj.id;
            obj.popularity = 0;
            this.$store.dispatch("dataList/addItem", obj).catch((err) => {
              console.error(err);
            });
          }

          this.$emit("closeSidebar");
          this.initValues();
        }
      });
    },
    updateCurrImg(input) {
      if (input.target.files && input.target.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.dataImg = e.target.result;
        };
        reader.readAsDataURL(input.target.files[0]);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.add-new-data-sidebar {
  ::v-deep .vs-sidebar--background {
    z-index: 52010;
  }

  ::v-deep .vs-sidebar {
    z-index: 52010;
    width: 400px;
    max-width: 90vw;

    .img-upload {
      margin-top: 2rem;

      .con-img-upload {
        padding: 0;
      }

      .con-input-upload {
        width: 100%;
        margin: 0;
      }
    }
  }
}

.scroll-area--data-list-add-new {
  // height: calc(var(--vh, 1vh) * 100 - 4.3rem);
  height: calc(var(--vh, 1vh) * 100 - 16px - 45px - 82px);

  &:not(.ps) {
    overflow-y: auto;
  }
}
</style>
