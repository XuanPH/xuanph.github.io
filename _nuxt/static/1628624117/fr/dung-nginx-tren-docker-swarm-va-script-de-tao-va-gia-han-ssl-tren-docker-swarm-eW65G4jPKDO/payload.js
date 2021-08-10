__NUXT_JSONP__("/fr/dung-nginx-tren-docker-swarm-va-script-de-tao-va-gia-han-ssl-tren-docker-swarm-eW65G4jPKDO", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U){return {data:[{post:{slug:q,title:"Dùng Nginx trên docker swarm và script để tạo và gia hạn ssl trên docker swarm",publishedAt:"2021-08-11 01:24",authors:[{name:"Nham Van Hung",avatarUrl:"https:\u002F\u002Fimages.viblo.asia\u002Favatar\u002F41794475-ead7-4edd-9917-7d8d35dabdb5.jpg",link:"https:\u002F\u002Fviblo.asia\u002Fu\u002Fnham.van.hung"}],tags:["Docker","Docker swarm","Nginx","Viblo"],private:false,source_post:"https:\u002F\u002Fviblo.asia\u002Fp\u002Fdung-nginx-tren-docker-swarm-va-script-de-tao-va-gia-han-ssl-tren-docker-swarm-eW65G4jPKDO",toc:[{id:B,depth:r,text:C},{id:D,depth:r,text:E},{id:F,depth:n,text:G},{id:H,depth:n,text:I},{id:J,depth:n,text:K},{id:L,depth:n,text:M},{id:N,depth:n,text:O},{id:P,depth:r,text:Q}],body:{type:"root",children:[{type:b,tag:s,props:{id:B},children:[{type:b,tag:e,props:{href:"#1-m%E1%BB%9F-%C4%91%E1%BA%A7u",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:C}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"Như bài viết trước mình đã giới thiệu với các bạn về docker swarm, gluster, swarmpit.\nBài biết này mình sẽ triển khai Nginx trên cụm swarm và script để tạo và gia hạn ssl trên cụm swarm của mình nhé.\nCái này rất thích hợp cho các bạn triển khai nhiều domain trên cùng 1 cụm swarm."}]},{type:a,value:c},{type:b,tag:s,props:{id:D},children:[{type:b,tag:e,props:{href:"#2-n%C3%A0o-ch%C3%BAng-ta-c%C3%B9ng-b%E1%BA%AFt-%C4%91%E1%BA%A7u",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:E}]},{type:a,value:c},{type:b,tag:o,props:{id:F},children:[{type:b,tag:e,props:{href:"#21-tr%E1%BB%8F-domain-v%E1%BB%81-ip-c%E1%BB%A7a-3-server-trong-c%E1%BB%A5m-swarm",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:G}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"Cái này thì mình sẽ không viết. Các bạn chỉ cần lên giao diện quản lý domain và thực hiện thao tác trỏ IP là được."}]},{type:a,value:c},{type:b,tag:o,props:{id:H},children:[{type:b,tag:e,props:{href:"#22-t%E1%BA%A1o-container-nginx-tr%C3%AAn-docker-swarm",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:I}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"Đầu tiên chúng ta cần tạo container Nginx.\nChúng ta đăng nhập vào giao diện quản lý cụm swarm theo link "},{type:b,tag:e,props:{href:R,rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:R}]},{type:a,value:" như bài trước\nmình đã làm.\nChọn "},{type:b,tag:d,props:{},children:[{type:a,value:"Stacks"}]},{type:a,value:" =\u003E "},{type:b,tag:d,props:{},children:[{type:a,value:"New Stack"}]},{type:a,value:" sau đó chúng ta điền như hình:\n"},{type:b,tag:f,props:{alt:l,src:"https:\u002F\u002Fimages.viblo.asia\u002F18572430-e7e5-4d93-b629-caf2334ab82d.png"},children:[]}]},{type:a,value:c},{type:b,tag:t,props:{className:[u]},children:[{type:b,tag:v,props:{className:[w,x]},children:[{type:b,tag:y,props:{},children:[{type:a,value:"version: '3.3'\nservices:\nnginx:\nimage: nginx:stable\nvolumes:\n- \u002Fmnt\u002Fdata\u002Fceph\u002Fletsencrypt\u002Fdata\u002F:\u002Fdata\u002Fletsencrypt\u002F\n- \u002Fmnt\u002Fdata\u002Fceph\u002Fletsencrypt\u002Fetc\u002F:\u002Fetc\u002Fletsencrypt\u002F\n- \u002Fmnt\u002Fdata\u002Fceph\u002Fnginx\u002Fetc\u002F:\u002Fetc\u002Fnginx\u002F\n- \u002Fmnt\u002Fdata\u002Fwww\u002F:\u002Fwww\nnetworks:\n- host\nlogging:\ndriver: json-file\ndeploy:\nmode: global\nnetworks:\nhost:\nexternal: true\n\n"}]}]}]},{type:a,value:c},{type:b,tag:z,props:{},children:[{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:"Ở đây chúng ta mount volumes để lấy file cấu hình ssl và cấu hình nginx lần lượt là "},{type:b,tag:d,props:{},children:[{type:a,value:S}]},{type:a,value:T},{type:b,tag:d,props:{},children:[{type:a,value:A}]}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:"Thư mục chứa các file frontend là "},{type:b,tag:d,props:{},children:[{type:a,value:"\u002Fmnt\u002Fdata\u002Fwww"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:o,props:{id:J},children:[{type:b,tag:e,props:{href:"#23-t%E1%BA%A1o-file-c%E1%BA%A5u-h%C3%ACnh-nginx",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:K}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"Đăng nhập vào 1 trong 3 server trong cụm swarm\nTạo đường dẫn "},{type:b,tag:d,props:{},children:[{type:a,value:S}]},{type:a,value:T},{type:b,tag:d,props:{},children:[{type:a,value:A}]},{type:b,tag:f,props:{alt:l,src:"https:\u002F\u002Fimages.viblo.asia\u002F447aef19-1bdd-4a43-8f37-151ac5314a0d.png"},children:[]},{type:b,tag:f,props:{alt:l,src:"https:\u002F\u002Fimages.viblo.asia\u002Fd7af74d1-1cea-4e55-965d-ceb13927af1c.png"},children:[]},{type:a,value:"\nCác file trong thư mục "},{type:b,tag:d,props:{},children:[{type:a,value:A}]},{type:a,value:" như 1 cấu hình nginx bình thường các bạn có thể cài nginx rồi coppy\nlên server .\nỞ đây ta chỉ chú ý đến file nginx.conf và thư mục conf.d chứa các file cấu hình cho từng domain\nFile nginx.conf\n"},{type:b,tag:f,props:{alt:l,src:"https:\u002F\u002Fimages.viblo.asia\u002F5d10e318-8150-4a6c-a747-9444dd306400.png"},children:[]}]},{type:a,value:c},{type:b,tag:t,props:{className:[u]},children:[{type:b,tag:v,props:{className:[w,x]},children:[{type:b,tag:y,props:{},children:[{type:a,value:"user nginx;\nworker_processes 1;\n\nerror_log \u002Fvar\u002Flog\u002Fnginx\u002Ferror.log warn;\npid \u002Fvar\u002Frun\u002Fnginx.pid;\n\nevents {\nworker_connections 1024;\n}\n\nhttp {\ninclude \u002Fetc\u002Fnginx\u002Fmime.types;\ndefault_type application\u002Foctet-stream;\n\nlog_format main '$remote_addr - $remote_user [$time_local] \"$request\" '\n'$status $body_bytes_sent \"$http_referer\" '\n'\"$http_user_agent\" \"$http_x_forwarded_for\"';\n\naccess_log \u002Fvar\u002Flog\u002Fnginx\u002Faccess.log main;\n\nsendfile on;\n#tcp_nopush on;\n\nkeepalive_timeout 65;\n\n#gzip on;\n\ninclude \u002Fetc\u002Fnginx\u002Fconf.d\u002F*.conf;\n}\n\n"}]}]}]},{type:a,value:c},{type:b,tag:z,props:{},children:[{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:"Trong thư mục conf.d ta tạo file\n"},{type:b,tag:d,props:{},children:[{type:a,value:"daotaoyte.edu.vn.conf"}]},{type:b,tag:f,props:{alt:l,src:"https:\u002F\u002Fimages.viblo.asia\u002F58530b94-d979-4db5-968e-62686d341953.png"},children:[]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:t,props:{className:[u]},children:[{type:b,tag:v,props:{className:[w,x]},children:[{type:b,tag:y,props:{},children:[{type:a,value:"server {\nlisten 443 ssl http2;\nlisten [::]:443 ssl http2;\nserver_name daotaoyte.edu.vn www.daotaoyte.edu.vn;\nssl_certificate \u002Fetc\u002Fletsencrypt\u002Flive\u002Fdaotaoyte.edu.vn\u002Ffullchain.pem;\nssl_certificate_key \u002Fetc\u002Fletsencrypt\u002Flive\u002Fdaotaoyte.edu.vn\u002Fprivkey.pem;\n\nssl_session_timeout 5m;\nssl_protocols TLSv1 TLSv1.1 TLSv1.2;\n#ssl_ciphers \"HIGH:!aNULL:!MD5 or HIGH:!aNULL:!MD5:!3DES\";\nssl_prefer_server_ciphers on;\ncharset utf-8;\nroot \u002Fwww\u002Fdaotaoyte.edu.vn;\n\nlocation \u002F {\ntry_files $uri $uri\u002Fhome.html home.html;\n}\nlocation \u002Fmail {\nproxy_pass http:\u002F\u002Flocalhost:5000\u002F;\n}\n\n}\n\n"}]}]}]},{type:a,value:c},{type:b,tag:o,props:{id:L},children:[{type:b,tag:e,props:{href:"#24-t%E1%BA%A1o-file-%C4%91%E1%BB%83-c%E1%BA%A5u-h%C3%ACnh-ssl-https",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:M}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"Ở đây mình sẽ dùng 1 script để tạo và gia hạn ssl mình sẽ giới thiệu với các bạn trong bài sau\n"},{type:b,tag:f,props:{alt:"😄",src:"https:\u002F\u002Ftwemoji.maxcdn.com\u002F2\u002F72x72\u002F1f604.png"},children:[]},{type:a,value:".\nBây giờ mình sẽ xài luôn.\n"},{type:b,tag:f,props:{alt:l,src:"https:\u002F\u002Fimages.viblo.asia\u002F172c7ede-bdd1-4645-8bcb-3bbd0e06c96d.png"},children:[]}]},{type:a,value:c},{type:b,tag:o,props:{id:N},children:[{type:b,tag:e,props:{href:"#25-t%E1%BA%A1o-file-build-v%C3%A0-deploy-nginx-tr%C3%AAn-docker",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:O}]},{type:a,value:c},{type:b,tag:z,props:{},children:[{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:"Sau đó các bạn build file frontend và copy file đó vào thư mục "},{type:b,tag:d,props:{},children:[{type:a,value:"\u002Fmnt\u002Fdata\u002Fww"}]}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:"Tiếp đó chúng ta chỉ cần deploy stacks nginx_proxy bằng cách lên giao diện swarmpit và ấn deploylà xong\n"},{type:b,tag:f,props:{alt:l,src:"https:\u002F\u002Fimages.viblo.asia\u002F46aefe81-bcba-4b5c-92c7-70b18c831f6d.png"},children:[]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:s,props:{id:P},children:[{type:b,tag:e,props:{href:"#3-ki%E1%BB%83m-tra",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:Q}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"-Vào trang web vừa triển khai kiểm tra thử\n"},{type:b,tag:f,props:{alt:l,src:"https:\u002F\u002Fimages.viblo.asia\u002F5574c1fc-f9d8-4c62-a29f-6ebcdb1e13fc.png"},children:[]},{type:a,value:"\nChúng ta đã triển khai thành công nginx trên cụm docker swarm.\nDo gluster nên dữ liệu đã được đồng bộ trên cả 3 server. Chúng ta trỏ IP cả 3 server về domain nhé. Điều này sẽ giúp\nphân tải cho server.\nCảm ơn các bạn đã đọc bài viết của mình."}]}]},dir:"\u002F2021\u002Fviblo",path:"\u002F2021\u002Fviblo\u002Fdung-nginx-tren-docker-swarm-va-script-de-tao-va-gia-han-ssl-tren-docker-swarm-eW65G4jPKDO",extension:".md",createdAt:"2021-08-10T18:22:56.051Z",updatedAt:"2021-08-10T18:25:13.949Z",readingTime:{text:"3 min read",minutes:2.765,time:165900,words:553},locale:"vi",slugWithoutLocale:q},slug:q,prev:U,next:U}],fetch:{},mutations:void 0}}("text","element","\n","strong","a","img","true",-1,"span","icon","icon-link","image.png","p",3,"h3","li","dung-nginx-tren-docker-swarm-va-script-de-tao-va-gia-han-ssl-tren-docker-swarm-eW65G4jPKDO",2,"h2","div","nuxt-content-highlight","pre","language-text","line-numbers","code","ul","\u002Fmnt\u002Fdata\u002Fceph\u002Fnginx\u002Fetc\u002F","1-mở-đầu","1. Mở đầu","2-nào-chúng-ta-cùng-bắt-đầu","2. Nào chúng ta cùng bắt đầu.","21-trỏ-domain-về-ip-của-3-server-trong-cụm-swarm","2.1 Trỏ domain về IP của 3 server trong cụm swarm","22-tạo-container-nginx-trên-docker-swarm","2.2 Tạo container Nginx trên docker swarm","23-tạo-file-cấu-hình-nginx","2.3 Tạo file cấu hình nginx","24-tạo-file-để-cấu-hình-ssl-https","2.4 Tạo file để cấu hình ssl (https)","25-tạo-file-build-và-deploy-nginx-trên-docker","2.5 Tạo file build và deploy nginx trên docker","3-kiểm-tra","3. Kiểm tra","http:\u002F\u002Fipserver:888","\u002Fmn\u002Fdata\u002Fceph\u002Fletsencrypt\u002F"," và\n",null)));