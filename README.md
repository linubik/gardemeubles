# gardemeubles
Objectif : une application PWA basée sur ionic avec accès aux données firebase

## TODO list
- [x] créer un formulaire                 [ioniccreator](https://creator.ionic.io) (ionic v3)
### Avantages
  - gratuit
  - simple (testée par ma fille de 12 ans)
### Inconvénients
  - un seul projet (en version gratuite)
  - bugs mineurs (les apostrophes dans les IHM n'affichent rien ...)

- [x] hebergement                         [firebase](https://console.firebase.google.com/) (google)

### Avantages
  - gratuit
  - simple (authentification dans l'application développée via compte google)

### Inconvénients
  - les sources déployés ne sont pas récupérables via firebase (il faut gérer les sources à part)

- [x] identifier les utilisateurs         google signin + fireauth
### Avantages
  - simple (en ionic v3 ;-) basé sur TypeScript ... pas réussi avec ionic v1 écrit en javascript :-(

- [ ] stocker les réponses                 firebase database

- [ ] gérer le mode offline                service-worker

- [ ] installation comme une appli         PWA
