chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "openCropper",
    title: "Open Thumbnail Cropper",
    contexts: ["all"]
  });

  chrome.contextMenus.create({
    id: "cropThisImage",
    title: "Crop this image",
    contexts: ["image"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "openCropper") {
    chrome.action.openPopup();
  }

  if (info.menuItemId === "cropThisImage") {
    chrome.storage.local.set({ clickedImage: info.srcUrl }, () => {
      chrome.action.openPopup();
    });
  }
});
