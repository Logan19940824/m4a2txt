const axios = require("axios");

const config = {
  client_id: "omtYS61DUIhenrt2WfE6ftwo",
  client_secret: "U12WeoDKafexCI4SihfpWLt48FQAaTfT",
};

function getAccessToken() {
  return new Promise((resolve, reject) => {
    // 发送 POST 请求
    axios({
      method: "post",
      url: "https://aip.baidubce.com/oauth/2.0/token",
      data: {
        grant_type: "client_credentials",
        client_id: config.client_id,
        client_secret: config.client_secret,
      },
    })
      .then((response) => {
        console.log(response.data);
        resolve();
      })
      .catch((err) => {
        // console.log(err);
      });
  });
}

getAccessToken();
