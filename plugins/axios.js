export default function ({ $axios, redirect }, inject) {
    // Create a custom axios instance
    $axios.setBaseURL('http://localhost:5000');
    $axios.setHeader('Content-Type', 'application/x-www-form-urlencoded');
  }