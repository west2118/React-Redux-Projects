const fetchData = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Sending data failed!");
    }
  } catch (error) {
    console.error(error.message);
  }
};

export default fetchData;
