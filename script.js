function copy(area) {
    var copyText = document.getElementById("Text"+area);
   copyText.select();
    document.execCommand("copy");
  }