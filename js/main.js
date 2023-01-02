// import 資料陣列
import { products } from './data.js';

// 抓出方法
const { createApp } = Vue;
// 或是這樣 (HTML那邊就不用放vue.js了!)
// import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

// 1. 建立元件
// 2. 生成 Vue 應用程式
// 3. 渲染畫面

// 1.
const app = {
    // 建立資料
    data() {
        return {
            // 將 products 抓進來
            products,
            temp:{}, // 建立一個 temp，給 click 事件使用
        }
    }
}

// 2.
createApp(app)
    .mount('#app')  // 3. 指定作用位置