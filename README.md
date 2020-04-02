# Patrones asíncronos en Javascript
## Callbacks
Los callbacks son la pieza clave para que Javascript pueda funcionar de forma asíncrona. De hecho, el resto de patrones asíncronos en Javascript está basado en callbacks de un modo u otro, simplemente añaden azúcar sintáctico para trabajar con ellos más cómodamente.

Un callback no es más que una función que se pasa como argumento de otra función, y que será invocada para completar algún tipo de acción. En nuestro contexto asíncrono, un callback representa el '¿Qué quieres hacer una vez que tu operación asíncrona termine?'. Por tanto, es el trozo de código que será ejecutado una vez que una operación asíncrona notifique que ha terminado. Esta ejecución se hará en algún momento futuro, gracias al mecanismo que implementa el bucle de eventos.

Fíjate en el siguiente ejemplo sencillo utilizando un callback:

    setTimeout(function(){
      console.log("Hola Mundo con retraso!");
    }, 1000)

Si lo prefieres, el callback puede ser asignado a una variable con nombre en lugar de ser anónimo:

    const myCallback = () => console.log("Hola Mundo con retraso!");
	
    setTimeout(myCallback, 1000);

setTimeout es una función asíncrona que programa la ejecución de un callback una vez ha transcurrido, como mínimo, una determinada cantidad de tiempo (1 segundo en el ejemplo anterior). A tal fin, dispara un timer en un contexto externo y registra el callback para ser ejecutado una vez que el timer termine. En resumen, retrasa una ejecución, como mínimo, la cantidad especificada de tiempo.

Es importante comprender que, incluso si configuramos el retraso como 0ms, no significa que el callback vaya a ejecutarse inmediatamente. Atento al siguiente ejemplo:

    setTimeout(function(){
      console.log("Esto debería aparecer primero");
    }, 0);
    console.log("Sorpresa!");
    
    // Sorpresa!
    // Esto debería aparecer primero

Recuerda, un callback que se añade al loop de eventos debe esperar su turno. En nuestro ejemplo, el callback del setTimeout debe esperar el primer tick. Sin embargo, la pila esta ocupada procesando la línea console.log("Sorpresa!"). El callback se despachará una vez la pila quede vacía, en la práctica, cuando Sorpresa! haya sido logueado.

#### Callback Hell

Los callbacks también pueden lanzar a su vez llamadas asíncronas, asi que pueden anidarse tanto como se desee. Inconveniente, podemos acabar con código como este:

    setTimeout(function(){
      console.log("Etapa 1 completada");
      setTimeout(function(){
        console.log("Etapa 2 completada");
        setTimeout(function(){
          console.log("Etapa 3 completada");
          setTimeout(function(){
            console.log("Etapa 4 completada");
            // Podríamos continuar hasta el infinito...
          }, 4000);
        }, 3000);
      }, 2000);
    }, 1000);

Éste es uno de los inconvenientes clásicos de los callbacks, además de la indentación, resta legibilidad, dificulta su mantenimiento y añade complejidad ciclomática. Al Callback Hell también se le conoce como Pyramid of Doom o Hadouken.

## Promesas

## Async / Await

[Referencia a la documentación utilizada](https://lemoncode.net/lemoncode-blog/2018/1/29/javascript-asincrono#callbacks "Referencia a la documentación utilizada")