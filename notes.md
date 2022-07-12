### Services

the _targetPort_ is the port which your application exposes
the _port_ is the port which you want your local computer to receive the targetport into

**port** is the service port
**targetPort** is your application port **your Pod Port**

neither the **port** nor the **targetPort** is what tells you the port to access from your machine
when you run `kubectl describe service <your service name>` that will tell you the port in which you can access from your computer

**You can't access the port from localhost instead you have to access that port from the cluster IP**
the cluster ip will be provided by that commmand **kubectl ip**

**if you are in docker for macos then you can access it through `localhost`**
