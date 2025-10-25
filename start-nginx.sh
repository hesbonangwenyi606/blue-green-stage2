upstream backend {
    server app_blue:8081 max_fails=1 fail_timeout=2s backup;
    server app_green:8082;
}

server {
    listen 8080;

    location / {
        proxy_pass http://backend;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-App-Pool $upstream_http_x_app_pool;
        proxy_set_header X-Release-Id $upstream_http_x_release_id;
    }
}
