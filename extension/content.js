(function() {
    let isFullWindow = false;

    console.log('ZoomToolkit extension loaded.');

    // 监听键盘事件
    document.addEventListener('keydown', (e) => {
        // 如果用户正在输入框内打字，则忽略按键逻辑
        const activeElem = document.activeElement;
        const isTyping = activeElem && (
            activeElem.tagName === 'INPUT' || 
            activeElem.tagName === 'TEXTAREA' || 
            activeElem.isContentEditable
        );
        
        if (isTyping) return;

        // 按下 T 键切换剧场模式
        if (e.key.toLowerCase() === 't') {
            toggleFullWindow();
        }
        
        // 按下 Escape 键退出剧场模式
        if (e.key === 'Escape' && isFullWindow) {
            toggleFullWindow();
        }
    });

    function toggleFullWindow() {
        // 尝试定位视频元素
        const videoElement = document.querySelector('video');
        if (!videoElement) {
            console.warn('ZoomToolkit: No video element found.');
            return;
        }

        // 寻找最合适的包裹容器
        const container = videoElement.closest('.video-player-container') || 
                          videoElement.closest('.vjs-player') || 
                          videoElement.closest('.player-container') ||
                          videoElement.parentElement;

        if (!container) return;

        isFullWindow = !isFullWindow;

        if (isFullWindow) {
            container.classList.add('zoom-full-window-mode');
            document.body.classList.add('zoom-no-scroll');
            console.log('ZoomToolkit: Entered Full Window Mode');
        } else {
            container.classList.remove('zoom-full-window-mode');
            document.body.classList.remove('zoom-no-scroll');
            console.log('ZoomToolkit: Exited Full Window Mode');
        }

        // 强制触发浏览器 resize 事件，让播放器组件（如 Video.js）重新计算布局
        window.dispatchEvent(new Event('resize'));
    }
})();
