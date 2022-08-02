<!-- =========================================================================================
    File Name: TableStriped.vue
    Description: Rendering default table with striped style
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="주문관리">


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
              <span class="ml-2 text-base text-primary">Add New</span>

              <!-- 주문생성 팝업 -->
              <vs-popup class="holamundo" title="주문" :active.sync="popupActive">
                <div class="p-6">
                  <!-- <h4>주문 {{ Object.entries(this.data).length === 0 ? "작성" : "수정" }} </h4> -->
                  <!-- 날짜 & 시간 -->
                  <flat-pickr :config="configdateTimePicker" class="mt-5 w-full" label="주문 날짜 및 시간" v-model="datetime" placeholder="주문 날짜 및 시간"/>
                  <span class="text-danger text-sm" v-show="errors.has('item-name')">{{ errors.first('item-name') }}</span>

                  <!-- 떡 선택 -->
                    <div class="vx-row" label="떡">
                      <div class="vx-col sm:w-1/3 w-full mb-2" >
                        <v-select class="w-full" placeholder="떡 종류" name="order-item" v-validate="'required'" :options="dduckList" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
                      </div>
                      <div class="vx-col sm:w-1/3 w-full mb-2">
                        <vs-input-number class="w-full" v-model="number"/>
                      </div>
                      <div class="vx-col sm:w-1/3 w-full mb-2">
                        <v-select class="w-full" placeholder="단위" name="order-item" v-validate="'required'" :options="['kg','되','말','개']" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
                      </div>
                    </div> 

                  <!-- NAME -->
                  <vs-input class="mt-5 w-full" icon-pack="feather" icon="icon-user" icon-no-border label="고객 이름" v-model="input13" />
                  <span class="text-danger text-sm" v-show="errors.has('item-name')">{{ errors.first('item-name') }}</span>

                  
                  <!-- ORDER STATUS -->
                  <vs-select v-model="dataOrder_status" label="Order Status" class="mt-5 w-full">
                    <vs-select-item :key="item.value" :value="item.value" :text="item.text" v-for="item in order_status_choices" />
                  </vs-select>

                  <!-- 가격 -->
                  <vx-input-group class="mb-base mt-5 w-full" >
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
                    <vs-button class="mr-6" @click="onAddData" :disabled="!isFormValid">Submit</vs-button>
                    <vs-button type="border" color="danger" @click="popupActive = false">Cancel</vs-button>
                  </div>
                </div>
              </vs-popup>
          </div>
        </div>


        <vs-table stripe :data="users">

            <template slot="thead">
                <vs-th>날짜</vs-th>
                <vs-th>고객명</vs-th>
                <vs-th>주소</vs-th>
                <vs-th>내용</vs-th>
                <vs-th>가격</vs-th>
            </template>

            <template slot-scope="{data}">
                <vs-tr :key="index" v-for="(tr, index) in data">
                    <vs-td :data="data[index].date">
                        {{data[index].date}}
                    </vs-td>
                    <vs-td :data="data[index].name">
                        {{data[index].name}}
                    </vs-td>
                    <vs-td :data="data[index].address">
                        {{data[index].address}}
                    </vs-td>
                    <vs-td :data="data[index].order">
                        {{data[index].order}}
                    </vs-td>
                    <vs-td :data="data[index].price">
                        {{data[index].id}}
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
      customerName: '',
      date: null,
      dataOrder: null,
      dataOrder_status: 'pending',
      dataPrice: 0,

      category_choices: [
        {text:'Audio', value:'audio'},
        {text:'Computers', value:'computers'},
        {text:'Fitness', value:'fitness'},
        {text:'Appliance', value:'appliance'}
      ],

      order_status_choices: [
        {text:'Pending', value:'pending'},
        {text:'Canceled', value:'canceled'},
        {text:'Delivered', value:'delivered'},
        {text:'On Hold', value:'on_hold'}
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
      return !this.errors.any() && this.dataName && this.dataCategory && this.dataPrice > 0
    }
  },
  methods: {
    onAddData () {
      const db = firebase.firestore()
      const user = firebase.auth().currentUser
      if (user) {
        db.collection('order')
          .add(
            {
              uid: user.uid,
              id: this.dataId, //저장날짜로 id화
              name: this.dataName,
              date: this.date,
              category: this.dataCategory,
              order_status: this.dataOrder_status,
              price: this.dataPrice
            })
          .then(function () {
            alert('성공적으로 적용 되었습니다.')
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
      const ref = db.collection('bbs')
      const snapshot = ref.get()
      if (snapshot.empty) {
        console.log('No matching documents.')
        return
      }
      // this.users = snapshot.then.doc
      snapshot.then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          self.users.push(doc.data())
          // eslint-disable-next-line no-unused-expressions
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