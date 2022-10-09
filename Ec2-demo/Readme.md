# Ec2 demo

Naviger til Ec2 konsollen.

Velg lunch instance.

Velg `Amazon Linux` som AMI (default).

Velg instances type `t2.micro` (default).

Velg `proceed without key pair` under key pair name.

Under security group huk av allow `HTTP traffic from the internet`.

Kopier kommandoene fra Ec2 userdata skriptet `Ec2-demo/Userdata.txt`.

Gå til advanced detailes og lim inn kommandoene i user data feltet.

Velg lucnch.

Vent noen minnuter etter at status endrer seg til running.

Velg instances fra sidemenyen.

Finn din ec2 instance og merker den.

Fra details fane, kopier `public IP address` eller `Public IPv4 DNS` og lim den inn i nettleseren din.

Vær obs på at det å trykke på `open link` bruker https som standard og det må endres til http for å få svar fra serveren.

Ekstra steg
Oppdatere nettsiden.

Merker din Ec2 instance og trykk på `connect` knappen øverst i høyre siden.

Velg `EC2 Instance Connect` og trykk `connect`.

Bytt mappe ved å skrive `cd /var/www/html`.

Åpne `index.html` filen til redgigering ved å skrive sudo nano index.html.

Endre teksten mellom `<h1></h1>`.

Lagre filen ved å trykke `Ctrl + O` + Enter.

Lukke filen ved å trykke `ctrl + X`.

kopier public ip address eller Public IPv4 DNS Fra details fane til din ec2 instance, og lim inn på i nettleseren din.

Stimulere nedetid.

Velg din EC2 Instance.

Fra instance state menyen velg `stop instance`.

Åpne `Public IP address` eller `Public IPv4 DNS` i din nettleser.

Nettsiden vil time ut etter en stund og vil ikke respondere.
