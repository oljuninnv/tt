<template>
    <div>
        <h1 class="gray mt-5">Домашняя страница</h1>
    </div>
    <div>
           <h1>{{ message }}</h1>
    </div>
</template>
<script>
   import axios from 'axios';

   export default {
       data() {
           return {
               message: '',
           };
       },
       async mounted() {
         this.message = (await axios.get('http://localhost:8000/api/data')).data.message;
       },
   };
   </script>