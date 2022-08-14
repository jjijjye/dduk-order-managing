<!-- =========================================================================================
    File Name: TableStriped.vue
    Description: Rendering default table with striped style
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="오늘의 주문">


<div class="flex flex-wrap-reverse items-center data-list-btn-container">
<data-view-sidebar :isSidebarActive="addNewDataSidebar" @closeSidebar="toggleDataSidebar" :data="sidebarData" />

          <!-- ACTION - DROPDOWN -->
          <vs-dropdown vs-trigger-click class="dd-actions cursor-pointer mr-4 mb-4">

            <div class="p-4 shadow-drop rounded-lg d-theme-dark-bg cursor-pointer flex items-center justify-center text-lg font-medium w-32 w-full">
              <span class="mr-2">Actions</span>
              <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
            </div>

            <vs-dropdown-menu>

              <vs-dropdown-item>
                <span class="flex items-center">
                  <feather-icon icon="TrashIcon" svgClasses="h-4 w-4" class="mr-2" />
                  <span>Delete</span>
                </span>
              </vs-dropdown-item>

              <vs-dropdown-item>
                <span class="flex items-center">
                  <feather-icon icon="ArchiveIcon" svgClasses="h-4 w-4" class="mr-2" />
                  <span>Archive</span>
                </span>
              </vs-dropdown-item>

              <vs-dropdown-item>
                <span class="flex items-center">
                  <feather-icon icon="FileIcon" svgClasses="h-4 w-4" class="mr-2" />
                  <span>Print</span>
                </span>
              </vs-dropdown-item>

              <vs-dropdown-item>
                <span class="flex items-center">
                  <feather-icon icon="SaveIcon" svgClasses="h-4 w-4" class="mr-2" />
                  <span>Another Action</span>
                </span>
              </vs-dropdown-item>
            </vs-dropdown-menu>
          </vs-dropdown>

          <!-- ADD NEW -->
          <!-- <div class="btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-primary border border-solid border-primary" @click="addNewData"> -->
          <div class="btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-primary border border-solid border-primary" @click="popupActive=true">
              <feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />
              <span class="ml-2 text-base text-primary">주문 추가</span>

              <!-- 주문생성 팝업 -->
              <vs-popup class="holamundo" title="주문" :active.sync="popupActive">
                <div class="p-6">
                  <!-- <h4>주문 {{ Object.entries(this.data).length === 0 ? "작성" : "수정" }} </h4> -->
                  <!-- 날짜 & 시간 -->
                  <flat-pickr :config="configdateTimePicker" class="w-full" label="주문 날짜 및 시간" v-model="datetime" placeholder="주문 날짜 및 시간"/>
                  <span class="text-danger text-sm" v-show="errors.has('item-name')">{{ errors.first('item-name') }}</span>

                  <!-- 떡 선택 -->
                  <div class="vx-row mt-6">
                    <div class="vx-col flex-1 mb-2" >
                      <v-select placeholder="떡" name="order-item"  v-model="dduck" v-validate="'required'" :options="dduckList" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
                    </div>
                    <div class="vx-col flex-1 mb-2">
                      <vs-input-number v-model="amount" label="수량:"/>
                    </div>
                    <div class="vx-col flex-1 mb-2">
                      <v-select placeholder="단위" name="order-item"  v-model="unit" v-validate="'required'" :options="['kg','되','말','개']" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
                    </div>
                    <feather-icon icon="TrashIcon" svgClasses="w-5 h-5 hover:text-danger stroke-current" class="ml-2  mb-2" @click.stop="deleteData(tr.id)" />
                  </div> 

                  <!-- 떡 추가 버튼 -->
                  <vs-divider class="mt-2">
                    <vs-button radius type="border" icon-pack="feather" icon="icon-plus" @click="addRow"></vs-button>
                  </vs-divider>
                  

                  <div class="vx-row mt-6">
                    <div class="vx-col flex-1 mb-2">
                    <label>스티커</label>
                    <vs-switch v-model="stickerflg" icon-pack="feather" vs-icon-on="icon-check-circle" vs-icon-off="icon-slash" >
                      <span slot="on"></span>
                      <span slot="off"></span>
                    </vs-switch>
                    </div>
                    <div class="vx-col flex-1 mb-2">
                    <label>OPP</label>
                    <vs-switch v-model="oppflg" icon-pack="feather" vs-icon-on="icon-check-circle" vs-icon-off="icon-slash" >
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
                      <vs-input class="w-full" icon-pack="feather" icon="icon-user" icon-no-border label-placeholder="주문자 이름" v-model="name" />
                    </div>
                  </div>
                  <!-- 주문자 전화번호 -->
                  <div class="vx-row mb-2">
                    <div class="vx-col w-full">
                      <vs-input class="w-full" icon-pack="feather" icon="icon-smartphone" icon-no-border label-placeholder="전화번호" v-model="mobile" />
                    </div>
                  </div>
                  <!-- 주문자 주소 -->
                  <div class="vx-row mb-8">
                    <div class="vx-col w-full">
                      <vs-input class="w-full" icon-pack="feather" icon="icon-home" icon-no-border label-placeholder="주소" v-model="address" />
                    </div>
                  </div>
                  
                  <vs-textarea class="mt-2" label="상세내용" v-model="note" />

                  <!-- 가격 -->
                  <vx-input-group class="mb-base w-full" >
                    <template slot="prepend" >
                      <div class="mt-5 w-full prepend-text bg-primary">
                        <span>₩</span>
                      </div>
                    </template>

                    <vs-input
                          placeholder="합계"
                          class="mt-5 w-full"
                          v-model="price"
                          v-validate="{ required: true, regex: /\d+(\.\d+)?$/ }"
                          name="item-price" />

                    <template slot="append">
                      <div class="mt-5 w-full append-text bg-primary">
                        <span>원</span>
                      </div>
                    </template>
                  </vx-input-group>


                  <div class="flex flex-wrap items-center p-6" slot="footer">
                    <vs-row vs-align="center" vs-type="flex" vs-justify="center" vs-w="12">
                      <vs-button class="mr-6" @click="onAddData" :disabled="!isFormValid">저장</vs-button>
                      <vs-button type="border" color="danger" @click="popupActive = false">취소</vs-button>
                    </vs-row>
                  </div>
                </div>
              </vs-popup>
          </div>
        </div>


        <vs-table stripe :data="users">

            <template slot="thead">
                <vs-th>시간</vs-th>
                <vs-th>고객명</vs-th>
                <vs-th>주소</vs-th>
                <vs-th>내용</vs-th>
                <vs-th>가격</vs-th>
            </template>

            <template slot-scope="{data}" >
                <vs-tr :key="index" v-for="(tr, index) in data">
                    <vs-td :data="data[index].datetime" >
                        {{data[index].time}}
                    </vs-td>
                    <vs-td :data="data[index].name" >
                        {{data[index].name}}
                    </vs-td>
                    <vs-td :data="data[index].address" >
                        {{data[index].address}}
                    </vs-td>
                    <vs-td :data="data[index].dduck" >
                        {{data[index].dduck}}
                    </vs-td>
                    <vs-td :data="data[index].price">
                        {{data[index].price}}
                    </vs-td>
                </vs-tr>
            </template>
        </vs-table>

    </vx-card>
