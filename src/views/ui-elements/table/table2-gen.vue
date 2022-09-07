<!-- =========================================================================================
    File Name: TableStriped.vue
    Description: Rendering default table with striped style
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="data-list-list-view" class="data-list-container">
    <data-view-sidebar
      :isSidebarActive="addNewDataSidebar"
      @closeSidebar="toggleDataSidebar"
      :data="sidebarData"
    />
    <div class="export-table">
      <vs-table search ref="table" :data="users">
        <div
          slot="header"
          class="flex flex-wrap-reverse items-center flex-grow justify-between"
        >
          <div
            class="flex flex-wrap-reverse items-center data-list-btn-container"
          >
            <!-- 다운로드 버튼 -->
            <vs-button
              type="filled"
              @click="activePrompt = true"
              class="mr-4 mb-4"
              icon-pack="feather"
              icon="icon-download"
              >다운로드</vs-button
            >
            <vs-dropdown
              vs-trigger-click
              class="dd-actions cursor-pointer mb-4"
            >
            </vs-dropdown>
            <vs-prompt
              title="다운로드"
              class="export-options"
              @cancle="clearFields"
              @accept="exportToExcel"
              accept-text="확인"
              cancel-text="취소"
              @close="clearFields"
              :active.sync="activePrompt"
            >
              <vs-input
                v-model="fileName"
                placeholder="파일 이름을 입력하세요.."
                class="w-full"
              />
              <v-select
                v-model="selectedFormat"
                :options="formats"
                class="my-4"
              />
              <div class="flex">
                <span class="mr-4">맞춤 셀 넓이:</span>
                <vs-switch v-model="cellAutoWidth">>맞춤 셀 넓이</vs-switch>
              </div>
            </vs-prompt>
            <!-- ADD NEW -->
            <!-- <div class="btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-primary border border-solid border-primary" @click="addNewData"> -->
            <vs-button
              type="border"
              icon-pack="feather"
              icon="icon-plus"
              @click="popupActive = true"
              class="mr-4 mb-4"
              >주문 추가</vs-button
            >
            <!-- 주문생성 팝업 -->
            <vs-popup class="holamundo" title="주문" :active.sync="popupActive">
              <div class="p-6">
                <h4>
                  주문
                  {{ Object.entries(this.data).length === 0 ? "작성" : "수정" }}
                </h4>
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
                <div
                  class="vx-row mt-6"
                  v-for="(dduck, index) in dducks"
                  :key="index"
                >
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
                        <vs-radio v-model="pickflg" vs-value="픽업"
                          >픽업</vs-radio
                        >
                      </li>
                      <li>
                        <vs-radio v-model="pickflg" vs-value="배달"
                          >배달</vs-radio
                        >
                      </li>
                      <li>
                        <vs-radio v-model="pickflg" vs-value="퀵">퀵</vs-radio>
                      </li>
                    </ul>
                  </div>
                  <div class="vx-col flex-1 mb-2">
                    <ul class="centerx">
                      <li>
                        <vs-radio v-model="cashflg" vs-value="현금"
                          >현금</vs-radio
                        >
                      </li>
                      <li>
                        <vs-radio v-model="cashflg" vs-value="카드"
                          >카드</vs-radio
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="vx-col flex-1 mb-2">
                    <ul class="centerx">
                      <li>
                        <vs-radio v-model="checkflg" vs-value="선불"
                          >선불</vs-radio
                        >
                      </li>
                      <li>
                        <vs-radio v-model="checkflg" vs-value="후불"
                          >후불</vs-radio
                        >
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
                  <vs-row
                    vs-align="center"
                    vs-type="flex"
                    vs-justify="center"
                    vs-w="12"
                  >
                    <vs-button
                      class="mr-6"
                      @click="onAddData"
                      :disabled="!isFormValid"
                      >저장</vs-button
                    >
                    <vs-button
                      type="border"
                      color="danger"
                      @click="popupActive = false"
                      >취소</vs-button
                    >
                  </vs-row>
                </div>
              </div>
            </vs-popup>
          </div>
        </div>

        <template slot="thead">
          <vs-th>시간<br />전달방법<br />결제수단<br />결제여부</vs-th>
          <vs-th>주문 내용</vs-th>
          <vs-th>고객명</vs-th>
          <vs-th>주소</vs-th>
          <vs-th>가격</vs-th>
          <vs-th></vs-th>
        </template>

        <template slot-scope="{ data }">
          <tbody :key="index" v-for="(tr, index) in data">
            <vs-tr>
              <vs-td :data="data[index].datetime">
                <p
                  class="product-name font-medium truncate"
                  :class="[data[index].cancelflg ? 'canceled' : '']"
                >
                  {{ data[index].time }}
                </p>
                <br />
                <feather-icon
                  :icon="getPickUpIcon(data[index].pickflg)"
                  svgClasses="w-5 h-5 stroke-current"
                  class="ml-2"
                />
                <br />
                <feather-icon
                  :icon="getCashIcon(data[index].cashflg)"
                  svgClasses="w-5 h-5 stroke-current"
                  class="ml-2"
                />
                <br />
                <feather-icon
                  :icon="getCheckIcon(data[index].checkflg)"
                  svgClasses="w-5 h-5 stroke-current"
                  class="ml-2"
                />
              </vs-td>

              <vs-td>
                <p
                  class="product-category"
                  :class="[data[index].cancelflg ? 'canceled' : '']"
                  :data="data[index].dducks"
                  v-for="(dduck, i) in data[index].dducks"
                  :key="i"
                >
                  {{ dduck.item }}{{ dduck.amount }}{{ dduck.unit }}
                </p>
                <p
                  style="white-space: pre-line"
                  :class="[data[index].cancelflg ? 'canceled' : '']"
                >
                  {{ data[index].note }}
                </p>
              </vs-td>

              <vs-td :data="data[index].name">
                <p
                  class="product-category"
                  :class="[data[index].cancelflg ? 'canceled' : '']"
                >
                  {{ data[index].name }}
                </p>
              </vs-td>

              <vs-td :data="data[index].address">
                <p
                  class="product-category"
                  :class="[data[index].cancelflg ? 'canceled' : '']"
                >
                  {{ data[index].address }}
                </p>
              </vs-td>

              <vs-td :data="data[index].price">
                <p
                  class="product-category"
                  :class="[data[index].cancelflg ? 'canceled' : '']"
                >
                  {{ data[index].price }}
                </p>
              </vs-td>

              <vs-td class="whitespace-no-wrap">
                <feather-icon
                  icon="EditIcon"
                  svgClasses="w-5 h-5 hover:text-primary stroke-current"
                  @click.stop="editData(tr)"
                />
                <feather-icon
                  v-if="data[index].cancelflg"
                  icon="RotateCcwIcon"
                  svgClasses="w-5 h-5 hover:text-success stroke-current"
                  class="ml-2"
                />
                <feather-icon
                  v-else
                  icon="TrashIcon"
                  svgClasses="w-5 h-5 hover:text-danger stroke-current"
                  class="ml-2"
                />
              </vs-td>
            </vs-tr>
          </tbody>
        </template>
      </vs-table>
    </div>
  </div>
