cat books.txt |awk -F ' by ' '{print $2}'|sort -u|cat -n |awk '{ printf("%s: %s %s\n", $1, $2, $3)}'
