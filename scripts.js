window.onload = function() {
  // 找到“关于我”的链接并模拟点击事件
  const aboutLink = document.querySelector('a[href="#about"]');
  if (aboutLink) {
    // 阻止原本的锚点跳转行为（虽然在这个场景下没有实际影响）
    aboutLink.addEventListener('click', event => event.preventDefault());

    // 触发点击事件以显示“关于我”内容
    aboutLink.click();
  }
};

  // 处理导航栏链接点击事件
  document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // 阻止默认行为

      // 获取所有内容区域，并将它们隐藏
      const allContentAreas = document.querySelectorAll('#about, #projects, #contact, #message-board');
      allContentAreas.forEach(area => area.style.display = 'none');

      // 获取当前点击的目标ID（去除#）
      const targetId = this.getAttribute('href').substring(1);

      // 显示目标内容区域
      const targetArea = document.getElementById(targetId);
      if (targetArea) {
        targetArea.style.display = 'block';
        
        // 移除其他已激活的导航项样式，并为当前点击项添加激活样式
        document.querySelectorAll('.navbar .active').forEach(item => item.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });