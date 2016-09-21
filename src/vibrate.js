let vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

//context must be navigator, else illegal invocation
if (vibrate) vibrate = vibrate.bind(navigator)

export default vibrate
