<template>
  <div class="container">
    <!-- 左邊(照片與ESG內容)-->
    <div class="left-section">
      <div class="left-content">
        <h1><span>LAI YIH</span> <span class="green">ESG</span> DASHBOARD of Taiwan</h1>
        <div class="esg-image">
          <div class="image-container">
            <div class="image-section">
              <img src="../assets/bg4.jpg" alt="Phần 1">
            </div>
            <div class="image-section">
              <img src="../assets/bg5.jpg" alt="Phần 2">
            </div>
            <div class="image-section">
              <img src="../assets/bg6.jpg" alt="Phần 3">
            </div>
          </div>
        </div>
      </div>
    </div> 

    <!-- 右邊(登入表單)和Logo -->
    <div class="right-section">
      <h3>來億有限公司</h3>
      <img class="logo" src="../assets/bg7.jpg" alt="Logo công ty">
      <div class="login-container">
        <img src="../assets/logo.png" class="company-logo" />
        <v-card class="login-card mx-auto pa-6 pb-6" elevation="8" max-width="448" rounded="lg">
          <v-select label="SELECT" :items="['億春', '億柏', '億碩']"></v-select>
          <v-text-field placeholder="00002" prepend-inner-icon="mdi-account-outline" variant="outlined"></v-text-field>
          <v-text-field
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'"
            placeholder="Password"
            prepend-inner-icon="mdi-lock-outline"
            variant="outlined"
            @click:append-inner="visible = !visible"
          ></v-text-field>
          <v-btn class="login-btn" color="blue" size="large" variant="tonal" block>登入</v-btn>
        </v-card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    visible: false,
  }),
};
</script>
<style> 
/* 主佈局（分為 2 個框架） */
.container {
  display: flex;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

/* 左邊（ESG 內容） */
.left-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #2e12ac;
  background-size: cover;
  background-position: center;

  width: 50%;
  height: 100%;
}

/* 水平排列影像 */
.image-container {
  display: flex !important;
  flex-direction: row !important;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-wrap: nowrap;
  width: 100%; 
  overflow: hidden;
  background-color: rgba(35, 206, 100, 0.1); /*新增背景顏色以檢查容器範圍 */
}
.image-section {
  width: 150px;
  height: 150px;
  border-radius: 70px;
  border: 2px solid #ddd;
  flex-shrink: 0;
  background-color: rgba(0, 255, 0, 0.1); /*調試：每個部分的背景顏色 */
}

.image-section img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

/* 強調中心圖片 */
.image-section:nth-child(2) {
  width: 200px;
  height: 200px;
  border: 3px solid / }
   
/* 右側（登入表單） */
.right-section {
  background: url(../assets/bg2.jpg) ;
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.background-image {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

/* 公司標誌 */
.company-logo {
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
}

/* 登入表單 */
.login-container {
  position: relative;
  z-index: 2;
  text-align: center;
  width: 50%;
}

.login-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

/* 登入按鈕 */q
.login-btn {
  background: #1976d2 !important;
  color: white;
  font-weight: bold;
}

/* 響應式（移動) */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .left-section {
    width: 100%;
    height: auto;
    padding: 10px;
  }

  .image-container {
    flex-wrap: wrap;
    justify-content: center;
  }

  .right-section {
    width: 100%;
    padding: 20px;
  }

  .login-container {
    width: 80%;
  }
}
.logo {

  width: 100px;
  height: 100px;
  position: absolute;
  top: 110px; /* 根據圖片大小調整的需求進行調整 */
  left: 480px;/* 根據圖片大小調整的需求進行調整*/
  transform: translate(-50%, -50%);
}
h3 {  
  position: absolute;
  top: 200px; /* 根據圖片大小調整的需求進行調整*/
  left: 480px;/* 根據圖片大小調整的需求進行調整 */
  transform: translate(-50%, -50%);
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}
h1 P {
  color: #fff;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin: 0;
}
h1 SPAN {
  color: #00e676;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin: 0;
}
.green {
  color: #00e676;
}
</style>