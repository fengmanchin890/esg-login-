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
          <v-select label="SELECT" :items="['Tỷ Bách', 'Tỷ Xuân', 'Tỷ Thạch']"></v-select>
          <v-text-field placeholder="00002" prepend-inner-icon="mdi-account-outline" variant="outlined"></v-text-field>
          <v-text-field
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'"
            placeholder="Password"
            prepend-inner-icon="mdi-lock-outline"
            variant="outlined"
            @click:append-inner="visible = !visible"
          ></v-text-field>
          <v-btn class="login-btn" color="blue" size="large" variant="tonal" block>lOGIN</v-btn>
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
/* Layout chính (Chia 2 khung) */
.container {
  display: flex;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

/* Bên trái (ESG Content) */
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

/* Image Container: This arranges images horizontally */
.image-container {
  display: flex !important;
  flex-direction: row !important;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-wrap: nowrap;
  width: 100%; 
  overflow: hidden;
  background-color: rgba(35, 206, 100, 0.1); /* Thêm màu nền để kiểm tra phạm vi container */
}

.image-section {
  width: 150px;
  height: 150px;
  border-radius: 70px;
  border: 2px solid #ddd;
  flex-shrink: 0;
  background-color: rgba(0, 255, 0, 0.1); /* Debug: màu nền cho từng phần */
}

.image-section img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

/* Emphasizing the center image */
.image-section:nth-child(2) {
  width: 200px;
  height: 200px;
  border: 3px solid / }
   
/* Bên phải (Login Form) */
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

/* Logo công ty */
.company-logo {
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
}


/* Logo công ty */
.company-logo {
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
}

/* Form đăng nhập */
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

/* Nút login */
.login-btn {
  background: #1976d2 !important;
  color: white;
  font-weight: bold;
}

/* Responsive (Mobile) */
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
  top: 110px; /* điều chỉnh theo nhu cầu */
  left: 480px;/* điều chỉnh theo nhu cầu */
  transform: translate(-50%, -50%);
}
h3 {  
  position: absolute;
  top: 200px; /* điều chỉnh theo nhu cầu */
  left: 480px;/* điều chỉnh theo nhu cầu */
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