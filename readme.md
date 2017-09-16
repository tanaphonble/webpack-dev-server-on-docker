### run webpack-dev-server from docker
---
1.

    docker build -t <image name> /path/Dockerfile

2.

    docker run -d -p <local port>:8080 --name <container name> <image name>

3. go to http://localhost:<local port>
---

### to edit file in container
    cat /local/file/path | docker exec -i <container name> sh -c 'cat > /inside/docker/path/file' 
#### example
    cat dist/index.html | docker exec -i my-container sh -c 'cat > dist/index.html'

    cat src/index.js | docker exec -i my-container sh -c 'cat > dist/index.js'

