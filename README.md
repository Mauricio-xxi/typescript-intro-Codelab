# typescript-intro-Codelab

typescript-intro-Codelab

## Icono de @types:

Cuando ves un icono que representa @types/nombre-libreria, esto indica que los tipos de TypeScript para esa librería están siendo proporcionados por un paquete de tipos definitivamente tipados, usualmente alojado en el repositorio DefinitelyTyped. Esto significa que la librería original en JavaScript no incluye sus propios tipos y, por lo tanto, necesitas instalar este paquete adicional @types/nombre-libreria para obtener soporte de tipos en TypeScript.

## Icono de la librería directamente:

Si no ves el icono de @types sino solo el nombre de la librería, esto generalmente significa que la librería incluye sus propios archivos de declaración de tipos (por ejemplo, index.d.ts). En este caso, no necesitas instalar ningún paquete adicional de @types porque la librería ya proporciona compatibilidad con TypeScript de manera integrada.

## types:

Esta propiedad se utiliza para incluir declaraciones de tipos globales que quieres que sean incluidas en tu compilación. Solo los paquetes listados en types serán incluidos. Esto es útil cuando tienes múltiples declaraciones de tipos globales y quieres evitar conflictos o simplemente controlar cuáles están siendo incluidas.

## typeRoots:

Esta propiedad se utiliza para especificar la lista de directorios donde el compilador de TypeScript debe buscar paquetes de tipos. Si no se especifica, TypeScript asume que los paquetes de tipos están en la carpeta node_modules/@types. Se puede usar typeRoots para especificar una lista de directorios que contengan los archivos de declaración de tipos, lo que es útil cuando se trabaja con tipos personalizados o cuando las dependencias de tipos no están en la ubicación estándar.
