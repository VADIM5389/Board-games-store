function myFunction() {
    document.getElementById("demo").innerHTML = "Поздравляем! Вы получили скидку 15%. Пожалуйста, предъявите ваш студенческий билет при оплате.";
    
    anime({
      targets: '#animatedButton',
      scale: 1.2,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutQuad',
      duration: 500
    });
  }