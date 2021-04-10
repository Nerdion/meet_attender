document.getElementById("joinButton").addEventListener("click", JoinMeeting);

function JoinMeeting() {
  let linkInput = document.getElementById("meetingLink").value;
  //   window.open(linkInput, "_self");
  //   let flag = false;
  //   let openLink;
  //   if (flag == false) {
  //     if (openLink == linkInput) {
  //       flag == true;
  //       alert("oma turualalsl ");
  //     } else {
  //       openLink = window.location.href;
  //     }
  //   }
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var tab = tabs[0];
    chrome.tabs.update(tab.id, { url: linkInput });
  });

  var checkExist = setInterval(function () {
    if ((window.location.href = linkInput)) {
      clearInterval(checkExist);
    }
  }, 500);
  //   if (checkExist) {
  //   }
}
