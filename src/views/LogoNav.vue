<template>  
    <div class="logo-nav">  
      <img src="path/to/your/logo.png" alt="Logo" class="logo" />  
      <ul>  
        <li v-for="(item, index) in navItems" :key="index">  
          {{ item }}  
        </li>  
      </ul>  
    </div>  
  </template>  
    
  <script>  
  export default {  
    data() {  
      return {  
        navItems: ['Home', 'News', 'About', 'Contact']  
      };  
    }  
  };  
  </script>  
    
  <style scoped>  
  .logo-nav {  
    display: flex;  
    align-items: center;  
  }  
    
  .logo {  
    width: 50px; /* Adjust as needed */  
    height: 50px; /* Adjust as needed */  
    margin-right: 20px;  
  }  
    
  ul {  
    list-style-type: none;  
    padding: 0;  
  }  
    
  li {  
    display: inline;  
    margin-right: 10px;  
  }  
  </style>