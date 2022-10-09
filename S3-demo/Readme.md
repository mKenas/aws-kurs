# S3 demo

Naviger til s3 konsollen.

Trykke `create bucket` og gi et unikt navn (skal vær globalt unikt blant alle AWS brukere).

Ta bort markeringen rundt `block all public access`.

Trykke `create s3 bucket`.

Trykke `upload` og last opp `index.html` og `styles.css` fra S3-demo mappe fra github.

Kopier innholdet i `S3-demo/S3 policy.json` og gå til `Permissions` fane og rediger bucket policy.

Husk å oppdatere `Resource` attributten til å peke på din bucket ARN.

Åpne `Properties` fane og gå ned til `Static website hosting`.

Trykke på `edit` knappen.

Velg `enable static website hosting` og skriv `index.html` under Index document.

Lagre endringene.

Åpne linken som blir generert.
