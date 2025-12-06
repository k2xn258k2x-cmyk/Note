document.addEventListener('DOMContentLoaded', function () {
  var flag = 1;
  var downloadUrl = "https://github.com/your_user/your_repo/releases/download/v1.0/file.zip";
  var messageText = "Update available. Download now.";

  if (flag !== 1) return;

  var anchor = document.getElementById("trialCountdown") || document.body;
  if (!anchor) return;

  var banner = document.createElement("div");
  banner.style.margin = "4px 10px 10px";
  banner.style.fontSize = "12px";
  banner.style.textAlign = "center";
  banner.style.color = "#b91c1c";
  banner.innerHTML =
    "⬆️ <a href=\"" + downloadUrl +
    "\" target=\"_blank\" rel=\"noopener\" " +
    "style=\"color:#b91c1c;text-decoration:underline;\">" +
    messageText + "</a>";

  anchor.insertAdjacentElement("afterend", banner);
});
