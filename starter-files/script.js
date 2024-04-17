// API
const API_ENDPOINT = 'https://yesno.wtf/api';

async function fetchAnswer() {
  try {
    const response = await fetch(API_ENDPOINT);
    if (!response.ok) {
      throw new Error('Failed to fetch answer');
    }
    const data = await response.json();
    return data.answer;
  } catch (error) {
    console.error("Error en la respuesta:", error);
    return "Error al obtener la respuesta.";
  }
}

function showAnswer(answer) {
  const answerElement = document.getElementById('answer');
  answerElement.textContent = answer;
}

function clearAnswer() {
  const answerElement = document.getElementById('answer');
  answerElement.textContent = '';
}

function showError(message) {
  const errorElement = document.getElementById('error');
  errorElement.textContent = message;
}

function clearError() {
  const errorElement = document.getElementById('error');
  errorElement.textContent = '';
}

async function handleButtonClick() {
  try {
    const question = document.getElementById('input').value;
    if (question.trim() === '') {
      showError('Por favor, ingresa una pregunta.');
      return;
    }
    clearError();
    const answer = await fetchAnswer();
    showAnswer(answer);
    setTimeout(clearAnswer, 5000);
  } catch (error) {
    console.error("Error al obtener la respuesta:", error);
    showError("Error al obtener la respuesta. Por favor, intenta nuevamente.");
  }
}

function handleKeyEnter(event) {
  if (event.key === 'Enter') {
    handleButtonClick();
  }
}

// Add event listener to the button
const buttonElement = document.getElementById('button');
buttonElement.addEventListener('click', handleButtonClick);

// Add event listener to the input for Enter key press
const inputElement = document.getElementById('input');
inputElement.addEventListener('keypress', handleKeyEnter);
/* Explicación:

1. Se define la función `showAnswer` que recibe la respuesta como parámetro y la muestra en el elemento con el id 'answer'.

2. Se define la función `clearAnswer` que limpia el contenido del elemento con el id 'answer'.

3. Se define la función asincrónica `handleButtonClick` que se ejecuta cuando se hace clic en el botón:
   - Utiliza `await` para esperar a que la función `fetchAnswer` devuelva la respuesta.
   - Llama a la función `showAnswer` para mostrar la respuesta en el elemento correspondiente.
   - Establece un temporizador de 5000 milisegundos (5 segundos) utilizando `setTimeout` para llamar a la función `clearAnswer` después de ese tiempo.
   - Si ocurre algún error durante la ejecución de `fetchAnswer`, se captura y se muestra en la consola utilizando `console.error`.

4. Se define la función `handleKeyEnter` que se ejecuta cuando se presiona una tecla en el input:
   - Verifica si la tecla presionada es 'Enter' utilizando `event.key`.
   - Si es 'Enter', llama a la función `handleButtonClick` para realizar la misma acción que al hacer clic en el botón.

5. Se obtiene el elemento del botón con el id 'button' utilizando `document.getElementById('button')`.

6. Se agrega un event listener al botón utilizando `addEventListener`. Cuando se hace clic en el botón, se ejecuta la función `handleButtonClick`.

Con estos cambios, el código debería funcionar correctamente. Cuando se hace clic en el botón o se presiona la tecla 'Enter' en el input, se llama a 
la función `handleButtonClick` que obtiene la respuesta de la API utilizando `fetchAnswer`, muestra la respuesta en el elemento correspondiente y establece un temporizador 
para 
limpiar la respuesta después de 5 segundos.

Recuerda que si sigues teniendo problemas con la carga del recurso y recibes un error 403, debes verificar la documentación de la API y asegurarte de tener los 
permisos necesarios para acceder a ella.




 */
/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */
