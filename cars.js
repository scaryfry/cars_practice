async function getCars() {
    try {
        const url = "https://surveys-5jvt.onrender.com/api/cars/";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
getCars();
async function getCarById(id) {
    try{
        const url = `https://surveys-5jvt.onrender.com/api/cars/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.error("Error fetching data:", error);
    }
}
// getCarById(1);
async function CreatePost() {
    fetch('https://surveys-5jvt.onrender.com/api/cars/', {
        method: 'POST',
        body: JSON.stringify({
          model: 'A6',
          brand: 'Audi',
          year: 2005,
        }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
  }
// CreatePost();
async function UpdateCar(id) {
    fetch(`https://surveys-5jvt.onrender.com/api/cars/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          model: 'Golf 4',
          brand: 'Volkswagen',
          year: 2021,
        }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
  }
//UpdateCar(6);
async function DeleteCar(id) {
    fetch(`https://surveys-5jvt.onrender.com/api/cars/${id}`, {
        method: 'DELETE',
    })
}
//DeleteCar(25);