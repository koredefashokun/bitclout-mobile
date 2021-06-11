const endpoint = "";

const post = async (route: string) => {
  const response = await fetch(`${endpoint}/${route}`);
  const data = await response.json();
  return data;
};
