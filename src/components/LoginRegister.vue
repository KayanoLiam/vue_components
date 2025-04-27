<template>
  <div class="container" :class="{ active: isActive }">
    <div class="form-box login">
      <form @submit.prevent="handleLogin">
        <h1>Login</h1>
        <div class="input-box">
          <input type="text" placeholder="Username" required v-model="loginForm.username">
          <i class="bx bxs-user"></i>
        </div>
        <div class="input-box">
          <input type="password" placeholder="Password" required v-model="loginForm.password">
          <i class="bx bxs-lock-alt"></i>
        </div>
        <div class="forgot-link">
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit" class="btn">Login</button>
        <p>or login with social platforms</p>
        <div class="social-icons">
          <a href="#"><i class="bx bxl-google"></i></a>
          <a href="#"><i class="bx bxl-facebook"></i></a>
          <a href="#"><i class="bx bxl-github"></i></a>
          <a href="#"><i class="bx bxl-linkedin"></i></a>
        </div>
      </form>
    </div>

    <div class="form-box register">
      <form @submit.prevent="handleRegister">
        <h1>Registration</h1>
        <div class="input-box">
          <input type="text" placeholder="Username" required v-model="registerForm.username">
          <i class="bx bxs-user"></i>
        </div>
        <div class="input-box">
          <input type="email" placeholder="Email" required v-model="registerForm.email">
          <i class="bx bxs-envelope"></i>
        </div>
        <div class="input-box">
          <input type="password" placeholder="Password" required v-model="registerForm.password">
          <i class="bx bxs-lock-alt"></i>
        </div>
        <div class="forgot-link">
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit" class="btn">Register</button>
        <p>or register with social platforms</p>
        <div class="social-icons">
          <a href="#"><i class="bx bxl-google"></i></a>
          <a href="#"><i class="bx bxl-facebook"></i></a>
          <a href="#"><i class="bx bxl-github"></i></a>
          <a href="#"><i class="bx bxl-linkedin"></i></a>
        </div>
      </form>
    </div>

    <div class="toggle-box">
      <div class="toggle-panel toggle-left">
        <h1>Hello, Welcome!</h1>
        <p>Don't have an account?</p>
        <button class="btn register-btn" @click="toggleActive(true)">Register</button>
      </div>

      <div class="toggle-panel toggle-right">
        <h1>Welcome Back!</h1>
        <p>Already have an account?</p>
        <button class="btn login-btn" @click="toggleActive(false)">Login</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';

export default defineComponent({
  name: 'LoginRegister',
  setup() {
    const isActive = ref(false);

    const loginForm = reactive({
      username: '',
      password: ''
    });

    const registerForm = reactive({
      username: '',
      email: '',
      password: ''
    });

    const toggleActive = (value: boolean) => {
      isActive.value = value;
    };

    const handleLogin = () => {
      console.log('Login form submitted:', loginForm);
      // Add actual login logic here
    };

    const handleRegister = () => {
      console.log('Registration form submitted:', registerForm);
      // Add actual registration logic here
    };

    return {
      isActive,
      loginForm,
      registerForm,
      toggleActive,
      handleLogin,
      handleRegister
    };
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
@import url('https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.container {
  position: relative;
  width: 850px;
  height: 550px;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  margin: 20px auto;
  overflow: hidden;
}

.container.active .toggle-box::before {
  left: 50%;
}

.form-box {
  position: absolute;
  right: 0;
  width: 50%;
  height: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  color: #333;
  text-align: center;
  padding: 40px;
  z-index: 1;
  transition: 0.6s ease-in-out 1.2s, visibility 0 1s;
}

.container.active .form-box {
  right: 50%;
}

.form-box.register {
  visibility: hidden;
}

.container.active .form-box.register {
  visibility: visible;
}

.form-box form {
  width: 100%;
}

.container h1 {
  font-size: 36px;
  margin: -10px 0;
}

.input-box {
  position: relative;
  margin: 30px 0;
}

.input-box input {
  width: 100%;
  padding: 13px;
  background-color: #eee;
  border: none;
  outline: none;
  font-size: 16px;
  border-radius: 8px;
  color: #333;
  font-weight: 500;
}

.input-box input::placeholder {
  color: #888;
  font-weight: 400;
}

.input-box i {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  color: #888;
}

.forgot-link {
  margin: -15px 0 15px;
}

.forgot-link a {
  font-size: 14.5px;
  color: #333;
  text-decoration: none;
}

.btn {
  width: 100%;
  height: 48px;
  background-color: #7494ec;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #fff;
  font-weight: 600;
}

.container p {
  font-size: 14.5px;
  margin: 15px 0;
}

.social-icons {
  display: flex;
  justify-content: center;
}

.social-icons a {
  display: inline-flex;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 8px;
  font-size: 24px;
  color: #333;
  text-decoration: none;
  margin: 0 8px;
}

.toggle-box {
  position: absolute;
  width: 100%;
  height: 100%;
}

.toggle-box::before {
  content: '';
  position: absolute;
  left: -250%;
  width: 300%;
  height: 100%;
  background-color: #7494ec;
  z-index: 2;
  border-radius: 150px;
  transition: 1.8s ease-in-out;
}

.toggle-panel {
  position: absolute;
  width: 50%;
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  transition: 0.6s ease-in-out;
}

.toggle-panel.toggle-left {
  left: 0;
  transition-delay: 1.2s;
}

.container.active .toggle-panel.toggle-left {
  left: -50%;
  transition-delay: 0.6s;
}

.toggle-panel.toggle-right {
  right: -50%;
  transition-delay: 0.6s;
}

.container.active .toggle-panel.toggle-right {
  right: 0;
  transition-delay: 1.2s;
}

.toggle-panel p {
  margin-bottom: 20px;
}

.toggle-panel .btn {
  width: 160px;
  height: 46px;
  background-color: transparent;
  border: 2px solid #fff;
  box-shadow: none;
}

@media screen and (max-width: 650px) {
  .container {
    height: calc(100vh - 40px);
  }

  .form-box {
    bottom: 0;
    width: 100%;
    height: 70%;
  }

  .container.active .form-box {
    right: 0;
    bottom: 30%;
  }

  .toggle-box::before {
    left: 0;
    width: 100%;
    top: -270%;
    height: 300%;
    border-radius: 20vw;
  }

  .container.active .toggle-box::before {
    left: 0;
    top: 70%;
  }

  .toggle-panel {
    width: 100%;
    height: 30%;
  }

  .toggle-panel.toggle-left {
    top: 0;
  }

  .container.active .toggle-panel.toggle-left {
    left: 0;
    top: -30%;
  }

  .toggle-panel.toggle-right {
    right: 0;
    bottom: -30%;
  }

  .container.active .toggle-panel.toggle-right {
    bottom: 0;
  }
}

@media screen and (max-width: 400px) {
  .form-box {
    padding: 20px;
  }

  .toggle-panel h1 {
    font-size: 30px;
  }
}
</style>
