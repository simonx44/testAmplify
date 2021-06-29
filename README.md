Bestellapp für die Bachelorarbeit

Information: Eine bessere Vorgehensweise statt sämtliche Ressourcen der Anwendung innerhalb eines Templates zu definieren, wäre es die Ressourcen in einzelne Templates auszulagern.
Hierfür dient innerhalb von AWS SAM die Ressource "Type: AWS::Serverless::Application". Dies führt zu einer besseren Wartbarkeit und einer kürzeren Build-Dauer.

--> Beschreibung des Stacks

aws cloudformation describe-stacks --stack-name http

-- > Bereitstellung des Stacks

1. sam build --use-container    // Wenn Docker nicht installiert, muss package.json innerhalb von src/s3/created manuell installiert werden 

2.  Deployment: sam deploy 

--> Serverless Backend wird bereitgestellt

3.

4.  Client

Initiales Deployment, muss zu Beginn ausgeführt werden -> danach Automatisch nach Änderungen des Git-Repos durch Amplify

Hierfür entweder Daten des Deploys nutzen (Output)

oder

aws cloudformation describe-stacks --stack-name <StackName> ausführen

Schritt 1: AmplifyEnvironmentUpdateCommand ausführen --> Fügt Frontend benötigte Entwicklungsvariablen hinzu

Folgende Form aus Output aufrufen:

aws amplify update-app --app-id do68bi531l99o --environment-variables VUE_APP_API_ROOT=cogtest,VUE_APP_REGION=eu-central-1,VUE_APP_USER_POOL_ID=eu-central-1_QI3YWvRUC,VUE_APP_CLIENT_ID=3rcu02qt5umvvqp898e0d1e6s6,VUE_APP_URL=https://cogtest-457908813616.auth.eu-central-1.amazoncognito.com

Schritt 2: Initales Deployment Frontend starten (Output produziert cli-Befehl)

Form: aws amplify start-job --app-id <MyAmplifyAppId> --branch-name master --job-type RELEASE 

-> CLI Befehl ist verbuggt -> Bei Fehlermeldung: Branch ... not found manuell über AWS Console deployen
