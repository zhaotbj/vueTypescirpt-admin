<template>
<div class="framement">
    <div class="header">
       <AppHeader @toogle="toogleSidebar"/>
    </div>
    <div
      class="content"
      :class="{'sidebar-close': !sidebarOpened}"
    >
      <div class="sidebar">
        <menus />
         <!-- <el-menu>
           <div v-for="v in menu" :key="v.id">
             <el-submenu index="1" v-if="v.children">
                <template slot="title"><i class="el-icon-message"></i>{{v.label}}</template>
                <el-menu-item index="1-0" v-for="child in v.children" :key="child.id">{{child.label}}</el-menu-item>
              </el-submenu>
            <el-menu-item index="2-1" v-else>{{v.label}}</el-menu-item>
        
           </div>
          </el-menu> -->
      </div>
      <div class="view">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue ,Emit} from 'vue-property-decorator';
// import { Getter } from 'vuex-class';
// import { IViewState } from '@/store/view';

import AppHeader from './header/index.vue';
import Menus from './menus.vue'
// import Breadcrumb from './breadcrumb';
// import Sidebar from './sidebar';

@Component({
  components: {
    AppHeader,
    Menus
    // Breadcrumb,
    // Sidebar,
  },
})
export default class Layout extends Vue {
  sidebarOpened:boolean = true
  
  private  toogleSidebar(val: string){
    console.log('监听到了')
  }
}
</script>

<style lang="less">
.content {
  position: fixed;
  left: 0;
  top: 50px;
  right: 0;
  bottom: 0;
  > * {
    transition: all 1s;
  }
  .sidebar {
    width: 240px;
    height: inherit;
    background: #fff;
    padding: 1rem 0;
    box-shadow: 0 0 1.2em rgba(0, 0, 0, 0.12);
    margin-right: 10px;
    overflow-y: auto;
    position: fixed;
    left: 0;
    bottom: 0;
    top: 50px;
    right: 0;
    transform: translateX(0);
  }
  .view {
    margin-left: 240px;
    background-color: #f5f7f9;
    height: 100%;
    padding: 2rem;
  }
}
.sidebar-close {
  > * {
    transition: all 1s;
  }
  .sidebar {
    transform: translateX(-100%);
  }
  .view {
    margin-left: 0;
  }
}
</style>