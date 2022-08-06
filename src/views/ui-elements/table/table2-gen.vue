<!-- =========================================================================================
    File Name: TableStriped.vue
    Description: Rendering default table with striped style
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Striped" code-toggler>

        <p>You can have a sebra effect by adding the property <code>stripe</code></p><br>
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
          <div class="btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-primary border border-solid border-primary" @click="addNewData">
              <feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />
              <span class="ml-2 text-base text-primary">Add New</span>
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

        <template slot="codeContainer">
&lt;template&gt;
  &lt;vs-table :data=&quot;users&quot;&gt;

    &lt;template slot=&quot;thead&quot;&gt;
      &lt;vs-th&gt;Email&lt;/vs-th&gt;
      &lt;vs-th&gt;Name&lt;/vs-th&gt;
      &lt;vs-th&gt;Website&lt;/vs-th&gt;
      &lt;vs-th&gt;Nro&lt;/vs-th&gt;
    &lt;/template&gt;

    &lt;template slot-scope=&quot;{data}&quot;&gt;
      &lt;vs-tr :key=&quot;indextr&quot; v-for=&quot;(tr, indextr) in data&quot;&gt;

        &lt;vs-td :data=&quot;data[indextr].email&quot;&gt;
          {{ "\{\{ data[indextr].email \}\}" }}
        &lt;/vs-td&gt;

        &lt;vs-td :data=&quot;data[indextr].username&quot;&gt;
          {{ "\{\{ data[indextr].name \}\}" }}
        &lt;/vs-td&gt;

        &lt;vs-td :data=&quot;data[indextr].id&quot;&gt;
          {{ "\{\{ data[indextr].website \}\}" }}
        &lt;/vs-td&gt;

        &lt;vs-td :data=&quot;data[indextr].id&quot;&gt;
          {{ "\{\{ data[indextr].id \}\}" }}
        &lt;/vs-td&gt;
      &lt;/vs-tr&gt;
    &lt;/template&gt;

  &lt;/vs-table&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      users: [......]
    }
  },
}
&lt;/script&gt;
        </template>

    </vx-card>
</template>

<script>
import DataViewSidebar from '../data-list/DataViewSidebar.vue'
// import moduleDataList from '@/store/data-list/moduleDataList.js'
import firebase from 'firebase/app'
import 'firebase/firestore'

export default {
  components: {
    DataViewSidebar
  },
  data () {
    return {
      // Data Sidebar
      addNewDataSidebar: false,
      sidebarData: {},

      users: []
    }
  },
  methods: {
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