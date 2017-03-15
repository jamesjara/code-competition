process.stdin.resume();
process.stdin.setEncoding('ascii');
var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;
process.stdin.on('data', function(data) {
    input_stdin += data;
});
process.stdin.on('end', function() {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function Node(data) {
    this.data = data;
    this.next = null;
}

function Solution() {
    this.removeDuplicates = function(head) {
        //Write your code here 
        /*
        
         head.next.next.data = 77;
         var segundo = head.next.next;
         var tercer = head.next.next.next;
         var cuarto = head.next.next.next.next;
         head.next.next.next.next.data = 88;
        
        segundo.next = cuarto;
        */
        if (!head) return;
        var current = head;
        while (current) {
            // 
            if (current) {
                var isEQ = (current && current.next && current.data == current.next.data);
                if (isEQ) {
                    if (current && current.next && current.next.next) {
                        //current.data = 77;
                        //current.next.data = 777;
                        //current.next = current.next.next; 
                        // console.log( current.data , "dene ser 777");
                        // todo verify next is not like current,
                        var value = current.data;
                        current.next = this.getNext(value, current);
                    } else {
                        //console.log("how nany times", current);
                        current.next = null
                    }
                }
                lasted = null;
                current = current.next;
            }
        }
        return head;
    }
    this.getNext = function(value, node) {
        var next = node.next;
        if (node.next && node.next.next) {
            next = node.next.next;
        }
        if (next && value == next.data) {
            //console.log(value, next.data);
            return this.getNext(value, next);
        }
        return next;
    }
    this.insert = function(head, data) {
        var p = new Node(data);
        if (head == null) {
            head = p;
        } else if (head.next == null) {
            head.next = p;
        } else {
            var start = head;
            while (start.next != null) {
                start = start.next;
            }
            start.next = p;
        }
        return head;
    };
    this.display = function(head) {
        var start = head;
        while (start) {
            process.stdout.write(start.data + " ");
            start = start.next;
        }
    };
}

function main() {
    var T = parseInt(readLine());
    var head = null;
    var mylist = new Solution();
    for (i = 0; i < T; i++) {
        var data = parseInt(readLine());
        head = mylist.insert(head, data);
    }
    head = mylist.removeDuplicates(head);
    mylist.display(head);
}
