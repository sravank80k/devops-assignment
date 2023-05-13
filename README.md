Requirements:
    Utilize automation to create 3 kubernetes deployments from a Git Repository containing a declarative state (YAML manifests, etc.)
    Automate configuration of deployments to enable successful inter-service communication
    
Acceptance Criteria
    As a Git Repository
        Automated scripting to deploy
			- to a locally running Kubernetes cluster
			- to an EKS cluster 
        Scripted deployment of the applications
        Pods can successfully communicate with each other
        Scripting of the deployed applications is repeatable and easily configured

Description of Deployments:
    Producer (nodejs)
        image
			create and deploy docker container for the provided Node functionality
		Publishes to Kafka
		Configure env to include KAFKA_ADDR with host:port of Kafka instance in cluster 
	Kafka
		image
			https://hub.docker.com/r/bitnami/kafka
		Deploy defaults
    Logstash
        image
			https://www.docker.elastic.co/r/logstash
			https://hub.docker.com/_/logstash
		Configure deployment to install Kafka input plugin
			bin/logstash-plugin install logstash-input-kafka
        Configure input from kafka and output to command line
			see ./logstash-kafka.conf

Assesses
- Dockerfile creation and usage to generate a node container image
- Kubernetes deployment design and configuration
- Kubernetes cluster configuration
- Deployment pipeline automation
- Git-controlled deployments 


kubectl create configmap logstash-config --from-file=logstash.conf=logstash-kafka.conf