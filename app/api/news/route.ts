const api = "https://news.itmo.ru/api/news/list/?ver=2.0";

export const GET_NEWS = async () => {
  const res = await fetch(api, {
    next: {
      tags: ["collection"],
      revalidate: 10,
    },
  });
  return await res.json();
};
