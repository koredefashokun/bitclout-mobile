const endpoint = "";

export const post = async (route: string, body: Record<string, any>) => {
  const response = await fetch(`${endpoint}/${route}`, {
    method: "POST",
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data;
};

export const get = async (route: string) => {
  const response = await fetch(`${endpoint}/${route}`);
  const data = await response.json();
  return data;
};
