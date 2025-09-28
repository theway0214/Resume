<template>
  <div class="resume-export-page">
    <ResumeComponent />
  </div>
</template>

<script setup lang="ts">
import ResumeComponent from '../components/ResumeComponent.vue'
</script>

<style scoped>
.resume-export-page {
  min-height: 100vh;
  background: gray;
  padding: 20px;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding: 20px 30px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.page-header h1 {
  margin: 0;
  color: #1890ff;
  font-size: 24px;
  font-weight: bold;
}

.export-controls {
  display: flex;
  gap: 15px;
  align-items: center;
}

.resume-preview {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .resume-export-page {
    padding: 10px;
  }
  
  .page-header {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
  
  .page-header h1 {
    font-size: 20px;
  }
}
</style>