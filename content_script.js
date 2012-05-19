var interval_id;

if (interval_id) {
  window.clearInterval(interval_id);
  interval_id = false;
}
else {
  interval_id = window.setInterval(function () {
    window.scrollBy(0, 1000);
  }, 250);
}