</template>

<script>
import DataViewSidebar from '../data-list/DataViewSidebar.vue'
// import moduleDataList from '@/store/data-list/moduleDataList.js'
import firebase from 'firebase/app'
import 'firebase/firestore'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import dayjs from 'dayjs'
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import { Korean } from 'flatpickr/dist/l10n/ko.js'
import vSelect from 'vue-select'

export default {
  components: {
    DataViewSidebar,
    VuePerfectScrollbar,
    dayjs,
    flatPickr,
    vSelect
  },
  data () {
    return {
      today: dayjs().format('YYYY-MM-DD'),
      //라디오버튼
      pickflg:'픽업',
      cashflg:'현금',
      checkflg:'선불',

      //스위치
      switch1:false,
      switch2:false,
      //떡 양
      number:0,
      //popup
      popupActive: false,
      // Data Sidebar
      addNewDataSidebar: false,
      sidebarData: {},

      users: [],

      datetime: null,
      configdateTimePicker: {
        enableTime: true,
        dateFormat: 'Y-m-d H:i',
        locale: Korean,
      },

      dataId: dayjs().format('YYYYMMDDHHmmss'),
      dduck: null,
      amount: 0,
      unit: '',
      stickerflg: false,
      oppflg: false,
      mobile: '',
      address: '',
      note: '',
      name: '',
      price: 0,
      cancelflg: false,
      unitList:[
        'kg',
        '되',
        '말',
        '개'
      ],
      dduckList:[
        '궁중구름떡',
        '궁중두텁떡',
        '기계절편',
        '꿀떡',
        '녹두단호박찰떡',
        '녹두찰편',
        '대추영양설기',
        '딸기설기',
        '떡볶이',
        '맵시루떡',
        '모듬찰떡', 
        '무지개떡',
        '미니모시 송편',
        '바람떡',
        '반찰시루떡',
        '밤송편', 
        '방울증편',
        '백미가래떡',
        '백일백자 백설기', 
        '보리증편', 
        '보통콩설기',
        '블루베리설기',
        '사각증편', 
        '서리태콩찰떡',
        '손절편',
        '수박설기',
        '쑥두텁 경단',
        '쑥두텁떡',
        '쑥콩찰편',
        '앙꼬증편', 
        '약식', 
        '오레오설기',
        '오메기떡',
        '오색송편',
        '왕모시 송편',
        '왕찹쌀모찌',
        '유기농 콩설기', 
        '유기농백설기',
        '유자설기',
        '이북식인절미', 
        '조랭이',
        '찰시루떡',
        '쵸코설기',
        '치즈설기',
        '콩찰편',
        '특콩설기', 
        '팥송편',
        '하트백설기',
        '현미가래떡',
        '현미영양설기',
        '호꼬완시루떡', 
        '호두찰편',
        '횐팥찰편',
        '흑미설기',
        '흑미영양찰떡'
      ]
    }
  },
  computed: {
    isFormValid () {
      return !this.errors.any() && this.datetime && this.dduck && this.name && this.mobile && this.price > 0
    }
  },
  methods: {
    addRow () {
      this.rows.push({
        name: '',
        job: ''
      })
    },
    onAddData () {
      const db = firebase.firestore()
      const user = firebase.auth().currentUser
      const orderDate = this.datetime.substr(0, 10)
      const orderTime = this.datetime.slice(-5)
      
      if (user) {
        db.collection('orderList')
          .add(
            { 
              uid: user.uid,
              id: this.dataId, //저장날짜로 id화
              datetime: this.datetime,
              date: orderDate,
              time: orderTime,
              dduck: this.dduck,
              amount: this.amount,
              unit: this.unit,
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
              cancelflg: this.cancelflg
              
            })
          .then(function () {
            location.reload()
          })
      }
    },
    addNewData () {
      this.sidebarData = {}
      this.toggleDataSidebar(true)
    },
    editData (data) {
      // this.sidebarData = JSON.parse(JSON.stringify(this.blankData))
      this.sidebarData = data
      this.toggleDataSidebar(true)
    },
    toggleDataSidebar (val = false) {
      this.addNewDataSidebar = val
    },
    onLoadData () {
      let self = this
      console.log('onLoadData')
      const db = firebase.firestore()
      const ref = db.collection('orderList')
      const snapshot = ref.get()
      const today = dayjs().format('YYYY-MM-DD')
      const getSorted = ref.where('date', '==', today).orderBy('time').get()
      if (getSorted.empty) {
        console.log('No matching documents.')
        return
      }
      // this.users = snapshot.then.doc
      getSorted.then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          self.users.push(doc.data())
          console.log(doc.id, '=>', doc.data())
        })
      })
    }
  },
  created () {
    this.onLoadData()
  },
  mounted () {

  }
}
</script>

