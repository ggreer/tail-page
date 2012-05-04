var interval_id;

if (interval_id) {
  console.log("cancelling interval id", interval_id);
  window.clearInterval(interval_id);
  interval_id = false;
}
else {
  console.log("tailing");
  interval_id = window.setInterval(function () {
    window.scrollBy(0, 1000);
  }, 250);
  console.log("interval id is", interval_id);
}
