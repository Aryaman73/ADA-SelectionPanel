import AdaWidgetSDK from "@ada-support/ada-widget-sdk";

const widgetSDK = new AdaWidgetSDK();

const containerElement = document.getElementById("widget-container");
const sdkInputElement = document.getElementById("widget-input-data");
//const inputElement = document.getElementById("input-field");

//All Submit Buttons
const submitButton1Element = document.getElementById("submit-button1");
const submitButton2Element = document.getElementById("submit-button2");
const submitButton3Element = document.getElementById("submit-button3");
const submitButton4Element = document.getElementById("submit-button4");
const submitButton5Element = document.getElementById("submit-button5");

const submitMessageElement = document.getElementById("submit-message");

submitButton1Element.onclick = () => {
  widgetSDK.sendUserData({
    responseData: "Option 1"
  }, (event) => {
    if (event.type === "SEND_USER_DATA_SUCCESS") {
      submitMessageElement.innerText = "Data was successfully submitted";
      submitButtonElement.disabled = true;
    } else {
      submitMessageElement.innerText = "Data submission failed, please try again";
    }
  });
};

submitButton2Element.onclick = () => {
  widgetSDK.sendUserData({
    responseData: "Option 2"
  }, (event) => {
    if (event.type === "SEND_USER_DATA_SUCCESS") {
      submitMessageElement.innerText = "Data was successfully submitted";
      submitButtonElement.disabled = true;
    } else {
      submitMessageElement.innerText = "Data submission failed, please try again";
    }
  });
};


submitButton3Element.onclick = () => {
  widgetSDK.sendUserData({
    responseData: "Option 3"
  }, (event) => {
    if (event.type === "SEND_USER_DATA_SUCCESS") {
      submitMessageElement.innerText = "Data was successfully submitted";
      submitButtonElement.disabled = true;
    } else {
      submitMessageElement.innerText = "Data submission failed, please try again";
    }
  });
};

submitButton4Element.onclick = () => {
  widgetSDK.sendUserData({
    responseData: "Option 4"
  }, (event) => {
    if (event.type === "SEND_USER_DATA_SUCCESS") {
      submitMessageElement.innerText = "Data was successfully submitted";
      submitButtonElement.disabled = true;
    } else {
      submitMessageElement.innerText = "Data submission failed, please try again";
    }
  });
};

submitButton5Element.onclick = () => {
  widgetSDK.sendUserData({
    responseData: "Option 5"
  }, (event) => {
    if (event.type === "SEND_USER_DATA_SUCCESS") {
      submitMessageElement.innerText = "Data was successfully submitted";
      submitButtonElement.disabled = true;
    } else {
      submitMessageElement.innerText = "Data submission failed, please try again";
    }
  });
};

widgetSDK.init((event) => {
  if (!widgetSDK.widgetIsActive) {
    containerElement.innerHTML = "The widget is not active";
    return;
  }

  const { inputdata } = widgetSDK.metaData;

  sdkInputElement.innerHTML = inputdata;
});
