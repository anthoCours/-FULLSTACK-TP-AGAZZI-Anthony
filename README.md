# [FULLSTACK]-AGAZZI-Anthony

## Projet

Afin de mener a bien ce projet, nous allons rappeler les besoins du client. Le client chercher avant tout que ses clients puissent prendre rendez-vous en ligne.  
Cela permet au salon de coiffure, de mieux répartir ses ressources les coiffeurs, il peut savoir qui sera disponible pour prendre les coupes sans rendez-vous, de plus les clients pour aussi s'assurer que leur coiffeur préféré sois disponible et ne pas se déplacer pour rien. Il s'agit donc d'un projet gagnant gagnant, les clients peuvent mieux plannifier leur horaire de coupe en fonction des disponibilité de leur coiffeur favoris, et le salon peut bénéficier d'une affluence mieux répartit et moins d'attente dans son salon, cela affectant les coiffeurs, afin de leur évité un stress de pars le fait de faire attendre des personnes.

Afin que le client et les coiffeurs y trouvent leur compte la solution se doit accesbile sur mobile pour les clients mais également sur pc, les fonctionnalités seront de prendre un rendez vous avec un coiffeur, nous rajoutons le fait qu'un client puisse choisir un coiffeur et consulté son historique afin de savoir qu'elle était son dernier coiffeur.

Pour les coiffeurs ils souhaitent voir rapidement leur planning de la semaine avec leur disponibilités et leur occupation avec le nom des clients.

De plus le gérant du salon peut voir l'ensemble des plannings de ses coiffeurs afin de mieux prévoir et préparer le matériel ou les produits par exemple.

## Todo

- [x] Front
  - [v] Init
  - [v] Liste fonctionnalités
  - [v] Wireframe
  - [v] Fonctionnalité
    - [v] Customer
      - [v] Login (opt)
      - [v] Create account (opt)
      - [v] Prendre un rendez vous avec un coiffeur
    - [v] Haidresser
      - [v] Login (opt)
      - [v] Create account (opt)
      - [v] Voir la liste de ses rendez-vous

- [x] Back
  - [v] Init
  - [v] Modele de donnée
    - [v] Hairdresser
    - [v] Customer
    - [v] Meeting
  - [v] Datasource
    - [v] Hairdresser
    - [v] Customer
    - [v] Meeting
  - [v] Repository
    - [v] Hairdresser
    - [v] Customer
    - [v] Meeting
  - [v] Controller
    - [v] Hairdresser
    - [v] Customer
    - [v] Meeting
  - [v] Fake data into db
    - [v] Hairdresser
    - [v] Customer
    - [v] Meeting
  - [v] Core endpoints
    - [v] Prendre un rendez vous en tant que client
    - [v] Afficher les disponibilité d'un coiffeur
    - [v] Afficher les disponibilité de tout les coiffeurs
    - [v] Afficher le planning d'un coiffeur
  - [x] Opt endpoints
    - [x] Login
    - [v] Create account coiffeur
    - [v] Create account client
- [x] Projet
  - [v] Start doc
  - [v] Envoyer mail au professeur du github
  - [v] Clean doc

- [x] Intégration
  - [x] Login
  - [x] Register
  - [x] Rendez-vous GET
  - [x] Rendez-vous POST

## Déroulement

- 9h00
  - Découverte du sujet
  - Création git
  - Établissement des fontionnalités
  - Création des différentes modeles de donnée
  - Choix technologique

- 10h00
  - Création back avec les différents modèls

- 10h36
  - Création doc ( ce fichier )

- 11h00
  - création wireframes
- 11h46
  - Commencement front
  - choix composant

- 16h  
  - Fausse donnée

- 22h  
  - Refacto back
  - Clean code
  - Redaction doc

## Back

- Choix technologique  
Afin d'avoir une api efficace et rapide j'ai utilisé loopback, un outil permettant de créer une api en ligne de commande
Cela a la force de pouvoir se greffer sur différent stockage, ici on utilisera fichier json pour faciliter le développement, pour l'avenir de la solution, d'autre systeme de stockage plus adapter seront utilisé.

## Front

Partie décrivant la partie front

- Choix technologique:  
  React car je connais cette technologie et la richesse de ses librairies (calendrier, responsive, formulaires, ...), cela me permet un développement rapide et efficace

- Wireframe [Template visuel](https://projects.invisionapp.com/freehand/document/41o73z6Re)