
           ---------- TABLAS DE VERDAD y SALIDAS DE CONSOLA -----------


1 . validacionRegistro


                         REGISTRO
=========================================================

A       B       C       RESULTADO
---------------------------------------------------------
V       V       F       REGISTRO EXITOSO
V       F       V       REGISTRO RECHAZADO
V       F       F       INGRESAR S O N
F       -       -       EDAD INSUFICIENTE

=========================================================                

Prueba: 
ingresa tu edad20
Aceptas los terminos y condiciones ? S/Ns
Bienvenido , te registraste con exito


2 .ValidacionEdad


                 VALIDACIÓN DE EDAD
========================================================

ID     ENTRADA       RESULTADO ESPERADO
--------------------------------------------------------
CP01   -5            EDAD NO VÁLIDA
CP02   0             EDAD NO VÁLIDA
CP03   1             EDAD VÁLIDA
CP04   13            EDAD VÁLIDA
CP05   18            EDAD VÁLIDA
CP06   50            EDAD VÁLIDA
CP07   120           EDAD VÁLIDA
CP08   121           EDAD NO VÁLIDA
CP09   150           EDAD NO VÁLIDA
CP10   Texto         EDAD NO VÁLIDA
CP11   Campo vacío   EDAD NO VÁLIDA
CP12   25.5          EDAD VÁLIDA (SEGÚN CÓDIGO)

====================================================

prueba:
ingresa tu edad-5
no cumples con la edad requerida



3 .Parqueadero


                     PARQUEADERO
=============================================================

ID    MINUTOS   VEHÍCULO   FACTURA   RESULTADO ESPERADO
-------------------------------------------------------------
CP01     -5        -          -      TIEMPO INVÁLIDO
CP02      0        -          -      TIEMPO INVÁLIDO
CP03      1        -          -      PARQUEADERO GRATIS
CP04     15        -          -      PARQUEADERO GRATIS
CP05     16        C          N      $4.000
CP06     16        M          N      $2.000
CP07     60        C          N      $4.000
CP08     61        C          N      $8.000
CP09     61        M          N      $4.000
CP10     60        C          S      $2.000
CP11     60        M          S      $1.000
CP12    120        C          N      $8.000
CP13    120        M          N      $4.000
CP14    600        C          N      $30.000
CP15    600        C          S      $15.000
CP16    900        M          N      $30.000
CP17    900        X          N      VEHÍCULO INVÁLIDO
CP18    120        C          X      FACTURA INVÁLIDA
CP19    120        M          S      $2.000
CP20    121        C          N      $12.000

====================================================

prueba:
Ingrese los minutos de parqueo:200
Tipo de vehículo: C = Carro / M = Motom
¿Cuenta con factura? S/Ns
Total a pagar: $4000



4 . Semaforo



             TABLA DE VERDAD - INVENTARIO
========================================================

A    B    C    D       RESULTADO
--------------------------------------------------------
V    -    -    -       ERROR 🚫
-    V    -    -       ERROR 🚫
F    F    V    -       AGOTADO 🔴
F    F    F    V       PEDIR 🟡
F    F    F    F       TODO MELO 🟢

========================================================

prueba:
Ingrese la cantidad de unidades:6
Pedir 🟡


5 .Bisiesto


                     AÑO BISIESTO
=========================================================

ID    AÑO       DIVISIBLE   DIVISIBLE   DIVISIBLE   RESULTADO
                ENTRE 4     ENTRE 100   ENTRE 400
---------------------------------------------------------
CP01  2024      SI          NO          NO          BISIESTO
CP02  2025      NO          NO          NO          NO BISIESTO
CP03  2000      SI          SI          SI          BISIESTO
CP04  1900      SI          SI          NO          NO BISIESTO
CP05  2028      SI          NO          NO          BISIESTO
CP06  2100      SI          SI          NO          NO BISIESTO
CP07  2400      SI          SI          SI          BISIESTO
CP08  2023      NO          NO          NO          NO BISIESTO
CP09  1600      SI          SI          SI          BISIESTO
CP10  1800      SI          SI          NO          NO BISIESTO

=========================================================

prueba:
Ingresa un año:2000
El año 2000 es bisiesto