</template>

<script src="<https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js>"></script>
<script src="app.js"></script>
<script>
import DataViewSidebar from "../data-list/DataViewSidebar.vue";
// import moduleDataList from '@/store/data-list/moduleDataList.js'
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import dayjs from "dayjs";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import { Korean } from "flatpickr/dist/l10n/ko.js";
import vSelect from "vue-select";
import Vue from "vue";

export default {
  components: {
    DataViewSidebar,
    VuePerfectScrollbar,
    dayjs,
    flatPickr,
    vSelect,
  },

  data() {
    return {

      //export
      join: "",
      fileName: "",
      formats: ["xlsx", "csv", "txt"],
      cellAutoWidth: true,
      selectedFormat: "xlsx",
      headerTitle: [
        "취소",
        "준문번호",
        "시간",
        "주문내용",
        "가격",
        "주문자",
        "전화번호",
        "주소",
        "스티커",
        "OPP",
        "전달방법",
        "결제수단",
        "결제여부",
        "비고",
      ],
      headerVal: [
        "cancelflgTxt",
        "id",
        "time",
        "join",
        "price",
        "name",
        "mobile",
        "address",
        "stickerflgTxt",
        "oppflgTxt",
        "pickflg",
        "cashflg",
        "checkflg",
        "note",
      ],
      activePrompt: false,
      cellAutoWidth: true,

      //떡 추가용 배열
      dducks: [{ item: "", amount: 0, unit: "" }],

      today: dayjs().format("YYYY-MM-DD"),
      //라디오버튼
      pickflg: "픽업",
      cashflg: "현금",
      checkflg: "선불",

      //스위치
      switch1: false,
      switch2: false,
      //떡 양
      number: 0,
      //popup
      popupActive: false,
      // Data Sidebar
      addNewDataSidebar: false,
      sidebarData: {},

      users: [],

      datetime: null,
      configdateTimePicker: {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
        locale: Korean,
      },

      dataId: dayjs().format("YYYYMMDDHHmmss"),
      stickerflg: false,
      stickerflgTxt: "",
      oppflg: false,
      oppflgTxt: "",
      mobile: "",
      address: "",
      note: "",
      name: "",
      price: "",
      cancelflg: false,
      cancelflgTxt: "",
      unitList: ["kg", "되", "말", "개"],
      dduckList: [
        "궁중구름떡",
        "궁중두텁떡",
        "기계절편",
        "꿀떡",
        "녹두단호박찰떡",
        "녹두찰편",
        "대추영양설기",
        "딸기설기",
        "떡볶이",
        "맵시루떡",
        "모듬찰떡",
        "무지개떡",
        "미니모시 송편",
        "바람떡",
        "반찰시루떡",
        "밤송편",
        "방울증편",
        "백미가래떡",
        "백일백자 백설기",
        "보리증편",
        "보통콩설기",
        "블루베리설기",
        "사각증편",
        "서리태콩찰떡",
        "손절편",
        "수박설기",
        "쑥두텁 경단",
        "쑥두텁떡",
        "쑥콩찰편",
        "앙꼬증편",
        "약식",
        "오레오설기",
        "오메기떡",
        "오색송편",
        "왕모시 송편",
        "왕찹쌀모찌",
        "유기농 콩설기",
        "유기농백설기",
        "유자설기",
        "이북식인절미",
        "조랭이",
        "찰시루떡",
        "쵸코설기",
        "치즈설기",
        "콩찰편",
        "특콩설기",
        "팥송편",
        "하트백설기",
        "현미가래떡",
        "현미영양설기",
        "호꼬완시루떡",
        "호두찰편",
        "횐팥찰편",
        "흑미설기",
        "흑미영양찰떡",
      ],
    };
  },
  computed: {
    isFormValid() {
      return (
        !this.errors.any() &&
        this.datetime &&
        this.dducks &&
        this.name &&
        this.mobile &&
        this.price > 0
      );
    },
  },
  methods: {
    convertBoolean() {
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].stickerflg) {
          this.users[i].stickerflgTxt = "스티커";
        } else {
          this.users[i].stickerflgTxt = "X";
        }

        if (this.users[i].oppflg) {
          this.users[i].oppflgTxt = "OPP";
        } else {
          this.users[i].oppflgTxt = "X";
        }

        if (this.users[i].cancelflg) {
          this.users[i].cancelflgTxt = "취소주문";
        } else {
          this.users[i].cancelflgTxt = "";
        }
      }
    },
    dduckJoin() {
      for (let i = 0; i < this.users.length; i++) {
        const arr = this.users[i].dducks;
        for (let y = 0; y < arr.length; y++) {
          const dduck = arr[y];
          if (!this.users[i].join) {
            this.users[i].join = dduck.item + dduck.amount + dduck.unit;
          } else {
            this.users[i].join +=
              " / " + dduck.item + dduck.amount + dduck.unit;
          }
        }
      }
    },
    addRow() {
      this.dducks.push({ item: "", amount: 0, unit: "" });
    },
    deleteRow(index) {
      this.dducks.splice(index, 1);
    },
    onAddData() {
      const db = firebase.firestore();
      const user = firebase.auth().currentUser;
      const orderDate = this.datetime.substr(0, 10);
      const orderTime = this.datetime.slice(-5);

      if (user) {
        db.collection("orderList")
          .add({
            uid: user.uid,
            id: this.dataId, //저장날짜로 id화
            datetime: this.datetime,
            date: orderDate,
            time: orderTime,
            dducks: this.dducks,
            stickerflg: this.stickerflg,
            oppflg: this.oppflg,
            pickflg: this.pickflg,
            cashflg: this.cashflg,
            checkflg: this.checkflg,
            name: this.name,
            mobile: this.mobile,
            address: this.address,
            note: this.note,
            price: this.price,
            cancelflg: this.cancelflg,
            // join: this.join,
          })
          .then(function () {
            location.reload();
          });
      }
    },
    addNewData() {
      this.sidebarData = {};
      this.toggleDataSidebar(true);
    },
    editData(data) {
      this.popupActive = true;
      // this.sidebarData = JSON.parse(JSON.stringify(this.blankData))
      this.sidebarData = data;
      this.data = Object.values(data);
      console.log("this.data => " + this.data);
    },
    toggleDataSidebar(val = false) {
      this.addNewDataSidebar = val;
    },
    onLoadData() {
      let self = this;
      console.log("onLoadData");
      const db = firebase.firestore();
      const ref = db.collection("orderList");
      const snapshot = ref.get();
      const today = dayjs().format("YYYY-MM-DD");
      const getSorted = ref.where("date", "==", today).orderBy("time").get();
      if (getSorted.empty) {
        console.log("No matching documents.");
        return;
      }
      // this.users = snapshot.then.doc
      getSorted.then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          self.users.push(doc.data());
          console.log(doc.id, "=>", doc.data());
        });
      });
    },
    getPickUpIcon(flg) {
      if (flg === "픽업") return "SmileIcon";
      if (flg === "배달") return "TruckIcon";
      if (flg === "퀵") return "ZapIcon";
      return "primary";
    },
    getCashIcon(flg) {
      if (flg === "카드") return "CreditCardIcon";
      if (flg === "현금") return "DollarSignIcon";
      return "primary";
    },
    getCheckIcon(flg) {
      if (flg === "선불") return "CheckCircleIcon";
      if (flg === "후불") return "XCircleIcon";
      return "primary";
    },
    exportToExcel() {
      this.dduckJoin();
      this.convertBoolean();
      import("@/vendor/Export2Excel").then((excel) => {
        const list = this.users;
        const data = this.formatJson(this.headerVal, list);
        excel.export_json_to_excel({
          header: this.headerTitle,
          data,
          filename: this.fileName,
          autoWidth: this.cellAutoWidth,
          bookType: this.selectedFormat,
        });
        this.clearFields();
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map((v) =>
        filterVal.map((j) => {
          // Add col name which needs to be translated
          // if (j === 'timestamp') {
          //   return parseTime(v[j])
          // } else {
          //   return v[j]
          // }

          return v[j];
        })
      );
    },
    clearFields() {
      this.filename = "";
      this.cellAutoWidth = true;
      this.selectedFormat = "xlsx";
      // this.data = "";
    },
  },
  created() {
    this.onLoadData();
  },
  mounted() {},
};
</script>

