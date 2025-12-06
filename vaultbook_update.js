(function () {
  // ====== CONFIG (edit these in GitHub only) ========================
  var flag = 1; // 1 = show banner, 0 = hide banner
  var downloadUrl = "https://github.com/your_user/your_repo/releases/download/v1.0/file.zip";
  var messageText = "Update available. Download now.";
  // ================================================================

  if (flag !== 1) return; // show nothing if flag 0

  // Use the fixed placeholder div under the license line
  var banner = document.getElementById("updateBanner");
  if (!banner) return;

  banner.style.margin = "4px 10px 10px";
  banner.style.fontSize = "12px";
  banner.style.textAlign = "center";
  banner.style.color = "#b91c1c"; // subtle red
  banner.innerHTML =
    "⬆️ <a href=\"" + downloadUrl +
    "\" target=\"_blank\" rel=\"noopener\" " +
    "style=\"color:#b91c1c;text-decoration:underline;\">" +
    messageText + "</a>";

})();
