Serverløs nettside demo med API Gateway Lambda and DynamoDB

Trinn 1 - Lag en DynamoDB-tabell

Åpne DynamoDB-konsollen og velg create table.

For table name skriv inn dine-initialer-leaderboard-tabell.

Skriv id i partition key feltet.

Velg create.

Fra side meny velg table og fin din tabell.

Gå til indexes fane og trykk create index.

Skriv spill inn på partition key feltet og score på sort key feltet.

Skriv inn spill-score-index på index namefeltet og trykk create index.

Trinn 2: Lag en Lambda-funksjon
Åpne Lambda-konsollen.

Velg create function.

I function name feltet skrive inn dine-initialer-leaderboard-function.

Under permissions -> change default execution role, velg use an existing role og velg dynamodb-cloudwatch-full-access

Merk

Velg create function.

Åpne index.js i kodeeditor, og erstatt innholdet med kode fra Serverløs-nettside-demo/Lambda/index.js fra github repo.

Trykk på deploy.

Trinn 3: Opprette HTTP API

Gå til API Gateway

Velg Build under HTTP API.

Velg add integration.

velg lambda og velg din lambda funksjon.

For API name skriv dine-initialer-leaderboard-api.

Velg Next.

Under configure routes lege til følgende ruter.

Methode GET, Resource path: /players/{id}, Integration target: din lambda funksjon integrasjon.

Methode GET, Resource path: /players/top10, Integration target: din lambda funksjon integrasjon.

Methode PUT, Resource path: /players, Integration target: din lambda funksjon integrasjon.

Methode DELETE, Resource path: /players/{id}, Integration target: din lambda funksjon integrasjon.

Velg next.

Skriv dev i stage name feltet.

Velg Create.

Naviger til CORS og velg edit.

Under Access-Control-Allow-Methods velg _ under Access-Control-Allow-Methods.
For resten av feltene, skriv _ og trykk add.

Velg save.

Velg Deploy -> stages fra sidemeny og noter invoke URL

Trinn 4 - Oppdatere react appen og laste opp til S3.

Åpne Serverløs-nettside-demo/leaderboard-react-app/src/App.js med kodeeditor.

Erstatt API_ENDPOINT med din invoke URL fra API Gateway.

Åpne terminalen og kjør npm run build.

En build mappe blir generert.

Gå til din s3 bucket.

Slett filene fra forrige demo.

Last opp filene fra build mappe.

Naviger til s3 URLen for Static web hosting.
