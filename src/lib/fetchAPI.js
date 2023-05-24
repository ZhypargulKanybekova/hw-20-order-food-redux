export const fetchRequest = async (urlPath, options = {}) => {
  try {
    const BASE_URL =
      "http://ec2-3-70-250-130.eu-central-1.compute.amazonaws.com:5500/api/v1";
    const requestOption = {
      method: options.method || "GET",
      headers: {
        "Content-Type": "application/json",
        UserID: "Zhypargul",
      },
    };

    if (options.method !== "GET") {
      requestOption.body = JSON.stringify(options.body);
    }

    const responce = await fetch(`${BASE_URL}${urlPath}`, requestOption);
    const data = await responce.json();
    return data.data;
  } catch (error) {
    new Error(error);
  }
};
