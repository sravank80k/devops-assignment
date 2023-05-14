## Steps for local execution

```docker-compose up```

## Steps for installation using helm

```kubectl create ns test```

Run this from root folder

```kubectl create configmap logstash-config --from-file=logstash.conf=logstash-kafka.conf -n test```

Run these from helm folder

```helm install kafka kafka -n test```

```helm install nodejs nodejs -n test```

```helm install logstash logstash -n test```