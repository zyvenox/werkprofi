const API_URL = import.meta.env.VITE_API_URL;

async function apiRequest(
  endpoint,
  options = {}
) {
  const response = await fetch(
    `${API_URL}${endpoint}`,
    {
      ...options,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    }
  );

  const contentType =
    response.headers.get(
      "content-type"
    );

  let data;

  if (
    contentType?.includes(
      "application/json"
    )
  ) {
    data = await response.json();
  } else {
    data = await response.text();
  }

  if (!response.ok) {
    const error = new Error(
      data?.message ||
        "Request failed."
    );

    error.status = response.status;
    error.data = data;

    throw error;
  }

  return data;
}

export default apiRequest;