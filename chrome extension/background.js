chrome.runtime.onInstalled.addListener(() => {
  // Right-click anywhere
  chrome.contextMenus.create({
    id: "openCropper",
    title: "Open BatchCrop Pro (Thumbnail Cropper)",
    contexts: ["all"]
  });

  // Right-click an image
  chrome.contextMenus.create({
    id: "cropThisImage",
    title: "Crop this image with BatchCrop Pro",
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
