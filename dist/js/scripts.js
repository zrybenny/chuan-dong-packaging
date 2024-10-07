/*!
* Start Bootstrap - Small Business v5.0.6 (https://startbootstrap.com/template/small-business)
* Copyright 2013-2024 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
document.getElementById('lang-toggle').addEventListener('click', function () {
    var elements = document.querySelectorAll('[data-en]');
    var currentLang = this.textContent === '中文' ? 'zh' : 'en';
    
    elements.forEach(function (element) {
        element.textContent = currentLang === 'zh' ? element.getAttribute('data-zh') : element.getAttribute('data-en');
    });

    // 切换按钮文本
    this.textContent = currentLang === 'zh' ? 'English' : '中文';
});