const mobileResponsive = {
    isMobile: function() {
        return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    },
    makeResponsive: function() {
        if (this.isMobile()) {
            document.getElementById('chatBox').style.width = '100%';
            document.getElementById('userInput').style.width = '80%';
            document.getElementById('sendButton').style.width = '20%';
        } else {
            document.getElementById('chatBox').style.width = '60%';
            document.getElementById('userInput').style.width = '50%';
            document.getElementById('sendButton').style.width = '10%';
        }
    }
};

window.addEventListener('resize', mobileResponsive.makeResponsive);
window.addEventListener('load', mobileResponsive.makeResponsive);