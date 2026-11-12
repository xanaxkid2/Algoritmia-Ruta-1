

        ------------ ARBOL DE COMPONENTES ----------------

        Web utilizada : (https://adamclarkecolour.com/)


        App
        │
        ├── WebsiteLayout
        │   │
        │   ├── Header
        │   │   ├── Logo
        │   │   │   └── "AC"
        │   │   │
        │   │   └── Navigation
        │   │       ├── Work
        │   │       ├── Archive
        │   │       ├── About
        │   │       └── Contact
        │   │
        │   ├── Main
        │   │   │
        │   │   ├── HomePage
        │   │   │   │
        │   │   │   ├── FeaturedProjects
        │   │   │   │   ├── ProjectCard
        │   │   │   │   │   ├── ProjectMedia
        │   │   │   │   │   ├── ProjectTitle
        │   │   │   │   │   ├── Director
        │   │   │   │   │   └── ProductionCompany
        │   │   │   │   │
        │   │   │   │   ├── ProjectCard
        │   │   │   │   ├── ProjectCard
        │   │   │   │   └── ...
        │   │   │   │
        │   │   │   ├── CategoryNavigation
        │   │   │   │   ├── Commercial
        │   │   │   │   ├── Film
        │   │   │   │   ├── MusicVideo
        │   │   │   │   └── Online
        │   │   │   │
        │   │   │   └── ProjectGrid
        │   │   │       ├── ProjectCard
        │   │   │       ├── ProjectCard
        │   │   │       └── ...
        │   │   │
        │   │   ├── WorkPage
        │   │   │   └── ProjectCollection
        │   │   │
        │   │   ├── ArchivePage
        │   │   │   └── ArchivedProjects
        │   │   │
        │   │   ├── AboutPage
        │   │   │   └── ArtistInformation
        │   │   │
        │   │   └── ContactPage
        │   │       ├── Location
        │   │       ├── Availability
        │   │       ├── Email
        │   │       ├── Phone
        │   │       └── SocialLinks
        │   │
        │   └── Footer
        │       └── Copyright
        │           └── "© ADAM CLARKE 2026"
        │
        └── GlobalElements
            ├── Typography
            ├── ResponsiveLayout
            ├── NavigationBehavior
            └── MediaPresentation


        ---------- TRAZAS DE CAJERO Y PIRAMIDE ------------

        1. Piramide


        Cuando i = 1:

            espacios = ""

            asteriscos = ""

            El ciclo j agrega 3 espacios.

            El ciclo n agrega 1 asterisco.

            Imprime:    *

        Cuando i = 2:

            espacios = ""

            asteriscos = ""

            El ciclo j agrega 2 espacios.

            El ciclo n agrega 3 asteriscos.

            Imprime:   ***

        Cuando i = 3:

            espacios = ""

            asteriscos = ""

            El ciclo j agrega 1 espacio.

            El ciclo n agrega 5 asteriscos.

            Imprime:  *****

        Cuando i = 4:

            espacios = ""

            asteriscos = ""

            El ciclo j no se ejecuta porque filas - i = 0.

            El ciclo n agrega 7 asteriscos.

            Imprime: *******

        2. Cajero

        Inicio:

            carros = 0

            total = 0

            Se solicita el primer valor: 5000.

        Primera vuelta:

            5000 es mayor que 0, entra al while.

            total = 0 + 5000 = 5000.

            carros = 0 + 1 = 1.

            Solicita otro valor: 3000.

        Segunda vuelta:

            3000 es mayor que 0.

            total = 5000 + 3000 = 8000.

            carros = 1 + 1 = 2.

            Solicita otro valor: 4000.

        Tercera vuelta:

            4000 es mayor que 0.

            total = 8000 + 4000 = 12000.

            carros = 2 + 1 = 3.

            Solicita otro valor: 0.

        Finalización:

            0 no es mayor que 0, por lo tanto, el ciclo termina.

            Se muestra el mensaje con el total cobrado y la cantidad de carros.

