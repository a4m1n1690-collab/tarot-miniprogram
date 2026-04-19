App({
  onLaunch() {
    wx.cloud.init({
      env: 'cloud1-d1g8mvco670ceac8e',  
      traceUser: true,
    });
  },
});