<style lang="scss">
.canceled {
  text-decoration: line-through;
}

#data-list-list-view {
  .vs-con-table {
    /*
      Below media-queries is fix for responsiveness of action buttons
      Note: If you change action buttons or layout of this page, Please remove below style
    */
    @media (max-width: 689px) {
      .vs-table--search {
        margin-left: 0;
        max-width: unset;
        width: 100%;

        .vs-table--search-input {
          width: 100%;
        }
      }
    }

    @media (max-width: 461px) {
      .items-per-page-handler {
        display: none;
      }
    }

    @media (max-width: 341px) {
      .data-list-btn-container {
        width: 100%;

        .dd-actions,
        .btn-add-new {
          width: 100%;
          margin-right: 0 !important;
        }
      }
    }

    .product-name {
      max-width: 23rem;
    }

    .vs-table--header {
      display: flex;
      flex-wrap: wrap;
      margin-left: 1.5rem;
      margin-right: 1.5rem;
      > span {
        display: flex;
        flex-grow: 1;
      }

      .vs-table--search {
        padding-top: 0;

        .vs-table--search-input {
          padding: 0.9rem 2.5rem;
          font-size: 1rem;

          & + i {
            left: 1rem;
          }

          &:focus + i {
            left: 1rem;
          }
        }
      }
    }

    .vs-table {
      border-collapse: separate;
      border-spacing: 0 1.3rem;
      padding: 0 1rem;

      tr {
        box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);
        td {
          padding: 20px;
          &:first-child {
            border-top-left-radius: 0.5rem;
            border-bottom-left-radius: 0.5rem;
          }
          &:last-child {
            border-top-right-radius: 0.5rem;
            border-bottom-right-radius: 0.5rem;
          }
        }
        td.td-check {
          padding: 20px !important;
        }
      }
    }

    .vs-table--thead {
      th {
        padding-top: 0;
        padding-bottom: 0;

        .vs-table-text {
          text-transform: uppercase;
          font-weight: 600;
        }
      }
      th.td-check {
        padding: 0 15px !important;
      }
      tr {
        background: none;
        box-shadow: none;
      }
    }

    .vs-table--pagination {
      justify-content: center;
    }
  }
}
</style>
