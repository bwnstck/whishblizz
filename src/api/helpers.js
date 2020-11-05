export default async function getLists() {
  const response = await fetch('http://localhost:5555/lists');
  const lists = await response.json();
  return lists;
}
export async function getListByID(id) {
  const response = await fetch(`http://localhost:5555/lists/${id}`);
  const list = await response.json();
  return list;
}
export async function deleteListByID(listID) {
  await fetch(`http://localhost:5555/lists/${listID}`, {
    method: 'delete',
  });
}
