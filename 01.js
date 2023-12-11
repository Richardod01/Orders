// Función para ordenamiento Burbuja
const bubbleSort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Intercambiar elementos si están en el orden incorrecto
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  };
  
  // Función para ordenamiento QuickSort
  const quickSort = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
  
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)];
  };
  
  // Función para ordenamiento Shell
  const shellSort = (arr) => {
    const n = arr.length;
    let gap = Math.floor(n / 2);
  
    while (gap > 0) {
      for (let i = gap; i < n; i++) {
        const temp = arr[i];
        let j = i;
  
        while (j >= gap && arr[j - gap] > temp) {
          arr[j] = arr[j - gap];
          j -= gap;
        }
  
        arr[j] = temp;
      }
  
      gap = Math.floor(gap / 2);
    }
  
    return arr;
  };
  
  // Función para búsqueda secuencial
  const sequentialSearch = (arr, element) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === element) {
        return i;
      }
    }
    return -1;
  };
  
  // Función para búsqueda binaria
  const binarySearch = (arr, element) => {
    let start = 0;
    let end = arr.length - 1;
  
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
  
      if (arr[mid] === element) {
        return mid;
      } else if (arr[mid] < element) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  
    return -1;
  };
  
  // Función para mostrar el menú y realizar las operaciones
  const mostrarMenu = () => {
    let array = [];
    let opcion;
  
    do {
      console.log("\n*** MENÚ ***");
      console.log("1. Ingresar elementos al arreglo");
      console.log("2. Métodos de ordenamiento disponibles");
      console.log("3. Método de búsqueda");
      console.log("4. Salir");
      
      opcion = parseInt(prompt("Ingrese una opción:"));
      switch (opcion) {
        case 1:
          const numElementos = parseInt(prompt("Ingrese el número de elementos:"));
          array = [];
          for (let i = 0; i < numElementos; i++) {
            const elemento = parseInt(prompt(`Ingrese el elemento ${i + 1}:`));
            array.push(elemento);
          }
          console.log("Arreglo ingresado:", array);
          break;
        case 2:
          if (array.length === 0) {
            console.log("Debe ingresar elementos primero.");
          } else {
            console.log("\nMétodos de ordenamiento disponibles:");
            console.log("1. Burbuja");
            console.log("2. Quick");
            console.log("3. Shell");
            const metodoOrdenamiento = parseInt(prompt("Seleccione un método de ordenamiento:"));
            let arregloOrdenado = [];
            switch (metodoOrdenamiento) {
              case 1:
                arregloOrdenado = bubbleSort([...array]);
                console.log("Arreglo ordenado con Burbuja:", arregloOrdenado);
                break;
              case 2:
                arregloOrdenado = quickSort([...array]);
                console.log("Arreglo ordenado con QuickSort:", arregloOrdenado);
                break;
              case 3:
                arregloOrdenado = shellSort([...array]);
                console.log("Arreglo ordenado con ShellSort:", arregloOrdenado);
                break;
              default:
                console.log("Opción inválida.");
            }
          }
          break;
          case 3:
            if (array.length === 0) {
              console.log("Debe ingresar elementos primero.");
            } else {
              console.log("\nMétodo de búsqueda:");
              console.log("1. Búsqueda secuencial");
              console.log("2. Búsqueda binaria");
              const metodoBusqueda = parseInt(prompt("Seleccione un método de búsqueda:"));
              let elementoBuscar;
              let posicion;
    
              switch (metodoBusqueda) {
                case 1:
                  elementoBuscar = parseInt(prompt("Ingrese el elemento a buscar:"));
                  posicion = sequentialSearch(array, elementoBuscar);
                  if (posicion !== -1) {
                    console.log(`El elemento ${elementoBuscar} se encuentra en la posición ${posicion}.`);
                  } else {
                    console.log("ELEMENTO NO ENCONTRADO EN LA LISTA.");
                  }
                  break;
                case 2:
                  arregloOrdenado = quickSort([...array]);
                  console.log("Arreglo ordenado para búsqueda binaria:", arregloOrdenado);
                  elementoBuscar = parseInt(prompt("Ingrese el elemento a buscar:"));
                  posicion = binarySearch(arregloOrdenado, elementoBuscar);
                  if (posicion !== -1) {
                    console.log(`El elemento ${elementoBuscar} se encuentra en la posición ${posicion}.`);
                  } else {
                    console.log("ELEMENTO NO ENCONTRADO EN LA LISTA.");
                  }
                  break;
                default:
                  console.log("Opción inválida.");
              }
            }
            break;
          case 4:
            console.log("Saliendo del programa...");
            break;
          default:
            console.log("Opción inválida. Intente de nuevo.");
        }
      } while (opcion !== 4);
    };
    
    // Iniciar el programa mostrando el menú
    mostrarMenu();
    
  