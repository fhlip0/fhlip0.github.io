##### Attempting to collect general sed awk grep things I regularly end up re-googling

external ip
```
dig +short myip.opendns.com @resolver1.opendns.com
curl https://checkip.amazonaws.com/
```

fix transported shell
```
sed -i 's/\r//' filename
```

find string in file, recursive, line number, regex word, pattern
```
grep -rnw '/' -e 'flag{'
```

grep for string in file showing output
```
grep -a string ./file
```

to exclude a result from the output (thin out nuclei output)
```
grep -v string ./file
```

finds a file, greps it ignoring case, for the specified pattern
```
find . -name '*.txt' -exec grep -i 'aws{' {} \; -print
```

find file
```
find / -name flag.txt
```

parse out base64 strings matching pattern - this is a travesty with a specific use
```
cat /var/log/apache2/access.log| perl -ne '(/id=/../HTTP/) && print' | perl -pe 's/.*(id=.*)/$1/' | perl -pe 's/(.*HTTP).*/$1/' | grep -v 'id=' | grep -v 'id=13' | cut -c4- | rev | cut -c5- | rev
```