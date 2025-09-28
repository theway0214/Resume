<script setup lang="ts">
import { MyPromise } from './utils/myPromise.ts'
import ResumeExportDemo from './views/ResumeExportDemo.vue'

const promise = new MyPromise((resolve, reject) => {
  resolve(
    new MyPromise((resolve1, reject1) => {
      setTimeout(() => {
        resolve1('成功')
      }, 1000)
    }),
  )
})

promise
  .then((res) => {
    console.log(res)
  })
  .then((res1) => {
    console.log(res1)
  })

// const promise1 = new Promise((resolve, reject) => {
//   resolve(
//      new Promise((resolve1, reject1) => {
//       resolve1(
//         new Promise((resolve2, reject2) => {
//           setTimeout(() => {
//             resolve2('成功2')
//           }, 1000)
//         })
//       )
//     })
//   )
// })

// promise1.then((res) => {
//   console.log(res)
// }).then((res1) => {
//   console.log(res1)
// })
</script>

<template>
  <div class="app-container">
    <!-- 简历PDF导出功能演示 -->
    <ResumeExportDemo />
  </div>
</template>

<style scoped>
.app-container {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow-y: auto;
  background-color: #f5f5f5;
}

.amap-box {
  width: 100%;
  height: 100%;
}

.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  color: #666;
}

.amap-toolbar {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 100;
}

.amap-scale {
  position: absolute;
  bottom: 10px;
  left: 10px;
  z-index: 100;
}

.control-panel {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 100;
  background: white;
  padding: 15px;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.search-box {
  margin-bottom: 10px;
}

.search-box input {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 8px;
}

button {
  padding: 8px 15px;
  background: #1791fc;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #1478d4;
}

.result-box {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #eee;
}

.result-box p {
  margin: 5px 0;
  color: #333;
}
</style>
