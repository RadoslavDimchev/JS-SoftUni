export async function getAllData() {
  try {
    const res = await fetch('http://localhost:3030/jsonstore/advanced/table');

    if(!res.ok) {
      const error = await res.json();
      throw new Error(error.message);
    }

    return res.json();
  } catch (error) {
    alert(error.message);
  }
}